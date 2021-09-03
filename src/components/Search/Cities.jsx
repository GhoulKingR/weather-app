import { Component } from "react";
import City from "./City";
import "../../css/Cities.css";

export default class Cities extends Component {
    render() {
        return (
            <div className="cities">
                {
                    this.props.data.map((value, index) => {
                        const {data} = value;
                        return <City key={index} data={data} position={index} onToggleCityView={this.props.onToggleCityView}/>
                    })
                }
            </div>
        );
    }
}