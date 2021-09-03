import Heading from "./Heading";
import MainWeather from "./MainWeather";
import SecondaryInfo from "./SecondaryInfo";
import Navigator from "./Navigator";
import "../../css/Main.css";
import { Component } from "react";

class Main extends Component {
    render() {
        const {mode: color, style, data} = this.props;
        const {mainWeather, secondaryInfo, heading, navigator} = data;
        return(
            <div className="Main" style={{color, ...style}}>
                <MainWeather onToggleCityView={this.props.onToggleCityView} data={mainWeather}/>
                <SecondaryInfo mode={color} data={secondaryInfo}/>
                <Navigator mode={color} data={navigator}/>
                <Heading mode={color} data={heading} onToggleDarkMode={this.props.onToggleDarkMode} onToggleSearch={this.props.onToggleSearch}/>
            </div>
        );
    }
}

export default Main;