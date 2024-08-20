import Home from "./components/Home";

import { data } from "../src/data.js";
const App = () => {
  return (
    <div>
      <Home data={data} />
    </div>
  );
};

export default App;
