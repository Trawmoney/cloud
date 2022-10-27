import useSWR from "swr";
import logo from "./logo.svg";
import "./App.css";

const fetcher = (key) => fetch(key).then((res) => res.json());

function App() {
  const { data } = useSWR("/api/message", fetcher);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{process.env.REACT_APP_CLOUD_URL}</p>
        <h1>{data?.message}</h1>
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
