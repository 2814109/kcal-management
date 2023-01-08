import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 100,
    paddingTop: 22,
    width: "100%",
    padding: 32,
  },
  input: {
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
  button: {
    marginTop: 30,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "blue",
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
