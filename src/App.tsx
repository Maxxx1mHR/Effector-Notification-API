import { useUnit } from "effector-react/effector-react.umd";
import { useEffect } from "react";
// import { $data } from "./model/stores";
// import { fetchData } from "./model/effects";
import "./App.scss";
import { AnimeItem } from "./components/AnimeItem";

function App() {
  useEffect(() => {
    // fetchData();
  }, []);

  // const data = useUnit($data);

  return <AnimeItem />;
}

export default App;
