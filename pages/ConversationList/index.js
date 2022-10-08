import { FlatList, View, Button } from "react-native";
import ConversationsData from "../../data/ConversationsData";
import styles from "./style";
import Conversation from "../../components/Conversation";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from "../../config/firebase";
import { useEffect } from "react";

const ConversationList = () => {
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="dneme" onPress={() => writeUserData("sadasd")} />
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
