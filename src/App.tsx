import Header from "./components/Header";
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
      <div className="text-center text-white mt-20 text-5xl font-bold px-4">
        <h1 className="tracking-wider drop-shadow-lg">
          Sen hayal et, biz gerçeğe dönüştürelim.
        </h1>
      </div>

      <div className="flex flex-wrap flex-col md:flex-row justify-around items-center mt-16">
        {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, index) => (
          <div
            key={index}
            className="w-80 m-5 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              className="w-full rounded-lg shadow-lg object-contain"
              src={logo}
              alt={`Logo ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <footer className="mt-20 text-center text-gray-400 text-sm">
        © 2024 Tüm hakları saklıdır. Bizimle hayallerinizi gerçeğe dönüştürün.
      </footer>
    </>
  );
}

export default App;
