import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textTitle]}>Animations</Text>
      <Text style={styles.text}>Using react native to showcase animations. Click Below to see some animations!</Text>
      <Button color="#7a42a8"
        title="Click Me"
        onPress={() =>
          navigation.navigate("Animations", {
            itemId: 100,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#def",
    fontSize: 15,
    textAlign:"center",
    paddingBottom: 20,
  },
  textTitle: {
    color: "#f77",
    fontSize: 25,
    fontWeight: "700",
  },
});