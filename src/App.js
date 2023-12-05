import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Termekek from "./components/Termekek";

function App() {
  const ADATOK = [
    {
      konyvcim: "Harry Potter 1", 
      szerzo: "J. K. Rowling",
      ar: 4000
    },
    {
      konyvcim: "Harry Potter 2", 
      szerzo: "J. K. Rowling",
      ar: 5000
    },
    {
      konyvcim: "Harry Potter 3", 
      szerzo: "J. K. Rowling",
      ar: 5500
    },
    {
      konyvcim: "Harry Potter 4", 
      szerzo: "J. K. Rowling",
      ar: 6000
    },
    {
      konyvcim: "Harry Potter 5", 
      szerzo: "J. K. Rowling",
      ar: 6000
    },

  ];

  function click(i) {
    console.log(ADATOK[i]);
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <main className = "container">
        <Termekek  adatok = {ADATOK} click = {click}/>
      </main>
    </div>
  );
}

export default App;
