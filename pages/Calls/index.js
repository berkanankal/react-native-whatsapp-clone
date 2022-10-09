import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import { MaterialIcons } from "@expo/vector-icons";

const Calls = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.calls_text}>
          WhatsApp kullanan kişileri aramak için ekranın altındaki{" "}
          <MaterialIcons name="add-call" size={17} /> simgesine dokunun
        </Text>
      </View>
      <View style={styles.add_call_icon}>
        <MaterialIcons name="add-call" size={24} color="#fff" />
      </View>
    </View>
  );
};

export default Calls;
