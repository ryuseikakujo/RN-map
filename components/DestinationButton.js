import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;

export default class DestinationButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => {}} style={styles.container}>
        <View style={styles.leftCol}>
          <Text style={{ fontSize: 8 }}>{"\u25A0"}</Text>
        </View>
        <View style={styles.centerCol}>
          <Text
            style={{
              fontSize: 21,
              color: "#545454",
            }}
          >
            Where to go?
          </Text>
        </View>
        <View style={styles.rightCol}>
          <Ionicons
            name="md-car"
            color="#000000"
            size={24}
            style={{ alignSelf: "center" }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    position: "absolute",
    flexDirection: "row",
    width: WIDTH - 40,
    height: 60,
    top: 110,
    left: 20,
    borderRadius: 2,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000000",
    elevation: 7,
    shadowRadius: 3,
    shadowOpacity: 1.0,
  },
  leftCol: {
    flex: 1,
    alignItems: "center",
  },
  rightCol: {
    flex: 1,
    borderLeftWidth: 1,
    borderColor: "#ededed",
  },
  centerCol: {
    flex: 4,
  },
});
