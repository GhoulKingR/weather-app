import { Component } from "react";

export default class Day extends Component {
    render() {
        const day = this.props.name;
        const weather = this.props.weatherName;
        const temp = this.props.temperature;
        const imagePos = this.props.icon;
        return(
            <div className="day">
                <span>{day}</span>
                <span><img src={"/icons/" + imagePos} alt="" className="icon" />{weather}</span>
                <span>{temp}<sup>o</sup></span>
            </div>
        );
    }
}