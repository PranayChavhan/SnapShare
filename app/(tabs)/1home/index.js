import { Stack, useRouter } from "expo-router";
import { Button, Image, Text, View } from "react-native";
import Feed from "../../components/feed";
import { AuthStore } from "../../../store";
const Tab1Index = () => {
  const router = useRouter();

 



  return (
    <View className="">
      <Stack.Screen options={{ headerShown: true, title: "SnapShare" }} />
  
     <Feed/>
    </View>
  );
};
export default Tab1Index;