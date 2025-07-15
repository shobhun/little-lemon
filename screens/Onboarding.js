import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { isEmpty } from '../utils/helper';

const Onboarding = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.imgStyle}
          source={require("../assets/images/Logo.png")}
        />
      </View>
      <View style={styles.nonHeaderContainer}>
        <View>
          <Text style={styles.textStyle}>Let us get to know you</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>First Name</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter First Name"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Email</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Pressable
          style={styles.btnStyle}
          onTouchEnd={() => loginCheck(name,email)}>
          <Text style={{ fontSize: 20 }}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

const loginCheck = (name,email) => {
  if(isEmpty(name)){
    alert('Please Enter the Name !')
  }else if(isEmpty(email)){
    alert('Please Enter the Email !')
  }else{
    alert('Hi '+ name + ' '+ email)
  }
}

export default Onboarding;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    flex: 1,
  },
  headerContainer: {
    height: 90,
    width: "auto",
    backgroundColor: "#DEE3E8",
    alignContent: "center",
    justifyContent: "center",
    flex: 0.1,
  },
  imgStyle: {
    height: 65,
    width: "auto",
    resizeMode: "contain",
  },
  nonHeaderContainer: {
    flex: 0.9,
    backgroundColor: "#CAD2D9",
  },
  textStyle: {
    alignSelf: "center",
    paddingTop: 50,
    fontSize: 25,
    fontWeight: "400",
  },
  textInputStyle: {
    height: 50,
    borderWidth: 2,
    margin: 20,
    paddingLeft: 10,
    borderRadius: 10,
    fontSize: 20,
  },
  btnStyle: {
    width: 150,
    height: "auto",
    top: 50,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#DEE3E8",
    padding: 20,
    borderRadius: 10,
  },
});
