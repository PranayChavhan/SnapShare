import { Tabs } from "expo-router";
import { Text } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs

      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          backgroundColor: "white",
          marginHorizontal:20,
          marginBottom: 10,
          borderRadius: 15,
          paddingBottom: 5,
          height: 55,
        }
      }}


    >
      <Tabs.Screen
        name="1home"
        options={{
          title: "Home",
          tabBarIcon: () => <Text>🏠</Text>,
        }}
      />

      <Tabs.Screen
        name="2category"
        options={{
          title: "Category",
          tabBarIcon: () => <Text>⚙️</Text>,
        }}
      />

      <Tabs.Screen
        name="3profile"
        options={{
          title: "Profile",
          tabBarIcon: () => <Text>❤️</Text>,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
