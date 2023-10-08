import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../constants/colors";
import { FontAwesome } from '@expo/vector-icons';

const Products = ({ name, deleteProduct, idString }) => {
  return (
    <Pressable onPress={() => deleteProduct(idString)}>
      <View style={styles.items}>
      <FontAwesome name="remove" size={29} color={Colors.white} />
        <Text style={styles.element}>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 10,
    backgroundColor: Colors.danger,
    borderRadius: 6,
    flexDirection:"row",
    alignItems:"center",
    padding:15
  },
  element: {
    color: Colors.white,
    fontSize: 17,
    marginLeft:20
  },
});

export default Products;
