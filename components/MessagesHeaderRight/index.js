import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import { FontAwesome, Entypo, MaterialIcons } from "@expo/vector-icons";

const MessagesHeaderRight = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="video-camera" size={22} color="#fff" />
      <MaterialIcons
        style={styles.call_icon}
        name="call"
        size={22}
        color="#fff"
      />
      <Entypo name="dots-three-vertical" size={22} color="#fff" />
    </View>
  );
};

export default MessagesHeaderRight;
