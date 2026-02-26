import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main className="mx-auto flex w-full max-w-7xl grow flex-col justify-center bg-amber-100 px-4 sm:px-12 xl:px-0">
        <p>Main content to be added later</p>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
