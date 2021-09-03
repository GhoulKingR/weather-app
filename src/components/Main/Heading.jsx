import React, { Component } from "react";
import "../../css/Heading.css";

class Heading extends Component {

    render() {
        const DarkModeStyle = {
            black: {
                boxShadow: "0px 0px 25px -12px gray",
                backgroundColor: "#fafbff"
            },
            white: { backgroundColor: "rgba(225, 225, 225, .2)" }
        };    

        const {greeting, remark} = this.props.data;
        const mode = this.props.mode;
        const backgroundColor = mode === "white" ? "#0E0E23" : "#fafbff";
        const search = "icon" + { white: " invert", black: ""}[this.props.mode];
        const darkMode = "dark bi-moon-stars" + { black: "", white: "-fill"}[this.props.mode];

        return (
            <div className="heading-container" style={{backgroundColor}}>
                <span><div className="main">Good {greeting}</div><div className="sub">Prepare for {remark}</div></span>
                <span>
                    <span className="items" style={DarkModeStyle[this.props.mode]} onClick={()=>this.props.onToggleSearch()}>
                        <img src="/icons/search.png" alt="" className={search}/>
                    </span>
                    <span className="items last" style={DarkModeStyle[this.props.mode]} onClick={()=>this.props.onToggleDarkMode()}>
                        <span className={darkMode}></span>
                    </span>
                </span>
            </div>
        )
    }

}

export default Heading;