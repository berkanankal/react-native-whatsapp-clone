import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "./style";
import { FontAwesome, MaterialIcons, AntDesign } from "@expo/vector-icons";

const Status = () => {
  return (
    <TouchableWithoutFeedback>
      <>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={{ uri: "https://picsum.photos/200/300" }}
            />
            <View style={styles.plus_icon}>
              <AntDesign name="pluscircle" size={24} color="#128C7E" />
            </View>
          </View>

          <View style={styles.body_container}>
            <Text style={styles.header_text}>Durumum</Text>
            <Text style={styles.body_text}>
              Durum güncellemesi eklemek için dokunun
            </Text>
          </View>
        </View>
        <View style={styles.right_bottom_icons}>
          <View style={styles.edit_icon}>
            <MaterialIcons name="edit" size={24} color="#37474f" />
          </View>
          <View style={styles.camera_icon}>
            <FontAwesome name="camera" size={24} color="#fff" />
          </View>
        </View>
      </>
    </TouchableWithoutFeedback>
  );
};

export default Status;
