import { Stack, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { AuthStore } from "../../../store";
const Tab1Index = () => {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-red-200">
      <Stack.Screen options={{ headerShown: true, title: "Home" }} />
     <Text>Home</Text>
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
export default Tab1Index;