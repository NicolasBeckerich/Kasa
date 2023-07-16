import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </Router>
  );
}

export default App;