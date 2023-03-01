// import logo from './logo.svg';
import './App.css';
// import Home from './pages/Home';
// import Title from './components/Title';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Hello! I'm Rutvi!!</h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Home></Home> */}

      {/* <Title title='user1' description='user1 has visited the website.'></Title>
    <Title title='user2' description='user2 has visited the website.'></Title>
    <Title title='user3' description='user3 has visited the website.'></Title> */}

    <Counter></Counter>
    </div>
  );
}

export default App;
