import Button from "react-bootstrap/Button";
import "../assets/css/css-pages/Home.css";

const Home = () => {
  return (
    <main id="home">
      <h1 className="title">Simple Stocks</h1>
      <h2 className="subtitle">A Beginner's Guide To The Stock Market</h2>

      <div className="description">
        <p>
          Our app aims to give users a straightforward way to learn about stocks
          by providing a manageable system to view the market.
        </p>

        <br />

        <p>Get started now and make smart decisions!</p>
      </div>

      <Button variant="success">Search For A Stock</Button>
    </main>
  );
};

export default Home;
