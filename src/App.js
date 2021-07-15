import './App.css';
import Footer from "./Footer";
import Header from "./Header";
import SelectBox from "./SelectBox";

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <SelectBox />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
