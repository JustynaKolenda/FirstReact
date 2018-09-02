import React from 'react';
import { CardDeck } from 'reactstrap';
import BoxText from "./boxText";

class PageOne extends React.Component {

    constructor(){
        super();
        this.list = ["TEXT","IMG","TEXT","TEXT","IMG"];
        this.node = null;
        
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className="allBox">
                    <CardDeck>
                        <div className="upBox">
                            {
                                this.list.map((el,i)=>{
                                    return <BoxText key={i} type={el}/>
                                })
                            }
                        </div>
                </CardDeck>
            </div>

        )
    }
}


export default PageOne;