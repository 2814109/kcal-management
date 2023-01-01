import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BasalMetabolismForm from "./components/form/objects/BasalMetabolismForm";
const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app</Text>
      <StatusBar style="auto" />
      <BasalMetabolismForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
