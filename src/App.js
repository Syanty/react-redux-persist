import logo from "./logo.svg";
import "./App.css";
import store from "./stores/index";
import { userAdded, booksAdded, addedToCart } from "./actions/index";
function App() {
  const user = {
    id: 1,
    name: "Santosh Tharu",
  };

  const books = [
    {
      id: 1,
      name: "React js",
    },
    {
      id: 2,
      name: "React js advanced",
    },
  ];
  const products = [
    {
      id: 1,
      name: "phone1",
      price: 11111,
    },
    {
      id: 2,
      name: "phone2",
      price: 222222,
    },
    {
      id: 3,
      name: "phone3",
      price: 333333,
    },
  ];
  store.dispatch(userAdded(user));
  store.dispatch(booksAdded(books));
  store.dispatch(addedToCart(products));
  console.log(store.getState());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
