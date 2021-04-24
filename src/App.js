import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  let data = [
    {
      title: 'olodama',
      price: 290
    },
    {
      title: 'rasengan',
      price: 21290
    },
    {
      title: 'mangkyo',
      price: 4325
    },
    {
      title: 'sharingan',
      price: 3465
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ExpenseItem 
          title ={data[0].title} 
          price ={data[0].price}
        ></ExpenseItem>
        
        <ExpenseItem 
          title ={data[1].title} 
          price ={data[1].price}
        ></ExpenseItem>
        <ExpenseItem 
          title ={data[2].title} 
          price ={data[2].price}
        ></ExpenseItem>
        <ExpenseItem 
          title ={data[3].title} 
          price ={data[3].price}
        ></ExpenseItem>

      </header>
    </div>
  );
}

export default App;
