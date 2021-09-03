import { Component } from "react";
import "../../css/MainWeather.css";

class MainWeather extends Component {
    render() {
        const {location, weather, degrees, icon} = this.props.data;
        const data = {type: icon.split(".")[0], degrees, location, comment: weather};
        return (
            <div className="MainWhether" onClick={()=>this.props.onToggleCityView(data)}>
                <div className="head">{location}</div>
                <div className="subhead">{weather}</div>
                <img src={"/icons/" + icon } alt="Heavy Rain" className="icon"/>
                <div className="degrees">{degrees}<sup>o</sup></div>
            </div>
        );
    }
}

export default MainWeather;