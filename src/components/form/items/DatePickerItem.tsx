import DateTimePicker from "@react-native-community/datetimepicker";
import { Center } from "native-base";
export const DatePickerItem = () => {
  return (
    <Center>
      <DateTimePicker value={new Date()} />
    </Center>
  );
};
