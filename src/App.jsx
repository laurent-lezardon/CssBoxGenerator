import Header from "./components/Header";
import Footer from "./components/Footer";
import Visualisation from "./components/Visualisation";
import ParametersBox from "./Layout/ParametersBox";

function App() {
  return (
    <div className=" h-screen  ">
      <Header />
      <main className=" flex flex-wrap justify-center sm:items-center  bg-slate-700 sm:px-10 md:flex-nowrap ">
        <ParametersBox />
        <Visualisation />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
