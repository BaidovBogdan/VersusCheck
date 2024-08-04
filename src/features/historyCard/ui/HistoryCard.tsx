export interface HistoryCardProps {
  firstInput: string;
  secondInput: string;
  value: string;
}

export default function HistoryCard({ value }: HistoryCardProps) {
  return (
    <div className="flex justify-center flex-col items-center cente">
      <i>{value}</i>
      <br />
    </div>
  );
}
