import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 15,
    alignItems: "flex-end",
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 25,
    marginRight: 5,
    flex: 1,
    alignItems: "flex-end",
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    backgroundColor: "#128C7E",
    borderRadius: 45,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});
