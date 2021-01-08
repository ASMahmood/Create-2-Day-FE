import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

class Questions extends React.Component {
  state = {
    question: this.props.question,
    answer: {
      question: this.props.index,
      answer: 5,
    },
  };
  render() {
    return (
      <Container>
        {console.log(this.props.question)}
        <Row>{this.props.question.text}</Row>
        <Row>
          <Form>
            <Form.Group as={Row}>
              {this.props.question.answers.map((answer, index) => (
                <Col xs={6} key={index}>
                  <Form.Check
                    type="radio"
                    name="answerChecks"
                    id={index}
                    label={answer.text}
                  />
                </Col>
              ))}
            </Form.Group>
          </Form>
        </Row>
      </Container>
    );
  }
}
export default Questions;
