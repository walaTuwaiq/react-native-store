import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Cart({ setToggle, cartList, setCartList }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (cartList) {
      setList(cartList);
    }
  }, [cartList]);

  const removeItem = (index) => {
    const copiedList = [...list];
    copiedList.splice(index, 1);
    setCartList(copiedList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CART</Text>
      <View>
        {list &&
          list.map((elem, index) => {
            return (
              <View key={index} style={styles.containerItem}>
                <Text style={styles.name}>{elem.name}</Text>
                <Text style={styles.age}>{elem.age}</Text>
                <TouchableOpacity
                  style={styles.removeFromCart}
                  onPress={() => {
                    removeItem(index);
                  }}
                >
                  <Text style={styles.textBtnRemove}>Remove from cart</Text>
                </TouchableOpacity>
                {/* <Button><Text>DD</Text></Button> */}
              </View>
            );
          })}
      </View>
      <View>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            setToggle(1);
          }}
        >
          <Text style={styles.textBtn}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 10,
    // justifyContent:"center",
    alignItems: "center",
  },
  textBtnRemove: {
    color: "#B0B2B3",
    fontWeight: "bold",
    fontSize: 10,
  },
  containerItem: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderColor: "#9EADB9",
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.1,
    height: 100,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  name: {
    fontSize: 40,
    color: "#9EADB9",
  },
  age: {
    fontSize: 25,
    color: "#9EADB9",
  },
  removeFromCart: {
    width: 110,
    height: 27,
    borderColor: "#7D8992",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "rgba(158,173,185,0.3)",
  },
  backBtn: {
    width: 150,
    height: 40,
    borderColor: "#7D8992",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "rgba(158,173,185,0.3)",
    marginTop: 5,
    marginBottom: 15,
  },
  textBtn: {
    color: "#B0B2B3",
    fontWeight: "bold",
    fontSize: 18,
  },
  header: {
    fontSize: 40,
    color: "#9EADB9",
  },
});
