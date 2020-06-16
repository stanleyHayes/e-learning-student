import React from "react";
import {
    Col,
    Content,
    Grid,
    List,
    Row,
    Sidenav
} from "rsuite";
import NavigationBar from "../navigation/NavigationBar";
import {Link} from "react-router-dom";

function Layout(props) {

    const styles = {
        link: {
            fontFamily: "Helvetica",
            fontSize: "18px",
            paddingLeft: "16px"
        }
    };


    return (
        <div>
            <NavigationBar/>

            <Grid fluid={true}>
                <Row>
                    <Col xsHidden={true} smHidden={true} mdHidden={true} lg={4}>
                        <Sidenav style={{backgroundColor: "white"}}>
                            <Sidenav.Body>
                                <List hover={true} bordered={true} size="md" className="px-2">
                                {/*    <List.Item>*/}
                                {/*        <Link to="/" style={styles.link}>*/}
                                {/*            Home*/}
                                {/*        </Link>*/}
                                {/*    </List.Item>*/}

                                    <List.Item>
                                        <Link to="/" style={styles.link}>
                                            Courses
                                        </Link>
                                    </List.Item>

                                    <List.Item>
                                        <Link to="/profile" style={styles.link}>
                                            Profile
                                        </Link>
                                    </List.Item>

                                    <List.Item>
                                        <Link to="/topics" style={styles.link}>
                                            Forum
                                        </Link>
                                    </List.Item>

                                    <List.Item>
                                        <Link to="/quizzes" style={styles.link}>
                                            Quizzes
                                        </Link>
                                    </List.Item>

                                    <List.Item>
                                        <Link to="/assignments" style={styles.link}>
                                            Assignments
                                        </Link>
                                    </List.Item>

                                    {/*<List.Item>*/}
                                    {/*    <Link to="/assessment" style={styles.link}>*/}
                                    {/*        Assessment*/}
                                    {/*    </Link>*/}
                                    {/*</List.Item>*/}

                                    <List.Item>
                                        <Link to="/reviews" style={styles.link}>
                                            Reviews
                                        </Link>
                                    </List.Item>

                                    <List.Item>
                                        <Link to="/faqs" style={styles.link}>
                                            FAQs
                                        </Link>
                                    </List.Item>

                                    <List.Item>
                                        <Link to="/account" style={styles.link}>
                                            Account
                                        </Link>
                                    </List.Item>
                                </List>

                            </Sidenav.Body>
                        </Sidenav>
                    </Col>

                    <Col
                        xs={24}
                        sm={24}
                        lg={20}
                        md={24}>
                        <Content style={{minHeight: "90vh"}}>
                            {props.children}
                        </Content>
                    </Col>

                </Row>
            </Grid>
        </div>
    )
}

export default Layout;
