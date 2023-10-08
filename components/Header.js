import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/colors";
import TitleText from "./TitleText";
import AppSytles from "../constants/AppSytles";

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <TitleText style={AppSytles.headerOne}>My Shopping List</TitleText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: Colors.danger,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 30,
    paddingTop: 25,
    paddingBottom: 15,
  },

});
