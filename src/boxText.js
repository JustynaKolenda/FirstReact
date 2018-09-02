import React from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

class BoxText extends React.Component {
    constructor() {
        super();

        this.state = {
            click:"Title first"
        }

        //this.moja = this.moja.bind(this);
    }

    moja() {
        this.setState({
            click:"Title second"
        })
    }

    render(){
        return(           
            <Card className="boxSecond" onClick={()=>{
                this.moja()
                }}>
                {
                    this.state.click
                }
                {   this.props.type === "TEXT" &&
                <CardBody className="boxSecond__card">
                    <CardImg className="boxSecond__card--twitt" top width="100%" src="twitt.png" alt="Card image cap"   />
                    <CardTitle className="boxSecond__card--txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </CardTitle>
                    <CardText>@PeopleMarkID</CardText>
                </CardBody>
                }

                {
                    (this.props.type === "IMG") &&
                    <CardImg className="boxThird__card--avatar" top width="100%" src="shous.jpg" alt="Card image cap"   /> 
                }
            </Card>
        )
    }
}

export default BoxText;