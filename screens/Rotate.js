import React, { useRef, useEffect } from "react";
import { Animated, Button, Image, StyleSheet, Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";

function Rotate() {
  const spinAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const isFocused = useIsFocused();

  const startAnim = () => {
    spinAnim.setValue(0);
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startAnim();
    return () => spinAnim.setValue(0);
  }, [spinAnim, isFocused]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: 250,
          height: 250,
          borderRadius: 10,
          backgroundColor: "#222",
          marginBottom: 20,
          transform: [
            {
              rotate: spinAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "360deg"],
              }),
            },
          ],
        }}
      >
        <Image
          style={styles.rotateImage}
          source={require('../assets/images/sick.png')}
        />
      </Animated.View>
      <Button color="#7a42a8" title="Click to Spin" onPress={startAnim} />
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
    color: "white",
    textAlign: "center",
    margin: 10,
    fontSize: 22,
  },
  rotateImage: {
    width: 250,
    height: 250,
  },
});

export default Rotate;
