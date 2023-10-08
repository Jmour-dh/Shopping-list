import { Text } from "react-native";
import React from "react";
import AppSytles from "../constants/AppSytles";

const { textBody } = AppSytles;
const BodyText = ({ children, style }) => {
  return <Text style={{ ...style, ...textBody }}>{children}</Text>;
};

export default BodyText;
