import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const ExperiencesSection = () => {
  return (
    <section style={{ padding: "80px 0", background: "var(--body-blue)" }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "80vw",
          margin: "0 auto",
        }}
      >
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </section>
  );
};

export default ExperiencesSection;
