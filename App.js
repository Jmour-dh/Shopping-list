import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Modal,
  Text,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";

import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import DismissKeyboard from "./components/DismissKeyboard";
import ButtonComponent from "./components/ButtonComponent";
import Header from "./components/Header";

export default function App() {
  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setShowLModal] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  const submitHandler = (product) => {
    setDisplayModal(false);

    if (product.length > 1) {
      const idString = Date.now().toString();
      setMyProducts((currentMyProducts) => [
        { key: idString, name: product },
        ...currentMyProducts,
      ]);
    } else {
      setShowLModal(true);
    }
  };

  const deleteProduct = (key) => {
    setMyProducts((currentMyProducts) => {
      return currentMyProducts.filter((product) => product.key != key);
    });
  };

  const cancelNewproduct = () => {
    setDisplayModal(false);
  };

  return (
    <DismissKeyboard>
      <ImageBackground
        style={styles.bgImage}
        source={{
          uri: "https://cdn.pixabay.com/photo/2020/05/31/18/15/flowers-5243636_1280.png",
        }}
      >
        <Header />
        <View style={styles.container}>
          <Modal
            visible={showModal}
            onRequestClose={() => setShowLModal(false)}
            animationType="slide"
            transparent
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}>OUPS!</Text>
                </View>
                <View style={styles.modalBody}>
                  <Image
                    source={require("./assets/red-check-128.png")}
                    style={styles.redCheck128}
                  />
                  <Text style={styles.modalBodyText}>
                    merci d'indiquer plus d'un seul caratère
                  </Text>
                </View>
                <View style={styles.modalFooter}>
                  <Pressable
                    style={styles.pressableBtnModal}
                    onPress={() => setShowLModal(false)}
                  >
                    <Text style={styles.modalBtn}>OK</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <ButtonComponent
            onPressHandler={() => setDisplayModal(true)}
            style={styles.AddProductBtn}
          >
            Nouveau produit
          </ButtonComponent>
          <AddProduct
            submitHandler={submitHandler}
            displayModal={displayModal}
            cancelNewproduct={cancelNewproduct}
          />
          <FlatList
            data={myProducts}
            renderItem={({ item }) => (
              <Products
                name={item.name}
                idString={item.key}
                deleteProduct={deleteProduct}
              />
            )}
          />
        </View>
      </ImageBackground>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2) ",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "90%",
    height: 300,
    borderRadius: 15,
    alignItems: "center",
  },
  modalHeader: {
    width: "100%",
    padding: 16,
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: "ligthgray",
  },
  modalHeaderText: {
    color: "gray",
    fontSize: 17,
  },
  modalBody: {
    flex: 1,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  modalBodyText: {
    fontSize: 17,
  },
  modalFooter: {
    width: "100%",
  },
  pressableBtnModal: {
    backgroundColor: "lightseagreen",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  modalBtn: {
    fontSize: 17,
    color: "white",
    textAlign: "center",
    padding: 16,
  },
  redCheck128: {
    width: 100,
    height: 100,
  },
  AddProductBtn: {
    backgroundColor: "darkred",
    padding: 20,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "white",
    marginBottom:20
  },
  bgImage: {
    flex: 1,
  },
});
