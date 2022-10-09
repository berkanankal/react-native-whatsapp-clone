import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import "moment/locale/tr";

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
            <View style={styles.mid_container_top}>
              <Text style={styles.username}>{conversation.users[1].name}</Text>
              <Text style={styles.message_date}>
                {moment(conversation.lastMessage.createdAt)
                  .locale("tr")
                  .startOf('hour')
                  .fromNow()}
              </Text>
            </View>
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
