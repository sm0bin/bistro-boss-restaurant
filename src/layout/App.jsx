import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const App = () => {
  return (
    <>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default App;