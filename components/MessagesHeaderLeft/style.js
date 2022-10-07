import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    marginRight: 30,
    alignItems: "center",
  },
  arrow_left: { marginLeft: -10, paddingVertical: 7 },
  chat_person_image: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  chat_person_name: { color: "#fff", fontWeight: "bold", fontSize: 18 },
});
