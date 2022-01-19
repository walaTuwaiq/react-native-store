import React, { useState, useEffect } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button,
} from "react-native";

export default function Items({ cart, setCartList }) {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const arr = [
      { name: "wala", age: 25 },
      { name: "lulu", age: 26 },
      { name: "hayah", age: 27 },
    ];
    setListItems(arr);
  }, []);

  const addToCart = (element) => {
    const copiedCart = [...cart, element];
    setCartList(copiedCart);
  };

  return (
    <View>
      {listItems &&
        listItems.map((elem, index) => {
          return (
            <View key={index} style={styles.containerItem}>
              <Text style={styles.name}>{elem.name}</Text>
              <Text style={styles.age}>{elem.age}</Text>
              <TouchableOpacity
                style={styles.addToCart}
                onPress={() => {
                  addToCart(elem);
                }}
              >
                <Text style={styles.textBtn}>Add to cart</Text>
              </TouchableOpacity>
              {/* <Button><Text>DD</Text></Button> */}
            </View>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#9EADB9",
  },
  age: {
    fontSize: 18,
    color: "#9EADB9",
  },
  containerItem: {
    display: "flex",
    flexDirection: "row",
    borderColor: "#9EADB9",
    borderWidth: 1,
    borderRadius:30,
    marginBottom: 10,
    shadowColor:"#000",
    shadowOffset:{width:3,height:5},
    shadowOpacity:0.1,
    alignItems: "center",
    height: 100,
    justifyContent: "space-evenly",
  },
  addToCart: {
    width: 120,
    height: 27,
    borderColor: "#7D8992",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "rgba(158,173,185,0.3)",
  },
  textBtn: {
    color: "#B0B2B3",
    fontWeight: "bold",
    fontSize: 16,
  },
});
