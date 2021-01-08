import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

class Scoreboard extends React.Component {
  state = {
    exam: undefined,
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
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Row className="mb-3">
          <h1>Final Score</h1>
        </Row>
        <Row className="w-75 mb-3 justify-content-between">
          <h5>
            Score:{" "}
            {this.state.exam ? this.state.exam.score : "Currently calculating"}
          </h5>
          <h5>👈: Answer you selected</h5>
          <h5>💯: Correct Answer</h5>
        </Row>
        <Row className="w-75">
          {this.state.exam &&
            this.state.exam.questions.map((question, index) => (
              <Container key={index} className="mb-5">
                <Row>
                  <h6>{question.text}</h6>
                </Row>
                <Row>
                  {question.answers.map((answer, i) => (
                    <Col xs={6} key={i}>
                      <span>
                        {answer.isCorrect === true && "💯"} {answer.text}{" "}
                        {question.providedAnswer === i && "👈"}
                      </span>
                    </Col>
                  ))}
                </Row>
              </Container>
            ))}
        </Row>
      </Container>
    );
  }
}

export default Scoreboard;
