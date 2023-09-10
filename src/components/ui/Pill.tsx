export default function Pill({ label }: { label: string }): React.ReactElement {
  return (
    <div className="w-fit text-black border border-black rounded-xl px-2 py-0.5 text-xs">
      {label}
    </div>
  );
}
