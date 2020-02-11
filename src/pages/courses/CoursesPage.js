import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Grid, Row} from "rsuite";
import CourseListItem from "./CourseListItem";

function CoursesPage(props) {

    const _course = {
        name: "Programming in C",
        code: "COE252",
        students: [],
        price: {
            amount: 50.00,
            currency: "GHS"
        },
        status: "Started",
        image: `${process.env.PUBLIC_URL}/cprogrammingcover.jpg`
    };
    const [courses, setCourses] = useState([_course, _course, _course, _course, _course, _course]);
    return (
        <Layout>
            <div style={{backgroundColor: "#ddd"}} className="py-5">
                <Grid fluid={false}>
                    <Row>
                        {
                            (courses.length === 0) ? (
                                <Col style={{minHeight: " 60vh"}}
                                     className="d-flex justify-content-center align-items-center">
                                    <h5>No courses available</h5>
                                </Col>
                            ) : (


                                courses.map(function (course, index) {
                                    return (
                                        <Col key={index} xs={24} sm={24} md={12} lg={8} className="mb-3">
                                            <CourseListItem course={course}/>
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

export default CoursesPage;
