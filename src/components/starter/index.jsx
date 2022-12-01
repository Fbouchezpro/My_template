import { useState } from "react";
import "./style.scss";
import logo from "../../assets/2.png";

const Starter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <img src={logo} alt="logo" />
      <h1>C'est ici que tout commence</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +1 count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          -1 count is {count}
        </button>
      </div>
    </div>
  );
};

export default Starter;
