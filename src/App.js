import Expenses from "./components/Expenses";


function App() {
  let data = [
    {
      title: "Olodama",
      price: 290,
      date: new Date(2021, 4, 20),
    },
    {
      title: "Rasengan",
      price: 21290,
      date: new Date(2021, 4, 21),
    },
    {
      title: "Mangkyo",
      price: 4325,
      date: new Date(2021, 4, 22),
    },
    {
      title: "Sharingan",
      price: 3465,
      date: new Date(2021, 4, 23),
    },
  ];
  return (
    <div>
      <h1>Rough practicee</h1>
      <Expenses items = {data}/>
    </div>
  );
}

export default App;
