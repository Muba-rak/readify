import "./App.css";
import FeaturedBooks from "./components/FeaturedBooks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedBooks />
      <News />
      <Footer />
    </>
  );
}

export default App;
