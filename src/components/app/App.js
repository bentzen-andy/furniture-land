import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import HeroImage from "../home/HeroImage";
import ProductBlurb from "../home/ProductBlurb";
import ProductStats from "../home/ProductStats";
import BigQuote from "../home/BigQuote";
import InspirationBoard from "../home/InspirationBoard";
import "./App.css";

export function App() {
  return (
    <div className="app">
      <Nav />
      <HeroImage />
      <ProductBlurb /> {/* white */}
      <ProductStats /> {/* dark blue */}
      <InspirationBoard /> {/* white */}
      <BigQuote /> {/* orange */}
      <Footer />
    </div>
  );
}

export default App;
