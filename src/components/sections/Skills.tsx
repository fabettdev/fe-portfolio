import Smartphone from "../Smartphone";

export default function Skills(): React.ReactElement {
  return (
    <section
      className="container mx-auto flex justify-center items-start"
      style={{
        perspective: "1500px",
      }}
    >
      <Smartphone />
    </section>
  );
}
