import React, {useEffect, useState} from "react";
import Layout from "../../components/layout/Layout";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Panel, Row} from "rsuite";
import FAQItem from "./FAQItem";
import axios from "axios";
import {Card, Container} from "react-bootstrap";

function FAQPage(props) {

    const _FAQ = {
        question: "Will you there be a live session?",
        answer: "Yes there would be a live session."
    };
    const [FAQs, setFAQs] = useState([_FAQ, _FAQ, _FAQ, _FAQ]);
    const [userID, setUserID] = useState(localStorage.getItem("user_id") || null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [loading, setLoading] = useState(false);
    const [FAQ, setFAQ] = useState({question: "", answer: ""});

    useEffect(function () {
        axios({
            method: "get",
            url: "http://localhost:5000/api/v1/faqs",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }, [FAQs, token]);

    function showNotification(message, status) {
        if (status === "error") {
            Notification.error({
                title: "Failure",
                description: message
            });
        } else {
            Notification.success({
                title: "Success",
                description: message
            });
        }
    }

    function handleFAQChange(formValue, event) {
        setFAQ({...FAQ, [event.target.name]: event.target.value});
    }


    function handleSubmit(event) {
        event.preventDefault();
        if (!FAQ.question || !FAQ.answer) {
            setLoading(false);
            showNotification("Passwords do not match", "error");
        } else {
            setLoading(true);
            axios({
                method: "post",
                url: "http://localhost:5000/api/v1/faqs",
                data: userID
            }).then(function (response) {

                setFAQs(response.data.faqs);
                showNotification(response.data.message, "success");
                console.log(response);

            }).catch(function (error) {
                setLoading(false);
                showNotification("Email already in use", "error");
                console.log(error);
                console.log(`Error.Error${error.error}`);
            }).finally(function () {
                setLoading(false);
            });
        }
    }

    return (
        <Layout>
            <div style={{backgroundColor: "#ddd", minHeight: "100vh"}} className="py-5">
                <Container>
                    <Row>
                        {
                            (FAQs.length === 0) ? (
                                <Col style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    minHeight: "53vh",
                                    marginTop: "1.5em"
                                }}>
                                    <h4>No FAQs Available</h4>
                                </Col>
                            ) : (
                                FAQs.map(function (FAQ) {
                                    return (
                                        <Col sm={24} md={12} style={{marginTop: "1.2em"}}>
                                            <FAQItem FAQ={FAQ}/>
                                        </Col>
                                    )
                                })
                            )
                        }
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}

export default FAQPage;
