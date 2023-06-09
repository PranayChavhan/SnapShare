import { Stack, useRouter } from "expo-router";
import { Button, View } from "react-native";
import { AuthStore } from "../../../store";

const Tab2Index = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ headerShown: true, title: "Category" }} />
     
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
export default Tab2Index;