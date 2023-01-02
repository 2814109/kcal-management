// import { StatusBar } from "expo-status-bar";
import { TodoList } from "./components/list/TodoList";
import { StyleSheet, View } from "react-native";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import BasalMetabolismForm from "./components/form/objects/BasalMetabolismForm/BasalMetabolismForm";

import { supabaseUrl } from "libs/foundation/supabase/const";
const Main = () => {
  const httpLink = createHttpLink({
    uri: `${supabaseUrl}/graphql/v1`,
  });
  const apolloClient = new ApolloClient({
    uri: `${supabaseUrl}/graphql/v1`,
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={apolloClient}>
      <View style={styles.container}>
        <BasalMetabolismForm />
        <TodoList />
      </View>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
