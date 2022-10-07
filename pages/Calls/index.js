import { View, Text } from "react-native";
import React from "react";
import styles from "./style";

const Calls = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.calls_text}>
        WhatsApp kullanan kişileri aramak için ekranın altındaki " " simgesine
        dokunun
      </Text>
    </View>
  );
};

export default Calls;
