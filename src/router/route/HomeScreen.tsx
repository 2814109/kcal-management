import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { Pressable } from "react-native";
import type { RootStackParamList } from "../";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ route, navigation }: Props) => {
  // const navigation = useNavigation<RootStackParamList>();

  return (
    <>
      <Text>Home Screen!</Text>
      <Pressable onPress={() => navigation.navigate("Second")}>
        <Text>Route</Text>
      </Pressable>
    </>
  );
};
