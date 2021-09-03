import { Component } from "react";
import Cities from "./Cities";
import "../../css/SavedCities.css";

export default class SavedCities extends Component {
    DarkModeStyle = {
        black: {
            boxShadow: "0px 0px 25px -5px rgb(200, 200, 200)",
            backgroundColor: "#fafbff"
        },
        white: {
            backgroundColor: "rgba(225, 225, 225, .4)"
        }
    };

    state = {
        savedCities: [
            {data: {type: "", degrees: 0, location: "", visibility: "hidden", comment: ""}, position: -1},
            {data: {type: "stormy", degrees: 19, location: "Tokyo, Japan", visibility: "visible", comment: "Heavy Rainfall"}, position: 0},
            {data: {type: "snow", degrees: 12, location: "London, England", visibility: "visible", comment: "Heavy Rainfall"}, position: 1},
            {data: {type: "windy-night", degrees: 23, location: "Abuja, Nigeria", visibility: "visible", comment: "Heavy Rainfall"}, position: 2},
            {data: {type: "windy-night", degrees: 23, location: "Abuja, Nigeria", visibility: "visible", comment: "Heavy Rainfall"}, position: 3},
            {data: {type: "windy-night", degrees: 23, location: "Abuja, Nigeria", visibility: "visible", comment: "Heavy Rainfall"}, position: 4},
            {data: {type: "windy-night", degrees: 23, location: "Abuja, Nigeria", visibility: "visible", comment: "Heavy Rainfall"}, position: 5},
            {data: {type: "", degrees: 0, location: "", visibility: "hidden", comment: ""}, position: 6},
        ],
        position: 2,
        
    }

    moveRight() {
        if( this.state.position < 6) this.setState({...this.state, position: this.state.position + 1});
    }

    moveLeft() {
        if( this.state.position > 1) this.setState({...this.state, position: this.state.position - 1});
    }


    render() {
        const color = this.props.mode;
        return (
            <div className="saved-cities" style={{color}}>
                <div className="title">
                    <span>Saved Cities</span>
                    <span>
                        <span className="back-button" style={{...this.DarkModeStyle[color], color}} onClick={() => this.moveLeft()}>
                            <span className="bi-chevron-left"></span>
                        </span>
                        <span className="back-button" style={{...this.DarkModeStyle[color], color}} onClick={() => this.moveRight()}>
                            <span className="bi-chevron-right"></span>
                        </span>
                    </span>
                </div>
                <Cities onToggleCityView={this.props.onToggleCityView} data={this.state.savedCities.slice(this.state.position - 1, this.state.position + 2)}/>
            </div>
        );
    }
}