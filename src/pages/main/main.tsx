import { useState } from 'react';
import { Button } from 'antd';
import { useAtom } from 'jotai';
import {
  useInputsAtom,
  useStorageHistoryAtom,
} from '../../shared/atom/allAtoms';
import { Header } from '../../widgets/header';
import { Card } from '../../features/card';
import { Check } from '../../features/check';
import { HistoryCard } from '../../features/historyCard/';
import Groq from 'groq-sdk';

const GROQ_API_KEY = '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';
const groq = new Groq({ apiKey: GROQ_API_KEY, dangerouslyAllowBrowser: true });

interface MainPageProps {
  id: string;
}

export default function MainPage({ id }: MainPageProps) {
  const [inputs, setInputs] = useAtom(useInputsAtom);
  const [storageHistory, setStorageHistory] = useAtom(useStorageHistoryAtom);
  const [loading, setLoading] = useState(false);

  const firstInput = inputs[id]?.firstInput || '';
  const secondInput = inputs[id]?.secondInput || '';

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const content = await fetchChatCompletion(firstInput, secondInput);
      const historyId = Date.now().toString();

      // Add to history at the beginning
      setStorageHistory((prev) => ({
        ...prev,
        [id]: [{ id: historyId, content }, ...(prev[id] || [])],
      }));

      // Clear current inputs
      setInputs((prev) => ({
        ...prev,
        [id]: { firstInput: '', secondInput: '' },
      }));
    } catch (error) {
      console.error('Error fetching chat completion:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Card id={id} />
      <Check id={id} />
      <div className="flex flex-col items-center justify-center">
        <Button
          onClick={handleButtonClick}
          className="p-3 w-4/5 h-10 bg-blue-500 text-white md:w-96"
        >
          Versus Check
        </Button>
        <br />
        <p>History:</p>
        {loading && <p>Loading...</p>}
        <div className="flex flex-col justify-center items-center">
          {storageHistory[id]?.map((item) => (
            <HistoryCard
              key={item.id}
              firstInput={firstInput}
              secondInput={secondInput}
              value={item.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}

async function fetchChatCompletion(
  firstInput: string,
  secondInput: string,
): Promise<string> {
  console.log('Creating chat completion...');
  const response = await groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `What's a ${firstInput} or a ${secondInput}? Write in a maximum of 10 words.`,
      },
    ],
    model: 'llama3-8b-8192',
  });
  console.log('Chat completion received:', response);
  return response.choices[0]?.message?.content || 'No content received';
}
