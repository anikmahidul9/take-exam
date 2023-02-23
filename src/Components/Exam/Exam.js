import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Alert, Card, Form, Toast } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Correct from "../Correct/Correct";
import "./Exam.css";

const Exam = () => {
  const params = useParams();
  const { id } = params;
  const [question, setQuestion] = useState([]);
  const [correct, setCorrect] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  useEffect(() => {
    const fetchQuestion = async () => {
      const url = ` https://openapi.programming-hero.com/api/quiz/${id}`;
      const res = await fetch(url);
      const data = await res.json();
      const formatedQuestions = data.data.questions.map((question) => {
        return {
          question: question.question,
          options: question.options,
          correctAnswer: question.correctAnswer,
        };
      });
      setQuestion(formatedQuestions);
    };
    fetchQuestion();
  }, []);
  const ans = () => question.map((c) => c.correctAnswer);
  console.log(ans());
  const handleAnswer = (answer, index) => {
    if (ans().includes(answer)) {
     const toast =()=>{<Toast>
      <Toast.Header>
        <strong className="me-auto"  style={{ color: "white" }}>Congragulations</strong>
      </Toast.Header>
      <Toast.Body>{answer} is right ans</Toast.Body>
    </Toast>}
    } else {
      console.log("Nooo");
    }
  };
  console.log(question.id);
  return (
    <div className="d-grid justify-content-center">

      {question.map((que, index) => {
        return (
          <Card
            bg={"Info".toLowerCase()}
            key={"Info"}
            text={"Info".toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "30rem", padding: "10px" }}
            className="mb-2"
          >
            <Card.Text>
              <div className="font">
                <h3>Quiz No:{index + 1}</h3>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
              </div>
              <h5>{que.question}</h5>

              {que.options.map((opt) => {
                return (
                  <Alert key={"info"} variant={"info"}>
                    <Form className="content">
                      <div
                        key={"radio"}
                        className="mb-3 Light"
                        onClick={() => handleAnswer(opt)}
                      >
                        <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
                          <Form.Check.Input type={"radio"} isValid />
                          <Form.Check.Label style={{ color: "#344A9B" }}>
                            {opt}
                          </Form.Check.Label>
                        </Form.Check>
                      </div>
                    </Form>
                  </Alert>
                );
              })}
            </Card.Text>
          </Card>
        );
      })}
    </div>
  );
};

export default Exam;
