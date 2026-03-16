import Card from "./Card";

const ExperiencesSection = () => {
  return (
    <section style={{ padding: "80px 0", background: "blue" }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "80vw",
          margin: "0 auto",
        }}
      >
        <Card />
      </div>
    </section>
  );
};

export default ExperiencesSection;
