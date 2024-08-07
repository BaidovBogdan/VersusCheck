import { useAtom } from 'jotai';
import { useCardAtom } from '../../../shared/atom/allAtoms';
import { Button } from 'antd';

interface CheckProps {
  id: string;
}

export default function Check({ id }: CheckProps) {
  const [card, setCard] = useAtom(useCardAtom);

  const handleButtonClick = (value: string) => {
    setCard((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <>
      <div className="p-4 md:flex justify-center flex-wrap items-start">
        <p className="">Compare</p>
        <div className="p-4 md:flex justify-center flex-wrap items-center">
          <Button
            onClick={() => handleButtonClick('Better')}
            className={
              card[id] === 'Better'
                ? 'bg-blue-500 text-white h-7'
                : 'text-black bg-transparent border-none h-7'
            }
          >
            Better
          </Button>
          <Button
            onClick={() => handleButtonClick('Expensive')}
            className={
              card[id] === 'Expensive'
                ? 'bg-blue-500 text-white h-7'
                : 'text-black bg-transparent border-none h-7'
            }
          >
            Expensive
          </Button>
          <Button
            onClick={() => handleButtonClick('Reliable')}
            className={
              card[id] === 'Reliable'
                ? 'bg-blue-500 text-white h-7'
                : 'text-black bg-transparent border-none h-7'
            }
          >
            Reliable
          </Button>
          <Button
            onClick={() => handleButtonClick('Cheaper')}
            className={
              card[id] === 'Cheaper'
                ? 'bg-blue-500 text-white h-7'
                : 'text-black bg-transparent border-none h-7'
            }
          >
            Cheaper
          </Button>
          <Button
            onClick={() => handleButtonClick('Faster')}
            className={
              card[id] === 'Faster'
                ? 'bg-blue-500 text-white h-7'
                : 'text-black bg-transparent border-none h-7'
            }
          >
            Faster
          </Button>
          <Button
            onClick={() => handleButtonClick('Dangerous')}
            className={
              card[id] === 'Dangerous'
                ? 'bg-blue-500 text-white h-7'
                : 'text-black bg-transparent border-none h-7'
            }
          >
            Dangerous
          </Button>
        </div>
      </div>
    </>
  );
}
