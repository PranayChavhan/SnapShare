//import liraries
import React from "react";
import { View, Image, ScrollView, Text } from "react-native";

// create a component
const Feed = () => {
  const images = [
    "https://i.pinimg.com/236x/7d/ef/15/7def15ac734837346dac01fad598fc87.jpg",
    "https://i.pinimg.com/236x/7d/ef/15/7def15ac734837346dac01fad598fc87.jpg",
    "https://i.pinimg.com/236x/b9/82/d4/b982d49a1edd984c4faef745fd1f8479.jpg",
    "https://i.pinimg.com/236x/b9/82/d4/b982d49a1edd984c4faef745fd1f8479.jpg",
  ];

  return (
    <ScrollView>
      <View
        style={{
          paddingVertical: 12,
          paddingHorizontal: 5,
        }}
      >
        <View
          style={{
            flex: 2,
            marginHorizontal: 8,
            flexDirection: "column",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {images.map((image, index) => (
            <View key={index} className="relative">
              <Image
              className="p-0 h-[80vh] min-w-fit rounded-xl"
                source={{
                  uri: image,
                }}
              />
              <View className=" font-bold absolute bottom-5 left-5 bg-black h-12 w-40 rounded-xl p-2 flex justify-center items-start flex-col">
                <Text className="text-white text-[10px] opacity-70">Created by</Text>
                <Text className="opacity-100 text-white">Pranay Chavhan</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Feed;
