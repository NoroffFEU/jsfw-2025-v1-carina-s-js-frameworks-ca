import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <div>
          <p>Main content to be added later</p>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
