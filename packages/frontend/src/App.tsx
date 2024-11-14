import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SaveUser } from "./components/saveUser";

function App() {
  const [token, setToken] = useState("");

  const handleSetToken = (token) => {
    setToken(token);
  };

  return (
    <>
      <h1>JWT Token: ${token}</h1>
      <SaveUser />
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
