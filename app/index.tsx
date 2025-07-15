import { SafeAreaView, StyleSheet } from "react-native";
import Onboarding from "../screens/Onboarding";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <Onboarding />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {},
});
