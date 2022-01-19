import { useState } from "react";
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
import Cart from "./components/Cart";
import Items from "./components/Items";

export default function App() {
  const [toggle, setToggle] = useState(1);
  const [cartList, setCartList] = useState([]);

  return (
    <>
      {toggle == 1 && (
        <View style={styles.container}>
          <Text style={styles.header}>WALA STORE</Text>

          <View>
            <Image source={require("./media/logo.png")} style={styles.logo} />
          </View>
          <View style={styles.containerBtn}>
            <TouchableOpacity
              style={styles.startBtn}
              onPress={() => {
                setToggle(2);
              }}
            >
              <Text style={styles.textBtn}>START</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.startBtn}
              onPress={() => {
                setToggle(3);
              }}
            >
              <Text style={styles.textBtn}>Go To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {toggle == 2 && (
        <View style={styles.containerAnotherToggle}>
          <Image
            source={require("./media/logo.png")}
            style={styles.logoAnotherToggle}
          />
          <View style={styles.containerItems}>
            <Items cart={cartList} setCartList={setCartList} />
          </View>
          <View style={styles.containerBtn}>
            <TouchableOpacity
              style={styles.startBtn}
              onPress={() => {
                setToggle(1);
              }}
            >
              <Text style={[styles.textBtn, styles.x]}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {toggle == 3 && (
        <Cart
          setToggle={setToggle}
          cartList={cartList}
          setCartList={setCartList}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 180,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 40,
    color: "#9EADB9",
    fontFamily: "Cochin",
    opacity: 0.5,
  },
  // paragraph: {
  //   fontSize: 20,
  //   paddingLeft: 10,
  //   color: "#9EADB9",
  // },
  logo: {
    width: 320,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    opacity: 0.8,
  },
  containerBtn: {
    alignItems: "center",
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.19,
    shadowRadius: 3,
  },
  startBtn: {
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
  x: {},
  containerAnotherToggle: {
    paddingTop: 50,
    
  },
  logoAnotherToggle: {
    width: 150,
    height: 100,
  },
  containerItems: {
    display: "flex",
    // borderColor: "#000",
    // borderWidth: 1,
    margin: 6,
    padding: 10,
  },
});
