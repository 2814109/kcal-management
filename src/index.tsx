// import { StatusBar } from "expo-status-bar";
import { TodoList } from "./components/list/TodoList";
import { StyleSheet, View } from "react-native";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { supabase } from "src/libs/foundation/supabase/client";
import { supabaseUrl, supabaseAnonKey } from "libs/foundation/supabase/const";
import { Index } from "src/router";

import { NativeBaseProvider, Box } from "native-base";

const Main = () => {
  const httpLink = createHttpLink({
    uri: `${supabaseUrl}/graphql/v1`,
  });

  const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const session = (await supabase.auth.getSession()).data.session;
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${
          session ? session.access_token : supabaseAnonKey
        }`,
        apikey: supabaseAnonKey,
      },
    };
  });

  const apolloClient = new ApolloClient({
    uri: `${supabaseUrl}/graphql/v1`,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={apolloClient}>
      {/* <View style={styles.container}> */}
      <NativeBaseProvider>
        <Index />
      </NativeBaseProvider>

      {/* </View> */}
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   // backgroundColor: "#fff",
  //   // alignItems: "center",
  //   // justifyContent: "center",
  // },
});

export default Main;
