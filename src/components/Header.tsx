// Components
// import Logo from "./ui/Logo";
import Button from "./ui/Button";
// Icons
import { BiSolidColor } from "react-icons/bi";

export default function Header(): React.ReactElement {
  function switchTheme(): void {
    const theme: string | undefined = document.body.dataset.theme;

    document.body.dataset.theme = theme === "light" ? "dark" : "light";
  }

  return (
    <header className="container mx-auto flex justify-between items-center fixed top-0 left-0 right-0 py-3 z-50">
      <div></div> {/* <Logo className="w-10 h-10" /> */}
      <Button className="p-2 bg-brown rounded-lg" onClick={switchTheme}>
        <BiSolidColor className="text-white" size={30} />
      </Button>
    </header>
  );
}
