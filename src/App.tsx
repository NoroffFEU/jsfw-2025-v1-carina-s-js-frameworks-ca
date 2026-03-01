import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Routes from "./routes/Routes";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
