import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import ButtonComponent from "./ButtonComponent";

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
        <View style={styles.btnContainer}>
          <ButtonComponent onPressHandler={handleClick} style={styles.btnBlue}>
            Valider
          </ButtonComponent>
          <ButtonComponent
            onPressHandler={cancelNewproduct}
            style={styles.btnTomato}
          >
            Annuler
          </ButtonComponent>
        </View>
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
    marginBottom: 9,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  btnBlue: {
    backgroundColor: "seagreen",
    width: 150,
    borderRadius: 6,
  },
  btnTomato: {
    backgroundColor: "tomato",
    width: 150,
    borderRadius: 6,
  },
});

export default AddProduct;
