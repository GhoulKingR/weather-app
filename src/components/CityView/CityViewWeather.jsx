import { Component } from "react";
import "../../css/MainWeather.css";

class CityViewWeather extends Component {
    render() {
        const {data} = this.props;
        const {type, degrees, location, comment} = data;
        return (
            <div className="CityViewWhether">
                <div className="head">{location}</div>
                <div className="subhead">{comment}</div>
                <img src={"/icons/" + type + ".png"} alt="Heavy Rain" className="icon"/>
                <div className="degrees">{degrees}<sup>o</sup></div>
            </div>
        );
    }
}

export default CityViewWeather;