import { Component } from "react";
import "../../css/City.css";


export default class City extends Component {

    render() {
        const { data, onToggleCityView, position} = this.props;
        const {type, degrees, location, visibility} = data;

        const extraClass = position === 0 ? " left":
            (position === 1 ? " middle": " right");
        return (
            <span className={"city" + extraClass} style={{visibility}} onClick={()=>onToggleCityView(data)}>
                <img src={"/icons/" + type + ".png"} className="icons" alt=""/>
                <div className="degrees">{degrees}<sup>o</sup></div>
                <div className="location">{location}</div>
            </span>
        );
    }
}