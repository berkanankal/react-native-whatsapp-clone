import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const MessagesHeaderLeft = ({ chatPerson }) => {
  const navigation = useNavigation();

  const onClick = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AntDesign
        name="arrowleft"
        size={26}
        color="#fff"
        onPress={onClick}
        style={styles.arrow_left}
      />
      <Image
        source={{ uri: chatPerson.imageUri }}
        style={styles.chat_person_image}
      />
      <Text style={styles.chat_person_name}>{chatPerson.name}</Text>
    </View>
  );
};

export default MessagesHeaderLeft;
