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
          <SelectBox options = {[
            { label: "더기프팅컴퍼니", value: "0" },
            { label: "월간가슴", value: "1" },
            { label: "인더웨어", value: "2" },
            { label: "프론트엔드 엔지니어", value: "3" }
          ]} initValue = {1} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
