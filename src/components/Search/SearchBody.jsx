import { Component } from "react";
import "../../css/SearchBody.css";
import Location from "./Location"

class SearchBody extends Component {
    DarkModeStyle = {
        black: {
            boxShadow: "0px 0px 25px -5px rgb(200, 200, 200)",
            backgroundColor: "#fafbff"
        }
    };

    data = [
        {location: "Bayelsa, Nigeria", type: "down-pour", degrees: 27, comment: "Heavy Rainfall"},
        {location: "Lokoja, Nigeria", type: "heavy-rainfall", degrees: 23, comment: "Heavy Rainfall"},
        {location: "Ogun, Nigeria", type: "lightning-storm", degrees: 21, comment: "Heavy Rainfall"},
        {location: "Abia, Nigeria", type: "cold-night", degrees: 20, comment: "Heavy Rainfall"},
        {location: "Kano, Nigeria", type: "humid", degrees: 23, comment: "Heavy Rainfall"},
        {location: "Delta, Nigeria", type: "windy-night", degrees: 18, comment: "Heavy Rainfall"},
        {location: "Benin, Nigeria", type: "stormy", degrees: 24, comment: "Heavy Rainfall"},
        {location: "Onitsha, Nigeria", type: "moist", degrees: 25, comment: "Heavy Rainfall"},
    ]

    render() {
        const color = this.props.mode;
        return (
            <div className="search-body" style={{color, ...this.DarkModeStyle[color]}}>
                {
                    this.data.map((value, index) => {
                        const {location, type, degrees} = value;
                        return <Location data={value} onToggleCityView={this.props.onToggleCityView} stateLocation={location} weatherCondition={type} temperature={degrees} key={index}/> 
                    })
                }
            </div>
        );
    }
}

export default SearchBody;