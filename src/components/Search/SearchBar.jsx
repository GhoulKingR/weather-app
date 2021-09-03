import { Component } from "react";
import "../../css/SearchBar.css";

class SearchBar extends Component {

    DarkModeStyle = {
        black: {
            boxShadow: "0px 0px 25px -5px rgb(200, 200, 200)",
            backgroundColor: "#fafbff"
        },
        white: {
            backgroundColor: "rgba(225, 225, 225, .4)"
        }
    };

    render() {
        const color = this.props.mode;
        const toInvert = color === "white" ? "invert" : "";
        return (
            <div className="search-bar" style={{color}}>
                <div className="head">
                    <div className="back-button" style={this.DarkModeStyle[color]} onClick={() => this.props.onToggleSearch()}>
                        <span className="bi-chevron-left"></span>
                    </div>
                    <div className="title">
                        Search
                    </div>
                    <div>{/* An Empty space */}</div>
                </div>
                <div className="body" style={this.DarkModeStyle[color]}>
                    <img src="/icons/search.png" alt="" className={"icon " + toInvert }/>
                    <input type="search" style={{color}} placeholder="Search your Locations" className="search"/>
                </div>
            </div>
        );
    }
}

export default SearchBar;