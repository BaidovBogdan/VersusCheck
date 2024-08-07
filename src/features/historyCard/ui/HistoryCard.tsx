export interface HistoryCardProps {
  firstInput: string;
  secondInput: string;
  value: string;
}

export default function HistoryCard({ value }: HistoryCardProps) {
  return (
    <div className="flex justify-center flex-col p-4 items-start">
      <i className="text-left">{value}</i>
    </div>
  );
}
