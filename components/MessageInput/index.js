import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Entypo,
  Fontisto,
} from "@expo/vector-icons";

const MessageInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput placeholder={"Mesaj"} style={styles.textInput} multiline />
        <Entypo name="attachment" size={22} color="grey" style={styles.icon} />

        <Fontisto name="camera" size={22} color="grey" style={styles.icon} />
      </View>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <MaterialCommunityIcons name="microphone" size={26} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MessageInput;
