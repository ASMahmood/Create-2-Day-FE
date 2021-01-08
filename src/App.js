import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import StartPage from "./components/StartPage/StartPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={StartPage} />
    </BrowserRouter>
  );
}

export default App;
