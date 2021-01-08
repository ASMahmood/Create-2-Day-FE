import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

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
    this.props.nextQuestion();
  };

  render() {
    return (
      <Container>
        {console.log(this.props.question)}
        <Row>{this.props.question.text}</Row>
        <Row>
          <Form onSubmit={this.submitAnswer}>
            <Form.Group as={Row}>
              {this.props.question.answers.map((answer, index) => (
                <Col xs={6} key={index}>
                  <Form.Check
                    type="radio"
                    name="answerChecks"
                    id={index}
                    label={answer.text}
                    onClick={() =>
                      this.setState({
                        isSelected: true,
                        answer: {
                          question: this.props.index,
                          answer: index,
                        },
                      })
                    }
                  />
                </Col>
              ))}
            </Form.Group>
            {this.state.isSelected && <Button type="submit">NEXT</Button>}
          </Form>
        </Row>
      </Container>
    );
  }
}
export default Questions;
