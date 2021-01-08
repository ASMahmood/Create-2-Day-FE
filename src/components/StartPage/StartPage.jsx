import React from "react";
import { Container, Row, Form } from "react-bootstrap";

class StartPage extends React.Component {
  state = {
    startExam: {
      candidateName: "",
      name: "",
    },
  };

  updateState = (e) => {
    let startExam = { ...this.state.startExam };
    let currentID = e.currentTarget.id;
    startExam[currentID] = e.currentTarget.value;
    this.setState({ startExam: startExam });
  };

  render() {
    return (
      <Container>
        <Row>
          <h1>ENTER NAME AND TEST NAME</h1>
        </Row>
        <Row>
          <Form>
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
          </Form>
        </Row>
      </Container>
    );
  }
}

export default StartPage;
