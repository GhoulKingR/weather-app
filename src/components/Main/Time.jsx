import { Component } from "react";

export default class Time extends Component {
    NavigatorStyle = {
        black: {
            boxShadow: "0px 0px 25px -5px rgb(200, 200, 200)",
        }
    };

    render() {
        const {degrees, icon, time, extra, mode} = this.props;
        const styles = this.NavigatorStyle[mode];
        return (
            <span className={"item" + extra} style={styles}>
                <div>{degrees}<sup>o</sup></div>
                <img src={"/icons/" + icon } alt="" className="icon"/>
                <div className="time">{time < 10 ? `0${time}` : time }:00</div>
            </span>
        );
    }
}