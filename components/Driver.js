import React, { Component } from "react";
import MapView, { AnimatedRegion } from "react-native-maps";
import { Image } from "react-native";

export default class Driver extends Component {
  constructor(props) {
    super(props);

    const driver = this.props.driver
      ? this.props.driver
      : {
          uid: "NoDriverPassed",
          location: { latitude: 0, longitude: 0 },
        };

    const coordinate = new AnimatedRegion({
      latitude: driver.location.latitude,
      longitude: driver.location.longitude,
      latitudeDelta: 0,
      longitudeDelta: 0,
      // latitudeDelta: 9.0765,
      // longitudeDelta: 7.3986,
    });

    this.state = {
      driver: driver,
      coordinate: coordinate,
    };
  }
  render() {
    console.log("data received, ", this.state.driver);
    return (
      <MapView.Marker.Animated
        coordinate={this.state.coordinate}
        anchor={{ x: 0.35, y: 0.32 }}
        ref={(marker) => (this.marker = marker)}
        style={{ width: 50, height: 50 }}
      >
        <Image
          source={require("../assets/car.png")}
          style={{ width: 32, height: 32 }}
        />
      </MapView.Marker.Animated>
    );
  }
}
