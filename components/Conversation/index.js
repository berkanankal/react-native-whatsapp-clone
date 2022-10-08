import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const Conversation = ({ conversation }) => {
  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate("MessagesPage", { chatPerson: conversation.users[1] });
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.left_container}>
          <Image
            source={{ uri: conversation.users[1].imageUri }}
            style={styles.avatar}
          />
          <View style={styles.mid_container}>
            <Text style={styles.username}>{conversation.users[1].name}</Text>
            <Text numberOfLines={2} style={styles.status}>
              {conversation.lastMessage.content}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Conversation;
