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
    let newNumber = this.state.selectedIndex + 1;
    this.setState({
      selectedIndex: newNumber,
      selectedQuestion: this.props.exam.questions[newNumber],
    });
  };

  render() {
    return (
      <div>
        {this.state.selectedIndex <= 4 ? (
          this.state.selectedQuestion.hasOwnProperty("text") && (
            <Questions
              index={this.state.selectedIndex}
              question={this.state.selectedQuestion}
              examID={this.props.exam._id}
              nextQuestion={this.nextQuestion}
            />
          )
        ) : (
          <Scoreboard examID={this.props.exam._id} />
        )}
      </div>
    );
  }
}

export default QuestionPage;
