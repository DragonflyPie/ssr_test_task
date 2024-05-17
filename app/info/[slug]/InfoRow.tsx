interface InfoRowProps {
  label?: string;
  info?: number | string | null;
}
const InfoRow = ({ label, info }: InfoRowProps) => {
  if (!label) return "";

  return (
    <div className="flex gap-2">
      <span className="font-light italic">{label}:</span>
      {info ? info : <span>-</span>}
    </div>
  );
};

export default InfoRow;
