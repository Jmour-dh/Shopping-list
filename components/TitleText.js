import { StyleSheet, Text } from "react-native";
import React from "react";

const TitleText = ({style, children}) => {
  return <Text style={{...styles.text, ...style}}> {children} </Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 9,
  },
});
