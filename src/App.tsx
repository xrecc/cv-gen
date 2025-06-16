import MainPage from "./MainPage";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <div>
        <MainPage />
      </div>
      <div className="divider divider-primary"></div>
      <Footer />
    </>
  );
}

export default App;
