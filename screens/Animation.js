import React, { useRef, useEffect } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";

function FadeIn({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const isFocused = useIsFocused();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    return () => fadeAnim.setValue(0);
  }, [fadeAnim, isFocused]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: 300,
          height: 425,
          borderRadius: 10,
          backgroundColor: "#f55",
          marginBottom: 30,
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        }}
      >
        <Text style={styles.lyricsTitle}>🎶I'll Find You🎶{"\n"}Lecrae ft. Tori Kelly</Text>
        <Text style={styles.lyrics}>
          "Just fight a little longer my friend {"\n"}
          It's all worth it in the end{"\n"}
          But, when you've got nobody to turn to{"\n"}
          Just hold on, and I'll find you"{"\n"}{"\n"}
          "They say fear haunts{"\n"}
          And pain hates{"\n"}
          I say pain strengthens{"\n"}
          And fear drives faith{"\n"}
          And I don't know all of the outcomes{"\n"}
          Don't know what happens tomorrow{"\n"}
          But when that ocean of doubt comes{"\n"}
          Don't let me drown in my sorrow{"\n"}
          And don't let me stay at the bottom{"\n"}
          I feel like this hole is too deep to climb{"\n"}
          I've been lookin' for a way out{"\n"}
          But I'll settle for a peace of mind{"\n"}
          Picking up the pieces of my life and hopin' that I'll put together something right{"\n"}
          Tell me all I got is all I need{"\n"}
          Tell me you gon' help me stand and fight"
        </Text>
      </Animated.View>
      <Button color="#f55"
        title="Return Home"
        onPress={() =>
          navigation.navigate("Home", {
            itemId: 200,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    paddingTop: 80,
  },
  text: {
    color: "white",
    textAlign: "center",
    padding: 28,
    margin: 10,
    fontSize: 22,
  },
  lyricsTitle: {
    color: "#def",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  lyrics: {
    color: "#def",
    textAlign: "center",
    marginBottom: 20,
    marginHorizontal: 17,
  },
});

export default FadeIn;
