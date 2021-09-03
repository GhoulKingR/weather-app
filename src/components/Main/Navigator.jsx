import { Component } from "react";
import Time from "./Time";
import "../../css/Navigator.css";

class Navigator extends Component {

    initialized = false;
    currentPos = 0;

    initalizeData(currentHour) {
        if(!this.initialized) {
            this.initialized = true;
            this.currentPos = currentHour;
        }
    }
    
    render() {
        const {mode, data} = this.props;
        const {currentHour, timesData: times} = data;
        this.initalizeData(currentHour);

        return (
            <div className="Navigator">
                <div className="head">
                    <span className="day">
                        Today
                    </span>
                    <span className="other-days">
                        
                    </span>
                </div><br/>
                <div className="body">
                    {
                        times.slice(currentHour, currentHour + 4).map((value, index)=>{
                            const {degrees, icon, time} = value;
                            const extra = time === currentHour ? " selected" : "" ;
                            return <Time key={index} mode={mode} degrees={degrees} extra={extra} icon={icon} time={time}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Navigator;