import React, { Component } from "react";

//import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Container } from "react-bootstrap";
import FormAddCity from "./components/formAddCity";
import Settings from "./components/settings";
import SettingsPage from "./components/settingsPage";
import MainTable from "./components/mainTable";
import ShowCity from "./components/showCity";

const Apikey = `36d3d56a52da5b9081da981e4b9a0dc3`;

const citiesList = JSON.parse(localStorage.getItem("savedCities")) || [];
console.log(citiesList);
class App extends Component {
  state = {
    value: "",
    cities: [],
    units: "metric"
    //citiesList: JSON.parse(localStorage.getItem("savedCities")) || []
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
      units: "metric"
    });
  };

  writeCity = city => {
    let cities = [...this.state.cities];
    cities.push(city);
    this.setState({
      cities,
      value: ""
    });
  };

  averageTemp = data => {
    let sum = 0;
    let i;
    for (i = 0; i < data.length; i++) {
      sum += data[i].main.temp;
    }
    return (sum / i).toFixed(1);
  };

  handleCitySubmit = e => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/forecast?q=${
      this.state.value
    }&units=${this.state.units}&appid=${Apikey}`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się");
      })
      .then(respone => respone.json())
      .then(data => {
        //console.log(data);
        const city = {
          cityID: data.city.id,
          cityName: data.city.name,
          cityLat: data.city.coord.lat,
          cityLon: data.city.coord.lon,
          averageTemp: this.averageTemp(data.list)
        };
        citiesList.push(data.city.id);
        //console.log(city);
        //console.log(citiesList);
        localStorage.setItem("savedCities", JSON.stringify(citiesList));
        this.writeCity(city);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleRemoveButton = index => {
    let removedCityID = citiesList[index];
    citiesList.splice(index, 1);

    localStorage.setItem("savedCities", JSON.stringify(citiesList));
    let cities = [...this.state.cities];

    let removedCityIndex = cities.findIndex(
      city => city.cityID === removedCityID
    );
    cities.splice(removedCityIndex, 1);
    this.setState({ cities });
  };
  getWheater = () => {
    let cities = [];
    Promise.all(
      citiesList.map((city, index) =>
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?id=${city}&units=${
            this.state.units
          }&appid=${Apikey}`
        )
          .then(res => res.json())
          .then(data => {
            const city = {
              cityID: data.city.id,
              cityName: data.city.name,
              cityLat: data.city.coord.lat,
              cityLon: data.city.coord.lon,
              averageTemp: this.averageTemp(data.list)
            };
            cities.push(city);

            if (!city) {
              return "error";
            }
          })
      )
    )
      .then(data => this.setState({ cities }))
      .catch(err => {
        throw err;
      });
  };

  componentDidMount() {
    this.getWheater();
  }
  render() {
    return (
      <Container>
        <Router>
          <Settings click={this.handleSettingsButton} />{" "}
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <FormAddCity
                    value={this.state.value}
                    change={this.handleInputChange}
                    submit={this.handleCitySubmit}
                  />{" "}
                  <MainTable
                    data={this.state.cities}
                    handleRemoveButton={this.handleRemoveButton}
                  />{" "}
                </>
              )}
            />{" "}
            <Route path="/settings" exact render={() => <SettingsPage />} />{" "}
            <Route
              path="/showcity/:id"
              exact
              render={props => (
                <ShowCity
                  city={this.state.cities.find(
                    city => city.cityID === parseInt(props.match.params.id)
                  )}
                />
              )}
            />{" "}
            <Route
              path="/"
              render={() => (
                <>
                  <FormAddCity
                    value={this.state.value}
                    change={this.handleInputChange}
                    submit={this.handleCitySubmit}
                  />{" "}
                  <MainTable
                    data={this.state.cities}
                    handleRemoveButton={this.handleRemoveButton}
                  />{" "}
                </>
              )}
            />{" "}
          </Switch>{" "}
        </Router>{" "}
      </Container>
    );
  }
}
export default App;
