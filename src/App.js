import "./App.css";
import Form from "./components/body/Form";
import HowWeWork from "./components/body/HowWeWork";
import Package from "./components/body/Package";
import ProgrammeBody from "./components/body/ProgrammeBody";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/heroSection/About";
import NavBar from "./components/navbar/NavBar";
function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <About />
      <ProgrammeBody />
      <HowWeWork />
      <Form />
      <Package />
      <Footer />
    </div>
  );
}

export default App;
