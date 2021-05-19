import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const WelcomeScreen = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { username, password } = user;
  const onInputChange = (e) => {
    console.log(e);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const getUserInfo = () => {};

  useEffect(() => {
    //loadUser();
  }, []);

  return (
    <ImageBackground
      style={styles.background}
      imageStyle={styles.backgroundStyle}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#00008b" }}>
          Lets Grow Together
        </Text>
      </View>
      <View style={styles.root}>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>User Name</Text>
          <TextInput
            autoCorrect={false}
            style={styles.textInput}
            placeholder="Input username"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            autoCorrect={false}
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Input password"
            name="password"
            value={password}
            onChange={(e) => onInputChange(e)}
          />
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.loginButton1} onPress={getUserInfo}>
            <Text style={styles.title}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}>
        <Text style={styles.textStyle}>
          {"\u00A9"} R.M GROUP {new Date().getFullYear()}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  backgroundStyle: {
    resizeMode: "cover",
    alignSelf: "flex-end",
  },
  logoContainer: {
    position: "absolute",
    top: 120,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  root: {
    position: "absolute",
    top: 350,
    alignItems: "center",
  },
  textInput: {
    height: 40,
    width: 300,
    padding: 5,
    borderColor: "white",
    borderWidth: 1,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  loginButton1: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#4ecdc4",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: 300,
  },
  loginButton: {
    width: "100%",
    height: 70,
    //backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
  },
  textStyle: {
    color: "#000",
    fontSize: 15,
    textAlign: "center",
  },
});

export default WelcomeScreen;
