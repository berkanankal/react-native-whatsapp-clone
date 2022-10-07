import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  body_container: {
    justifyContent: "center",
  },
  header_text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  body_text: {
    color: "grey",
  },
});
