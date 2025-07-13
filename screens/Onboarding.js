import { Image, StyleSheet, Text, View } from "react-native";

const Onboarding = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Image style={styles.imgStyle} source={require('../assets/images/Logo.png')}/>
      </View>
      <View>
        <Text>Let us get to know you</Text>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    headerContainer:{
        height: 90,
        width: 'auto',
        backgroundColor: '#DEE3E8',
        alignContent: 'center',
        justifyContent: 'center'
    },
    imgStyle: {
        height: 65,
        width: 'auto',
        resizeMode: 'contain'
    }
});
