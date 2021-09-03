import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchBody from "./SearchBody";
import SavedCities from "./SavedCities";

class Search extends Component {
    render() {
        const color = this.props.mode;
        const style = this.props.style;
        return (
            <div style={style}>
                <SearchBar mode={color} onToggleSearch={this.props.onToggleSearch}/>
                <SearchBody mode={color} onToggleCityView={this.props.onToggleCityView}/>
                <SavedCities mode={color} onToggleCityView={this.props.onToggleCityView}/>
            </div>
        );
    }
}

export default Search;