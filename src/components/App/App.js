import { useEffect } from "react";
import "./App.css";
import * as vkusnoApi from "../../utils/vkusnoApi";

function App() {
  console.log("a");

  useEffect(() => {
    vkusnoApi
      .getRestaurants()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }, []);

  return (
    <div className="App">
      <p>aaa</p>
    </div>
  );
}

export default App;
