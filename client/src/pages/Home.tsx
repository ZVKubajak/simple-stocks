import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <main>
      <h1>Simple Stocks</h1>
      <h2>A Beginner's Guide To The Stock Market</h2>

      <p>
        Our app aims to give users a straightforward way to learn about stocks by providing a manageable system to view the market.
      </p>
      <p>Get started now and make smart decisions!</p>

      <Button variant="success">Search For A Stock</Button>
    </main>
  );
};

export default Home;
