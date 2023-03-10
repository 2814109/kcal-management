import {
  Center,
  Select,
  FormControl,
  CheckIcon,
  WarningOutlineIcon,
} from "native-base";

export const SelectItem = () => {
  return (
    <Center>
      <FormControl isRequired>
        <FormControl.Label>Choose service</FormControl.Label>
        <Select
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
          <Select.Item
            label="テレワークなどでほとんどの時間を自宅で過ごす"
            value="low"
          />
          <Select.Item
            label="デスクワークであり、通勤や軽いスポーツを行う"
            value="middle"
          />
          <Select.Item
            label="よく身体を動かす仕事であり、休日にもスポーツを楽しむ"
            value="high"
          />
        </Select>
        {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage> */}
      </FormControl>
    </Center>
  );
};
