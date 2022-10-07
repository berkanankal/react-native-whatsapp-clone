import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "./style";

const Status = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
        <View style={styles.body_container}>
          <Text style={styles.header_text}>Durumum</Text>
          <Text style={styles.body_text}>
            Durum güncellemesi eklemek için dokunun
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Status;
