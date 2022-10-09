import React from "react";
import { FlatList, Text, View, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import MessagesData from "../../data/MessagesData";
import BG from "../../assets/BG.png";
import Message from "../../components/Message";
import styles from "./style";
import MessageInput from "../../components/MessageInput";

const Messages = () => {
  const route = useRoute();

  const { chatPerson } = route.params;

  return (
    <ImageBackground style={styles.image_background} source={BG}>
      <FlatList
        data={MessagesData.messages}
        renderItem={({ item }) => <Message message={item} />}
        // inverted
      />
      <MessageInput />
    </ImageBackground>
  );
};

export default Messages;
