import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function CurrentLocationButton(props) {
  console.log("props ", props);
  const bottom = props.bottom ? props.bottom : 65;

  const cb = props.cb
    ? props.cb
    : () => console.log("callback function not passed");

  return (
    <View style={[styles.container, { top: HEIGHT - bottom }]}>
      <MaterialIcons
        name="my-location"
        color="#000000"
        size={25}
        onPress={() => {
          cb();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    position: "absolute",
    width: 43,
    height: 45,
    backgroundColor: "#fff",
    left: WIDTH - 70,
    borderRadius: 50,
    shadowColor: "#000000",
    elevation: 7,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
