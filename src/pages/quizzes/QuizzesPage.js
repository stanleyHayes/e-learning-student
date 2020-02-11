import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Grid, Row} from "rsuite";
import QuizListItem from "./QuizListItem";

function QuizzesPage(props) {

    const _quiz = {
        course: {
            name: "Programming in C",
            code: "COE252",
            image: `${process.env.PUBLIC_URL}/cprogrammingcover.jpg`
        },
        status: "Yet to Start",
        start_date: "08-09-2020",
        duration: {
            amount: 120,
            unit: "minutes"
        }
    };

    const [quizzes, setQuizzes] = useState([_quiz, _quiz, _quiz, _quiz, _quiz, _quiz, _quiz]);

    return (
        <Layout>
            <div style={{backgroundColor: "#ddd", minHeight: "100vh"}} className="py-5">
                <Grid fluid={false}>
                    <Row>
                        {
                            (quizzes.length === 0) ? (
                                <Col style={{minHeight: " 60vh"}}
                                     className="d-flex justify-content-center align-items-center">
                                    <h5>No Quizzes available</h5>
                                </Col>
                            ) : (


                                quizzes.map(function (quiz, index) {
                                    return (
                                        <Col key={index} xs={24} sm={24} md={12} lg={8} className="mb-3">
                                            <QuizListItem quiz={quiz}/>
                                        </Col>
                                    )
                                })


                            )
                        }
                    </Row>
                </Grid>
            </div>
        </Layout>
    )
}

export default QuizzesPage;
