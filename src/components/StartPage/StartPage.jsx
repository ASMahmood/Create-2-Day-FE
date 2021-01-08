import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

class StartPage extends React.Component {
  state = {
    startExam: {
      candidateName: "",
      name: "",
    },
    examContent: {},
  };

  updateState = (e) => {
    let startExam = { ...this.state.startExam };
    let currentID = e.currentTarget.id;
    startExam[currentID] = e.currentTarget.value;
    this.setState({ startExam: startExam });
  };

  fetchExam = async () => {
    try {
      let response = await fetch(`http://localhost:8008/exams/start`, {
        method: "POST",
        body: JSON.stringify(this.state.startExam),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let exam = await response.json();
      this.props.beginExam(exam);
      this.props.history.push("/exam/" + exam._id);
    } catch (error) {
      console.log(error);
    }
  };

  submitExam = (e) => {
    e.preventDefault();
    console.log("BUTTON PRESSED");
    this.fetchExam();
  };

  render() {
    return (
      <Container
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ height: "100vh" }}
      >
        <Row className="mb-3">
          <h1>UGLY TESTS'R'US</h1>
        </Row>
        <Row>
          <Form onSubmit={this.submitExam}>
            <Form.Group>
              <Form.Label>Enter Your Name</Form.Label>
              <Form.Control
                type="text"
                id="candidateName"
                placeholder="Solid Snake"
                value={this.state.candidateName}
                onChange={(e) => this.updateState(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter the Test Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                placeholder="CQC Test"
                value={this.state.name}
                onChange={(e) => this.updateState(e)}
              />
            </Form.Group>
            <Button
              type="submit"
              value="Submit"
              variant="success"
              className="w-100"
            >
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default StartPage;
