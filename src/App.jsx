import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import Main from "./Componentes/Main";
import "./index.css";
import Router from "./Router/Router";

export function App() {
  return (
    <div>
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
