import { StyleSheet, View } from "react-native";
import Onboarding from "../screens/Onboarding";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Onboarding/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  main: {
    flex: 1
  }
});
