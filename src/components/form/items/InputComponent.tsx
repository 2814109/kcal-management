import React from "react";
import {
  TextInput,
  TextInputProps,
  Text,
  View,
  StyleSheet,
  KeyboardTypeOptions,
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
  keyboardType: KeyboardTypeOptions;
}

export const InputComponent: React.FC<Props> = ({
  control,
  areaName,
  defaultValue,
  keyboardType,
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
            {...props}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            keyboardType={keyboardType}
          />
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
