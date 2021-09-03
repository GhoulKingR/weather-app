import { Component } from "react";
import Day from "./Day";
import "../../css/Days.css";

export default class Days extends Component {

    days = [
        {name: "Mon", weatherName: "Light Rainfall", icon: "down-pour.png", temperature: 25},
        {name: "Tue", weatherName: "Heavy Rainfall", icon: "heavy-rainfall.png", temperature: 23},
        {name: "Wed", weatherName: "Thunder Storm", icon: "lightning-storm.png", temperature: 21},
        {name: "Thur", weatherName: "Windy", icon: "windy.png", temperature: 20},
        {name: "Fri", weatherName: "Water Drop", icon: "humid.png", temperature: 23},
        {name: "Sat", weatherName: "Cloudy", icon: "windy-night.png", temperature: 18},
        {name: "Sun", weatherName: "Thunder Storm", icon: "stormy.png", temperature: 24},
    ]

    render() {
        return (
            <div className="days">
                {
                    this.days.map((value, index)=>{
                        const {name, weatherName, icon, temperature} = value;
                        return <Day key={index} name={name} weatherName={weatherName} icon={icon} temperature={temperature} />
                    })
                }
            </div>
        );
    }
}