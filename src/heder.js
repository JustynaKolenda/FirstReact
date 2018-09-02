import React from 'react';

class Heder extends React.Component {
    render(){
        return(
            <div className="heder">
                <div className="heder_logo">
                    <div className="heder_logo--txt">SH</div>
                </div>
                <div className="heder_menuLeft">
                    <a href="# " className="heder_menuLeft--category">Woman</a>
                    <a href="# " className="heder_menuLeft--category">Man</a>
                    <a href="# " className="heder_menuLeft--category">Kids</a>
                    <a href="# " className="heder_menuLeft--category">Comming Soon</a>
                    <a href="# " className="heder_menuLeft--category">About</a>
                </div>
                <div className="heder_menuRight">
                    <a href="# " className="heder_menuRight--category">Log in</a>
                    <a href="# " className="heder_menuRight--category">Basket</a>
                    <a href="# " className="heder_menuRight--search"> <img className="heder_menuRight--img" src="magnifier.png" alt="serch"/></a>
                </div>
            </div>

        )
    }
}

export default Heder;