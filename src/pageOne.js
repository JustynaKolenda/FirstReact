import React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody, Row, Col } from 'reactstrap';

class PageOne extends React.Component {

    /*componentDidMount() {
        fetch('https://wp-api.kolendateam.pl/wp-json/wc/v2/products?consumer_key=ck_65ebdc0e492e6e10d94fadade58041d2cfbaf2aa&consumer_secret=cs_0a9551805968ffa5744100f5fa5243d7a52c7e62')
        .then(resp => {
            console.log(resp);
        })
    }*/

    render() {
        return(
            <div className="allBox">
                    <CardDeck>
                        <Card className="boxFirst">
                            <div className="boxFirst__img">
                                    <Row className="boxFirst__row">
                                        <Col sm="2">
                                            <Card body>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <CardImg className="boxFirst__img--women" top width="100%" src="women.jpg" alt="Card image cap"  />
                            </div>  
                        </Card>
                        <div className="upBox">
                            <Card className="boxSecond">
                                <CardBody className="boxSecond__card">
                                    <CardImg className="boxSecond__card--twitt" top width="100%" src="twitt.png" alt="Card image cap"   />
                                    <CardTitle className="boxSecond__card--txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </CardTitle>
                                    <CardText>@PeopleMarkID</CardText>
                                </CardBody>
                            </Card>

                            <Card className="boxThird">
                                <CardImg className="boxThird__card--avatar" top width="100%" src="shous.jpg" alt="Card image cap"   /> 
                            </Card>

                            <Card className="boxSecond">
                                <CardBody className="boxSecond__card">
                                    <CardImg className="boxSecond__card--twitt" top width="100%" src="twitt.png" alt="Card image cap"   />
                                    <CardTitle className="boxSecond__card--txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </CardTitle>
                                    <CardText>@PeopleMarkID</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="midleBoxSec">
                            

                            <Card className="boxSecond">
                                <CardBody className="boxSecond__card">
                                    <CardImg className="boxSecond__card--twitt" top width="100%" src="twitt.png" alt="Card image cap"   />
                                    <CardTitle className="boxSecond__card--txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </CardTitle>
                                    <CardText>@PeopleMarkID</CardText>
                                </CardBody>
                            </Card>
                            <Card className="boxThird">
                                <CardImg className="boxThird__card--avatar" top width="100%" src="shous.jpg" alt="Card image cap"   /> 
                            </Card>
                        </div>
                            <Card className="boxBigR">
                                <div className="boxBigR__img">
                                    <Row className="boxBigR__row">
                                        <Col sm="2">
                                            <Card body>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <CardImg className="boxBigR__img--women" top width="100%" src="women.jpg" alt="Card image cap"  />
                                </div>  
                            </Card>
                        <div className="therdBox">
                            <Card className="boxThird">
                                <CardImg className="boxThird__card--avatar" top width="100%" src="shous.jpg" alt="Card image cap"   /> 
                            </Card>

                            <Card className="boxSecond">
                                <CardBody className="boxSecond__card">
                                    <CardImg className="boxSecond__card--twitt" top width="100%" src="twitt.png" alt="Card image cap"   />
                                    <CardTitle className="boxSecond__card--txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </CardTitle>
                                    <CardText>@PeopleMarkID</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="fourthBox">
                            <Card className="boxSecond">
                                <CardBody className="boxSecond__card">
                                    <CardImg className="boxSecond__card--twitt" top width="100%" src="twitt.png" alt="Card image cap"   />
                                    <CardTitle className="boxSecond__card--txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </CardTitle>
                                    <CardText>@PeopleMarkID</CardText>
                                </CardBody>
                            </Card>

                            <Card className="boxThird">
                                <CardImg className="boxThird__card--avatar" top width="100%" src="shous.jpg" alt="Card image cap"   /> 
                            </Card>

                            <Card className="boxSecond">
                                <CardBody className="boxSecond__card">
                                    <CardImg className="boxSecond__card--twitt" top width="100%" src="twitt.png" alt="Card image cap"   />
                                    <CardTitle className="boxSecond__card--txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </CardTitle>
                                    <CardText>@PeopleMarkID</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    
                </CardDeck>
            </div>

        )
    }
}


export default PageOne;