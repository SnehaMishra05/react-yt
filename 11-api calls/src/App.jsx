import axios from "axios";
import { useState } from "react";

const App = () => {
  // const getData = async () => { }
  // async function getData() {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/1",
  //   );

  //   // console.log(data); //{Promise - peding state}

  //   console.log("Data received:", response);

  //   const data = await response.json();
  //   console.log("Parsed data:", data);
  // }

  const [data, setData] = useState([]);

  //axios
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log("Data received:", response.data);
    setData(response.data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <h3>
              Hello, {elem.author}
              {idx}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default App;
