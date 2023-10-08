import React, { useState } from "react";
import { StyleSheet, View, Modal } from "react-native";
import ButtonComponent from "./ButtonComponent";
import Input from "./Input";

const AddProduct = ({ submitHandler, displayModal, cancelNewproduct }) => {
  const [product, setProduct] = useState("");

  const inputHandler = (val) => {
    // const regex = /[^a-z]/gi;
    // setProduct(val.replace(regex, ""));
    const regex = /[^0-9]/gi;
    setProduct(val.replace(regex, ""));
  };

  const handleClick = () => {
    submitHandler(product), setProduct("");
  };

  return (
    <Modal visible={displayModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Input
          style={styles.textInput}
          textPlaceholder="Nouveau produit"
          onChangeHandler={inputHandler}
          inputValue={product}
          maxLength={10}
          keyboardType="numeric"
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
    padding: 5,
    textAlign: "center",
    fontSize: 19,
    marginBottom: 15,
    borderRadius: 30,
    height: 50,
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
