import Navbar from "./Navbar";
import Shop from "./Shop";

function App() {
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center">
        <Shop />
      </div>
    </>
  );
}

export default App;
