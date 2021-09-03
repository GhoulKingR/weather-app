import { Component } from "react";
import "../../css/SecondaryInfo.css";

class SecondaryInfo extends Component {
    SecondaryInfoStyle = {
        black: {
            boxShadow: "0px 0px 25px -5px rgb(200, 200, 200)",
        }
    };

    render() { 
        const style = this.SecondaryInfoStyle[this.props.mode];
        const leftAndRightStyles = "icon" + { white: " invert", black: ""}[this.props.mode];
        const sun = "sun" + { white: "-dark", black: "" }[this.props.mode];

        const {wind, sunny, humidity} = this.props.data;
        return (
            <div className="SecondaryInfo" style={style}>
                <span>
                    <img src="/icons/wind.png" alt="wind" className={leftAndRightStyles}/>
                    <div className="value">{wind}</div>
                </span>
                <span>
                    <img src={"/icons/" + sun + ".png" } alt="" className={sun}/>
                    <div className="value mid-val">{sunny}</div>
                </span>
                <span>
                    <img src="/icons/humidity.png" alt="humidity" className={leftAndRightStyles}/>
                    <div className="value">{humidity}</div>
                </span>
            </div>
        );
    }
}

export default SecondaryInfo;