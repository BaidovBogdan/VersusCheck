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
    <div className="md:flex justify-center p-4 gap-6 flex-row">
      <div className="w-full md:w-auto">
        <p>Versus</p>
        <Input
          value={firstInput}
          onChange={handleFirstInputChange}
          className="shadow-md w-full md:w-48 "
          suffix={`${firstInput.length}/300`}
        />
      </div>
      <br />
      <div>
        <p>Against</p>
        <Input
          value={secondInput}
          onChange={handleSecondInputChange}
          className="shadow-md w-full md:w-48"
          suffix={`${secondInput.length}/300`}
        />
      </div>
    </div>
  );
}
