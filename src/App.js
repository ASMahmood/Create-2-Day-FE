import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import StartPage from "./components/StartPage/StartPage";
import QuestionPage from "./components/QuestionPage/QuestionPage";

class App extends React.Component {
  state = {
    exam: {},
  };

  beginExam = (exam) => {
    this.setState({ exam: exam });
    console.log("exam in app.js");
    console.log(this.state.exam);
  };

  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={(props) => (
            <StartPage {...props} beginExam={this.beginExam} />
          )}
        />
        <Route
          path="/exam/:examID"
          render={(props) => <QuestionPage {...props} exam={this.state.exam} />}
        />
      </BrowserRouter>
    );
  }
}

export default App;
