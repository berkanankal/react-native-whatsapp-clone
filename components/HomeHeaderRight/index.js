import { View } from "react-native";
import React from "react";
import { Fontisto, Entypo } from "@expo/vector-icons";
import styles from "./style";

const HomeHeaderRight = () => {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color="#fff" />
      <Entypo name="dots-three-vertical" size={20} color="#fff" />
    </View>
  );
};

export default HomeHeaderRight;
