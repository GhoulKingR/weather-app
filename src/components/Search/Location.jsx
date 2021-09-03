import { Component } from "react";

class Location extends Component {
    render() {
        const weather = "/icons/" + this.props.weatherCondition + ".png";
        const temperature = this.props.temperature;
        return (
            <div className="Location" onClick={()=>this.props.onToggleCityView(this.props.data)}>
                <span className="State">{this.props.stateLocation}</span>
                <span className="temperature">
                    <img src={weather} alt="" className="mini-whether"/>
                    <span>{temperature}</span><sup>o</sup>
                </span>
            </div>
        );
    }
}

export default Location;