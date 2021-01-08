import React from "react";
import { Container, Row } from "react-bootstrap";

class Scoreboard extends React.Component {
  state = {
    exam: {},
  };

  componentDidMount = () => {
    this.fetchExam();
  };

  fetchExam = async () => {
    try {
      let response = await fetch(
        `http://localhost:8008/exams/` + this.props.examID
      );
      let results = await response.json();
      this.setState({ exam: results });
      console.log(this.state.exam);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <h1>ScoreBoard</h1>
        </Row>
        <Row>
          <h5>
            Score:{" "}
            {this.state.exam ? this.state.exam.score : "Currently calculating"}
          </h5>
        </Row>
      </Container>
    );
  }
}

export default Scoreboard;
