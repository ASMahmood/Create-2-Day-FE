import React from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  ProgressBar,
} from "react-bootstrap";

class Questions extends React.Component {
  state = {
    question: this.props.question,
    answer: {
      question: this.props.index,
      answer: 5,
    },
    isSelected: false,
  };

  componentDidMount = () => {
    this.timer();
  };

  componentDidUpdate = (prevState, prevProps) => {
    if (prevProps.question !== this.props.question) {
      this.timer();
    }
  };

  timer = () => {
    setTimeout(() => {
      this.props.nextQuestion();
    }, this.props.question.duration * 1000);
  };

  submitAnswer = (e) => {
    e.preventDefault();
    this.sendAnswer();
    this.setState({ isSelected: false });
    this.props.nextQuestion();
  };

  sendAnswer = async () => {
    try {
      let response = await fetch(
        `http://localhost:8008/exams/${this.props.examID}/answer`,
        {
          method: "POST",
          body: JSON.stringify(this.state.answer),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let res = response.body;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  reduceTime = () => {
    let timeLeft = 100;
    let progressTimer = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(progressTimer);
      }
      document.querySelector("#progressBar").now = 100 - timeLeft;
      timeLeft -= 1;
    }, 1000);
    return 10;
  };

  render() {
    return (
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        {console.log(this.props.question)}
        <Row
          className="w-50 mb-4 justify-content-center"
          style={{ display: "block" }}
        >
          <ProgressBar
            id="progressBar"
            variant="success"
            now={this.reduceTime()}
          />
        </Row>
        <Row className="w-50 mb-4 justify-content-center">
          {this.props.question.text}
        </Row>

        <Row className="w-50">
          <Form
            onSubmit={this.submitAnswer}
            className="w-100 justify-content-between"
          >
            <Form.Group as={Row}>
              {this.props.question.answers.map((answer, index) => (
                <Col
                  xs={6}
                  key={index}
                  className="d-flex justify-content-center"
                >
                  <Form.Check
                    type="radio"
                    name="answerChecks"
                    id={"answer" + index}
                    label={answer.text}
                    onClick={() =>
                      this.setState({
                        answer: {
                          question: this.props.index,
                          answer: index,
                        },
                        isSelected: true,
                      })
                    }
                  />
                </Col>
              ))}
            </Form.Group>
            {this.state.isSelected && (
              <Button type="submit" variant="success" className="w-100">
                NEXT
              </Button>
            )}
          </Form>
        </Row>
      </Container>
    );
  }
}
export default Questions;
