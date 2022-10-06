import * as React from "react";
import { FlatList, View } from "react-native";
import ConversationsData from "../../data/ConversationsData";
import styles from "./style";
import Conversation from "../../components/Conversation";

const ConversationList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={ConversationsData}
        renderItem={({ item }) => <Conversation conversation={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ConversationList;
