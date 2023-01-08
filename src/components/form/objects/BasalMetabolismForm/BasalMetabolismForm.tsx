import {
  useForm,
  Control,
  FieldValues,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import { BasalMetabolism } from "src/types/BasalMetabolism";
import { View, Text, Pressable } from "react-native";
import { styles } from "./style";
import { InputComponent } from "../../items/InputComponent";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "./validationSchema";
import { onSubmitBasalMetabolism } from "src/hooks/features/BasalMetabolismForm/action";
import { SexRadioComponent } from "../../items/SexRadioComponent";
import { SelectItem } from "../../items/SelectItem";
import DateTimePicker from "@react-native-community/datetimepicker";

const BasalMetabolismForm = () => {
  const { control, handleSubmit } = useForm<BasalMetabolism>({
    resolver: zodResolver(validationSchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<BasalMetabolism> = (data: any, e: any) =>
    onSubmitBasalMetabolism();
  const onError: SubmitErrorHandler<BasalMetabolism> = (errors: any, e: any) =>
    console.log(errors, e);

  return (
    <View style={styles.container}>
      <SexRadioComponent />
      {/* <InputComponent
        control={control as unknown as Control<FieldValues>}
        areaName="hightOfBody"
        label="性別"
        placeholder="性別"
        autoCompleteType="sex"
        autoCapitalize="none"
        style={styles.input}
        keyboardType="numeric"
      /> */}
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

      <DateTimePicker value={new Date()} />

      <SelectItem />

      <Pressable
        style={styles.button}
        onPress={() => handleSubmit(onSubmit, onError)()}
      >
        <Text style={styles.text}>登録</Text>
      </Pressable>
    </View>
  );
};

export default BasalMetabolismForm;
