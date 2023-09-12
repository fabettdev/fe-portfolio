// Components
import { BiSolidColor } from "react-icons/bi";
import Logo from "./ui/Logo";

export default function Header(): React.ReactElement {
  function switchTheme(): void {
    const theme: string | undefined = document.body.dataset.theme;

    document.body.dataset.theme = theme === "light" ? "dark" : "light";
  }

  return (
    <header className="container mx-auto flex justify-between items-center fixed top-0 left-0 right-0 py-3 z-50">
      <Logo className="w-10 h-10" />
      <button className="p-2 bg-darkGrey rounded-lg" onClick={switchTheme}>
        <BiSolidColor className="text-[#fff]" size={30} />
      </button>
    </header>
  );
}
