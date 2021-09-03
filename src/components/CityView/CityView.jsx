import { Component } from "react";
import "../../css/CityView.css";
import CityViewWeather from "./CityViewWeather";
import Days from "./Days";

export default class CityView extends Component {
    render() {
        const { mode: color, style, data} = this.props;
        const backgroundColor = this.props.mode === "white" ? "#0e0e23" : "#fafbff";

        return (
            <div className="city-view" style={{visibility: style.visibility, opacity: style.opacity, position: style.position}}>
                <div className="underlay" style={{...style, position: "fixed", top: "0px", bottom: "0px"}}></div>
                <CityViewWeather data={data}/>
                <div className="seven-days-view" style={{color, backgroundColor, ...style, opacity: "unset"}}>
                    <header>Next 7 Days</header>
                    <Days />
                </div>
                <div className="back-button" style={{...style, position: "fixed", top: "10px", bottom: ""}} onClick={() => this.props.onReverseCityView()}>
                    <span className="bi-chevron-left"></span>
                </div>
            </div>
        );
    }
}