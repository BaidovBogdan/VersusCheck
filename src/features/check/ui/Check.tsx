import { Input } from 'antd';
import { useAtom } from 'jotai';
import { useInputsAtom } from '../../../shared/atom/allAtoms';

interface InputProps {
  id: string;
}

export default function InputComponent({ id }: InputProps) {
  const [inputs, setInputs] = useAtom(useInputsAtom);

  const firstInput = inputs[id]?.firstInput || '';
  const secondInput = inputs[id]?.secondInput || '';

  const handleFirstInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [id]: { ...prev[id], firstInput: e.target.value },
    }));
  };

  const handleSecondInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [id]: { ...prev[id], secondInput: e.target.value },
    }));
  };

  return (
    <div className="p-4 md:flex justify-center flex-col items-center">
      <div className="md:flex flex-col">
        <div className="md:flex flex-col">
          <p>Versus</p>
          <Input
            value={firstInput}
            onChange={handleFirstInputChange}
            className="shadow-xl"
            suffix={`${firstInput.length}/300`}
          />
        </div>
        <br />
        <div className="md:flex flex-col">
          <p>Against</p>
          <Input
            value={secondInput}
            onChange={handleSecondInputChange}
            className="shadow-xl"
            suffix={`${secondInput.length}/300`}
          />
        </div>
      </div>
      <br />
    </div>
  );
}
