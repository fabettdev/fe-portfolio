import logo from "../../assets/logo.png";

export default function Logo({
  className,
}: {
  className?: string;
}): React.ReactElement {
  return <img src={logo} className={className} />;
}
