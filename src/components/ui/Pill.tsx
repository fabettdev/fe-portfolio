export default function Pill({ label }: { label: string }): React.ReactElement {
  return <div className="w-fit bg-black text-white px-3 text-sm">{label}</div>;
}
