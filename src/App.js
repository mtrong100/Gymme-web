import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Misson from "./Components/Misson/Misson";
import Training from "./Components/Training/Training";
import Plan from "./Components/Plan/Plan";
import Community from "./Components/Community/Community";
import Faq from "./Components/FAQ/Faq";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Misson></Misson>
      <Training></Training>
      <Plan></Plan>
      <Community></Community>
      <Faq></Faq>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
