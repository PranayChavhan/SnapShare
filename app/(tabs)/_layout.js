import { Tabs } from "expo-router";
import { Text } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
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
