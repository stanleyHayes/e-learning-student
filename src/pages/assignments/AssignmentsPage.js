import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Grid, Icon, IconButton, Row} from "rsuite";
import {Link} from "react-router-dom";
import AssignmentListItem from "./AssignmentListItem";

function AssignmentsPage(props) {

    const _assignment = {
        course: {
            name: "Programming in C",
            code: "COE252",
            image: `${process.env.PUBLIC_URL}/cprogrammingcover.jpg`
        },
        submission_date: "08-10-2020",
        start_date: "08-09-2020",
        questions: [],
        submissions: []
    };

    const [assignments, setAssignments] = useState([_assignment, _assignment, _assignment, _assignment, _assignment, _assignment, _assignment, _assignment, _assignment, _assignment]);

    return (
        <Layout>
            <div style={{backgroundColor: "#ddd", minHeight: "100vh"}} className="py-5">
                <Grid fluid={false}>
                    <Row>
                        {
                            (assignments.length === 0) ? (
                                <Col style={{minHeight: " 60vh"}}
                                     className="d-flex justify-content-center align-items-center">
                                    <h5>No assignments available</h5>
                                </Col>
                            ) : (


                                assignments.map(function (assignment, index) {
                                    return (
                                        <Col key={index} xs={24} sm={24} md={12} lg={8} className="mb-3">
                                            <AssignmentListItem assignment={assignment}/>
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

export default AssignmentsPage;
