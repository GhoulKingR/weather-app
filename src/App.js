import { Component } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import CityView from "./components/CityView/CityView";
import Main from "./components/Main/Main";

class App extends Component {

  componentDidMount() {
    this.initData();
  }

  getScreenDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height }
  }

  state = {
    mode: "white",
    display: "main",
    searchStyle: { visibility: "hidden", position: "fixed", left: "50px", right: "-50px", opacity: 0 },
    cityViewStyle: { visibility: "hidden", position: "fixed", bottom: "-50px", opacity: 0 },
    mainStyle: { visibility: "visible" },
    initialized: false,
    temporaryExpansionJutsu: {},
    main: {},
    cityView: {},
    Search: {},
    loadingScreen: { paddingLeft: (this.getScreenDimensions()["width"] - 100) / 2, paddingRight: (this.getScreenDimensions()["width"] - 100) / 2 },
  }

  toggleDarkMode = () => {
    const returnOpposite = { white: "black", black: "white" };
    const newState = { ...this.state, mode: returnOpposite[this.state.mode] }
    this.setState(newState);
  }

  getPad = () => {
    const { width } = this.getScreenDimensions();
    let pad = 20;
    if (width > 500) pad = ((width - 500) / 2) - 20;
    return { paddingLeft: pad.toString() + "px", paddingRight: pad.toString() + "px" };
  }

  sleep () {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>resolve(), 1);
    });
  }

  toSearch = async () => {
    const pad = this.getPad();
    const mainStyle = {...this.state.mainStyle, position: "fixed", ...pad };
    const searchStyle = { ...this.state.searchStyle, visibility: "visible", ...pad };

    for( let i = 50; i >= 0; i-=5){
      await this.sleep();

      const newSearchStyle = { ...searchStyle, left: i.toString() + "px", right: "-" + i.toString() + "px", opacity: 1 - (0.02 * i) };
      const newMainStyle = { ...mainStyle, left: "-" + (50 - i).toString() + "px", right: (50 - i).toString() + "px", opacity: 1 - newSearchStyle.opacity };
      if (i === 0) {
        newSearchStyle.visibility = "visible";
        newMainStyle.visibility = "hidden";
        newSearchStyle.position = "unset";
        newSearchStyle.paddingLeft = "unset";
        newSearchStyle.paddingRight = "unset";

        this.setState({ ...this.state, temporaryExpansionJutsu: {} });
      }
      this.setState({ ...this.state, searchStyle: newSearchStyle, mainStyle: newMainStyle });
    }
  }

  toggleCityView = async (data) => {
    const cityView = {...data};
    const pad = this.getPad();
    this.setState({ ...this.state, cityView, temporaryExpansionJutsu: { position: "fixed", left: "0px", right: "0px", top: "0px", bottom: "0px" } });
    let style = this.state.display === "main" ? { ...this.state.mainStyle } : { ...this.state.searchStyle };
    const name = this.state.display === "main" ? "mainStyle" : "searchStyle";
    style = { ...style, position: "fixed", left: "0px", right: "0px", ...pad };
    const cityViewStyle = { ...this.state.cityViewStyle, visibility: "visible" };

    for (let i = 50; i >= 0; i-=5) {
      await this.sleep();

      const newCityViewStyle = { ...cityViewStyle, bottom: "-" + i.toString() + "px", opacity: 1 - ( 0.02 * i) };
      const newStyle = { ...style, opacity: 1 - newCityViewStyle.opacity, transform: `scale(${0.95 + (0.001 * i)})` };
      if (i === 0) newStyle.visibility = "hidden";

      const newState = { cityViewStyle: newCityViewStyle }
      newState[name] = newStyle;
      this.setState({ ...this.state, ...newState });
    }
  }

  reverseCityView = async () => {
    const pad = this.getPad();
    this.setState({ ...this.state, temporaryExpansionJutsu: { position: "fixed", left: "0px", right: "0px", top: "0px", bottom: "0px" } });
    let style = this.state.display === "main" ? { ...this.state.mainStyle } : { ...this.state.searchStyle };
    const name = this.state.display === "main" ? "mainStyle" : "searchStyle";
    style = { ...style, visibility: "visible", ...pad };
    const cityViewStyle = { ...this.state.cityViewStyle, position: "fixed" };

    for( let i = 50; i >= 0; i-=5) {
      await this.sleep();

      const newStyle = { ...style, opacity: 1 - (0.02 * i), transform: `scale(${1 - (0.001 * i)})` };
      const newCityViewStyle = { ...cityViewStyle, bottom: "-" + (50 - i).toString() + "px", opacity: 1 - newStyle.opacity };
      if (i === 0) {
        newStyle.visibility = "visible";
        newStyle.transform = "unset";
        newCityViewStyle.visibility = "hidden";
        newStyle.position = "unset";
        newStyle.paddingLeft = "unset";
        newStyle.paddingRight = "unset";
        newStyle.left = "unset";
        newStyle.right = "unset";

        this.setState({ ...this.state, temporaryExpansionJutsu: {} });
      }
      const newState = { cityViewStyle: newCityViewStyle }
      newState[name] = newStyle;
      this.setState({ ...this.state, ...newState });
    }
  }

  toMain = async () => {
    
    const pad = this.getPad();
    const mainStyle = { ...this.state.mainStyle, visibility: "visible", ...pad };
    const searchStyle = { ...this.state.searchStyle, position: "fixed", ...pad };

    for (let i = 50; i >= 0; i -= 5) {
      await this.sleep();

      const newMainStyle = { ...mainStyle, left: "-" + i.toString() + "px", right: i.toString() + "px", opacity: 1 - (0.02 * i) };
      const newSearchStyle = { ...searchStyle, left: (50 - i).toString() + "px", right: "-" + (50 - i).toString() + "px", opacity: 1 - newMainStyle.opacity };
      if (i === 0) {
        newMainStyle.visibility = "visible";
        newSearchStyle.visibility = "hidden";
        newMainStyle.position = "unset";
        newMainStyle.paddingLeft = "unset";
        newMainStyle.paddingRight = "unset";

        this.setState({ ...this.state, temporaryExpansionJutsu: {} });
      }
      this.setState({ ...this.state, searchStyle: newSearchStyle, mainStyle: newMainStyle });
    }
  }

  toggleSearch = () => {
    const reverse = { main: "search", search: "main" };
    const newState = { ...this.state, display: reverse[this.state.display], temporaryExpansionJutsu: { position: "fixed", left: "0px", right: "0px", top: "0px", bottom: "0px" } };
    if (this.state.display === "main") this.toSearch();
    else this.toMain();
    this.setState(newState);
  }

  async animateLoadingScreenOut() {
    const { width } = this.getScreenDimensions();
    const sidePercent = width > 500 ? "" : "5%"
    this.setState({ ...this.state, temporaryExpansionJutsu: { position: "fixed", left: "0px", right: "0px", top: "0px", bottom: "0px" } });
    const mainStyle = { ...this.state.mainStyle, position: "fixed", left: sidePercent, right: sidePercent };
    
    for (let i = 50; i >= 0; i -= 5) {
      await this.sleep();

      let newMainStyle = { ...mainStyle, top: (i + 10).toString() + "px", bottom: "-" + (i + 10).toString() + "px", opacity: 1 - (0.02 * i) };
      const newStyle = { opacity: 1 - newMainStyle.opacity, transform: `scale(${1 - (0.001 * i)})` };
      if (i === 0) {
        newStyle.visibility = "hidden";
        newMainStyle = { ...mainStyle, position: "unset" };

        this.setState({ ...this.state, temporaryExpansionJutsu: {} });
      }
      this.setState({ ...this.state, loadingScreen: newStyle, mainStyle: newMainStyle });
    }
  }

  itemsStyle = { black: "#fafbff", white: "#0e0e23" }

  getTimesData () {
    return [
      {degrees: 23, icon: "cold-night.png", time: 23},
      {degrees: 25, icon: "humid.png", time: 0},
      {degrees: 27, icon: "lightning-storm.png", time: 1},
      {degrees: 26, icon: "windy-night.png", time: 2},
      {degrees: 23, icon: "cold-night.png", time: 3},
      {degrees: 25, icon: "humid.png", time: 4},
      {degrees: 27, icon: "lightning-storm.png", time: 5},
      {degrees: 26, icon: "windy-night.png", time: 6},
      {degrees: 23, icon: "cold-night.png", time: 7},
      {degrees: 25, icon: "humid.png", time: 8},
      {degrees: 27, icon: "lightning-storm.png", time: 9},
      {degrees: 26, icon: "windy-night.png", time: 10},
      {degrees: 23, icon: "cold-night.png", time: 11},
      {degrees: 25, icon: "humid.png", time: 12},
      {degrees: 27, icon: "lightning-storm.png", time: 13},
      {degrees: 26, icon: "windy-night.png", time: 14},
      {degrees: 23, icon: "cold-night.png", time: 15},
      {degrees: 25, icon: "humid.png", time: 16},
      {degrees: 27, icon: "lightning-storm.png", time: 17},
      {degrees: 26, icon: "windy-night.png", time: 18},
      {degrees: 23, icon: "cold-night.png", time: 19},
      {degrees: 25, icon: "humid.png", time: 20},
      {degrees: 27, icon: "lightning-storm.png", time: 21},
      {degrees: 26, icon: "windy-night.png", time: 22},
      {degrees: 23, icon: "cold-night.png", time: 23},
      {degrees: 25, icon: "humid.png", time: 0},
      {degrees: 27, icon: "lightning-storm.png", time: 1},
      {degrees: 26, icon: "windy-night.png", time: 2},
    ];
  }

  async getDataForMain() {
    const currentHour = Number(Date().split(" ")[4].split(":")[0]);
    const greeting = currentHour < 12 ? "Morning" : "Day";
    const timesData = this.getTimesData();
    return new Promise((resolve, reject)=>{
      resolve({
        mainWeather: { location: "Lagos, Nigeria", weather: "Heavy Rainfall", icon: "heavy-rainfall.png", degrees: 23 },
        secondaryInfo: { wind: 3.71, sunny: 12.21, humidity: 41 },
        heading: { greeting, remark: "rain" },
        navigator: { currentHour, timesData }, 
      })
    });
  }

  async getWeatherData() {
    return { main: await this.getDataForMain(), CityView: {}, Search: {} };
  }

  async beginInitializationOfWeatherDate() {
    const { main, CityView, Search } = await this.getWeatherData();
    this.setState({ ...this.state, main, CityView, Search });
  }

  async initData() {
    await this.beginInitializationOfWeatherDate();
    this.setState({ ...this.state, initialized: true });
    this.animateLoadingScreenOut();
  }

  render() {
    const {mode, loadingScreen, searchStyle, cityViewStyle, mainStyle, main, temporaryExpansionJutsu, initialized, cityView} = this.state;
    return (
      <div style={{ ...temporaryExpansionJutsu, backgroundColor: this.itemsStyle[mode], padding: "20px" }} className="first">
        {
          initialized ? (
            <>
              <Main mode={mode} data={main} style={mainStyle} onToggleDarkMode={this.toggleDarkMode} onToggleSearch={this.toggleSearch} onToggleCityView={this.toggleCityView} />
              { this.state.display !== "main" && <Search mode={mode} style={searchStyle} onToggleSearch={this.toggleSearch} onToggleCityView={this.toggleCityView}/>}
              <CityView mode={mode} style={cityViewStyle} onReverseCityView={this.reverseCityView} data={cityView}/>
            </>
          ) : <></>
        }
        <div className="loading-screen" style={loadingScreen}>
          <span>
            Loading...
          </span>
        </div>
      </div>
    );
  }
}

export default App;
