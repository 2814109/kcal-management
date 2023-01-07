import { Radio, Text } from "native-base";

export const SexRadioComponent = () => {
  return (
    <Radio.Group
      defaultValue="1"
      name="myRadioGroup"
      accessibilityLabel="Pick your favorite number"
    >
      <Radio value="men" my={1}>
        <Text>男</Text>
      </Radio>
      <Radio value="women" my={1}>
        <Text>女</Text>
      </Radio>
    </Radio.Group>
  );
};
