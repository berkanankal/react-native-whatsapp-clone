import { FlatList, View, Text } from "react-native";
import ConversationsData from "../../data/ConversationsData";
import styles from "./style";
import Conversation from "../../components/Conversation";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from "../../config/firebase";
import { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ConversationList = () => {
  const navigation = useNavigation();

  function writeUserData(content) {
    const db = getDatabase(app);
    set(ref(db, "conversations/"), {
      lastMessage: {
        content: content,
        createdAt: Date.now(),
      },
    })
      .then(() => console.log("başarılı"))
      .catch((error) => console.log(error));
  }

  const getData = () => {
    const db = getDatabase(app);
    const starCountRef = ref(db, "conversations/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  };

  const onClick = () => {
    navigation.navigate("ContactListPage");
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={ConversationsData}
        renderItem={({ item }) => <Conversation conversation={item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.contacts_icon}>
        <MaterialCommunityIcons
          name="android-messages"
          size={28}
          color="#fff"
          onPress={onClick}
        />
      </View>
    </View>
  );
};

export default ConversationList;
