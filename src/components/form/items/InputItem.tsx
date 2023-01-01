import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const InputItem = () => {
  const [text, onChangeText] = useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});

export default InputItem;
