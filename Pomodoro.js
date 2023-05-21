import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(20);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (time >= targetTime * 60) {
      setIsTimeUp(true);
      const audio = new Audio(
        "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
      );
      audio.play();
    } else {
      setIsTimeUp(false);
    }
  }, [time, targetTime]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
  };

  const handleTargetTimeChange = (event) => {
    setTargetTime(event.target.value);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <Container className="text-center">
      <Row className="justify-content-center mt-4">
        <Col md="auto">
          <h1>POMODORO TIMER</h1>
          <Form.Group controlId="targetTime">
            <Form.Label>Target time (minutes)</Form.Label>
            <Form.Control
              type="number"
              value={targetTime}
              onChange={handleTargetTimeChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <>
        {isTimeUp && (
          <Row className="justify-content-center mt-4">
            <Col className="text-center">
              <div className="text-danger">Time is out!</div>
            </Col>
          </Row>
        )}
      </>
      <Row className="justify-content-center">
        <Col className="mb-4">
          <div className="display-1">{formatTime(time)}</div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <div className="justify-content-center">
          <Button variant="primary" onClick={handleStart} disabled={isRunning}>
            Start
          </Button>
          <p></p>
        </div>
        <div className="justify-content-center">
          <Button
            variant="secondary"
            onClick={handleStop}
            disabled={!isRunning}
          >
            Stop
          </Button>
          <p></p>
        </div>
        <div className="justify-content-center">
          <Button variant="danger" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </Row>
    </Container>
  );
}

export default App;
