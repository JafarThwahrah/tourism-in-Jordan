import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from './pages/Home';
import { BrowserRouter } from "react-router-dom";
import Pages from "./components/Pages";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
