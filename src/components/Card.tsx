import "./Card.css";

const Card = (props: any) => {
  return (
    <main className="card">
      <h1>Age Calculator</h1>
      {props.children}
    </main>
  );
};

export default Card;
