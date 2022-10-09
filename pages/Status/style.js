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
  right_bottom_icons: {
    position: "absolute",
    right: 15,
    bottom: 15,
  },
  edit_icon: {
    backgroundColor: "#cfd8dc",
    marginBottom: 15,
    width: 56,
    height: 56,
    borderRadius: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  camera_icon: {
    backgroundColor: "#128C7E",
    width: 56,
    height: 56,
    borderRadius: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  plus_icon: {
    position: "absolute",
    right: 10,
    bottom: 0,
    backgroundColor: "white",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
