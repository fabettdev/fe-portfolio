import Smartphone from "../Smartphone";

export default function Skills(): React.ReactElement {
  return (
    <section
      className="container mx-auto flex justify-center items-start relative z-10"
      style={{
        perspective: "1500px",
      }}
    >
      <Smartphone />
    </section>
  );
}
