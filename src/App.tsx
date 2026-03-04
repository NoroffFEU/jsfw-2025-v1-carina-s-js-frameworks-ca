import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Routes from "./routes/Routes";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
