import { Stack, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { AuthStore } from "../../../store";

const Tab3Index = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ headerShown: true, title: "Home" }} />
     <Text>Profile</Text>
      <Button
        onPress={() => {
          AuthStore.update((s) => {
            s.isLoggedIn = false;
          });
          router.replace("/login");
        }}
        title="LOGOUT"
      />
    </View>
  );
};
export default Tab3Index;