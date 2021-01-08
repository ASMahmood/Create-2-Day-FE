import React from "react";
import Scoreboard from "../Scoreboard/Scoreboard";
import Questions from "./Questions";

class QuestionPage extends React.Component {
  state = {
    selectedQuestion: {},
    selectedIndex: 0,
  };

  componentDidMount = () => {
    console.log(this.props.exam);
    this.setState({ selectedQuestion: this.props.exam.questions[0] });
  };

  nextQuestion = () => {
    this.setState({ selectedIndex: this.state.selectedIndex + 1 });
    this.setState({
      selectedQuestion: this.props.exam.questions[this.state.selectedIndex],
    });
  };

  render() {
    return (
      <div>
        <h1>QUESTIONS GO HERE</h1>
        {this.state.selectedQuestion.hasOwnProperty("text") &&
        this.state.selectedIndex <= 4 ? (
          <Questions
            index={this.state.selectedIndex}
            question={this.state.selectedQuestion}
            examID={this.props.exam._id}
            nextQuestion={this.nextQuestion}
          />
        ) : (
          <Scoreboard examID={this.props.exam._id} />
        )}
      </div>
    );
  }
}

export default QuestionPage;
