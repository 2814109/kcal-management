import React from "react";
import {
  TextInput,
  TextInputProps,
  Text,
  View,
  StyleSheet,
} from "react-native";

import {
  Controller,
  Control,
  DeepMap,
  FieldValues,
  FieldError,
} from "react-hook-form";

interface Props extends TextInputProps {
  control: Control<any>;
  areaName: string;
  defaultValue?: any;
  label: string;
  autoCompleteType: string;
}

export const InputComponent: React.FC<Props> = ({
  control,
  areaName,
  defaultValue,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={areaName}
      defaultValue={defaultValue}
      render={({
        field: { onChange, value, onBlur, name },
        formState: { errors },
      }) => (
        <View>
          <TextInput
            // このpropsにautoCompleteTypeなど諸々乗っかってくる
            {...props}
            value={value || ""}
            onBlur={onBlur}
            onChangeText={onChange}
          />
          {/* バリエーションエラー表示 */}
          {errors[name] && (
            <Text style={styles.text}>
              {(errors[name] as DeepMap<FieldValues, FieldError>)?.message}
            </Text>
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
