import Header from "./components/header";
import logo1 from "./assets/deniz.png";
import logo2 from "./assets/cicekci.png";
import logo3 from "./assets/kva.png";
import logo4 from "./assets/devrim.png";
import logo5 from "./assets/free_wings.png";
import logo6 from "./assets/logo4.png";
function App() {
  return (
    <>
      <Header />
      <div className="flex  text-center justify-center text-white mt-20 text-6xl">
        Sen hayal et, biz gerçeğe dönüştürelim.
      </div>
      <div className="flex flex-wrap flex-col md:flex-row justify-around items-center mt-10">
        <img className="w-80 m-5  shadow-10xl" src={logo1} alt="" />
        <img className="w-80 m-5" src={logo2} alt="" />
        <img className="w-80 m-5" src={logo3} alt="" />
        <img className="w-80 m-5" src={logo4} alt="" />
        <img className="w-80 m-5" src={logo5} alt="" />
        <img className="w-80 m-5" src={logo6} alt="" />
      </div>
    </>
  );
}
export default App;
