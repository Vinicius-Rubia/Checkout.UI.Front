import { Header } from "./components/header";
import { ThemeProvider } from "./components/theme-provider";
import { Home } from "./pages/home";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="checkout-theme">
      <Header />
      <div className="container">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
