import {
  useForm,
  Control,
  FieldValues,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import { BasalMetabolism } from "types/BasalMetabolism";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { InputComponent } from "../../items/InputComponent";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "./validationSchema";

const BasalMetabolismForm = () => {
  const { control, handleSubmit } = useForm<BasalMetabolism>({
    resolver: zodResolver(validationSchema),
    mode: "onSubmit",
  });
  const onSubmit: SubmitHandler<BasalMetabolism> = (data: any, e: any) =>
    console.log(data, e);
  const onError: SubmitErrorHandler<BasalMetabolism> = (errors: any, e: any) =>
    console.log(errors, e);

  return (
    <View style={styles.container}>
      <InputComponent
        control={control as unknown as Control<FieldValues>}
        areaName="hightOfBody"
        label="身長"
        placeholder="身長"
        autoCompleteType="hightOfBody"
        autoCapitalize="none"
        style={styles.input}
        keyboardType="numeric"
      />
      <InputComponent
        control={control as unknown as Control<FieldValues>}
        areaName="bodyWeight"
        label="体重"
        placeholder="体重"
        autoCompleteType="bodyWeight"
        autoCapitalize="none"
        style={styles.input}
        keyboardType="numeric"
      />

      <InputComponent
        control={control as unknown as Control<FieldValues>}
        areaName="age"
        label="年齢"
        placeholder="年齢"
        autoCompleteType="age"
        autoCapitalize="none"
        style={styles.input}
        keyboardType="numeric"
      />
      <Pressable
        style={styles.button}
        onPress={() => handleSubmit(onSubmit, onError)()}
      >
        <Text style={styles.text}>登録</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 100,
    paddingTop: 22,
    width: "100%",
    padding: 32,
  },
  input: {
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
  button: {
    marginTop: 30,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "blue",
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default BasalMetabolismForm;
