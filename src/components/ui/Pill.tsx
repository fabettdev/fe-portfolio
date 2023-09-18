export default function Pill({
  label,
  className,
}: {
  label: string;
  className: string;
}): React.ReactElement {
  return (
    <div className={`w-fit border rounded-xl px-2 py-0.5 ${className ?? ""}`}>
      {label}
    </div>
  );
}
