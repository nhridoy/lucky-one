import logo from "./logo.svg";
import "./App.css";
import Head from "./components/Head/Head";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="container mx-auto p-5">
        <Head />
        <Body />
      </div>
    </div>
  );
}

export default App;
