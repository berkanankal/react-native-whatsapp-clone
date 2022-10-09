import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: window.width,
    justifyContent: "space-between",
    padding: 10,
  },
  left_container: {
    flexDirection: "row",
  },
  mid_container: {
    justifyContent: "space-around",
  },
  mid_container_top: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: window.width * 0.75,
    alignItems: "center",
  },
  message_date: {
    color: "grey",
    fontSize: 13,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  status: {
    fontSize: 16,
    color: "grey",
  },
});
