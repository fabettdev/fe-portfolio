import logo from "../../../public/logo.png";

export default function Logo({
  className,
}: {
  className?: string;
}): React.ReactElement {
  return <img src={logo} className={className} />;
}
