import { View, Image, TouchableOpacity, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import { Video } from "expo-av";
import logo from "../../assets/logo.png";
import shareVideo from "../../assets/share.mp4";
import { AuthStore } from "../../store.js";
import { Stack, useRouter } from "expo-router";

const LoginScreen = () => {
  const router = useRouter();
  const videoRef = useRef(null);

  useEffect(() => {
    // Play the video when the component mounts
    videoRef.current.playAsync();
  }, []);

  const handlePress = () => {
    // Handle button press action
    console.log("Button pressed!");
    AuthStore.update((s) => {
      s.isLoggedIn = true;
    });
    router.replace("/(tabs)/1home");
  };

  return (
    <View className="relative z-10 flex justify-start items-center flex-col">
       <Stack.Screen options={{ title: "Login" }} />
      <View className=" relative w-full h-full">
        <Video
          ref={videoRef}
          source={shareVideo}
          className="h-full w-full object-cover opacity-60"
          repeat={true}
          resizeMode="cover"
          isLooping
        />
        <View className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 ">
          <View className="p-5">
            <Image source={logo} style={{ width: 100, height: 20 }} />
          </View>
          <View className="shadow-2xl">
            <TouchableOpacity
              onPress={handlePress}
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <Text className="w-48 h-48 rounded rotate-[-40deg] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></Text>
              <Text className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                {" "}
                Sign in with google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </View>
  );
};

export default LoginScreen;