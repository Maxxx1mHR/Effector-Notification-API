import { useUnit } from "effector-react/effector-react.umd";
import { useEffect } from "react";
import { $data } from "./model/stores";
import { fetchData } from "./model/effects";

function App() {
  useEffect(() => {
    // fetchData();
  }, []);

  const data = useUnit($data);

  console.log(data);

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
