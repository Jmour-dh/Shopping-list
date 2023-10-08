import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const AddProduct = ({ submitHandler, displayModal, cancelNewproduct }) => {
  const [product, setProduct] = useState("");

  const inputHandler = (val) => {
    setProduct(val);
  };

  const handleClick = () => {
    submitHandler(product), setProduct("");
  };

  return (
    <Modal visible={displayModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau produit"
          onChangeText={inputHandler}
          value={product}
        />
        <Button title="valider" onPress={handleClick} />
        <Button title="Annuler" onPress={cancelNewproduct} color="red" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  textInput: {
    borderColor: "gary",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    // flexGrow: 1,
    marginBottom: 9,
  },
});

export default AddProduct;
