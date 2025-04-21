import bgImage from "@/assets/skillswap.png";
import Button from "@/components/ui/button";
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-indigo-900">
        <ImageBackground
          source={bgImage}
          resizeMode="contain"
          className="flex-1 justify-center"
        >
          <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
            <View>
              <Text className="font-semibold text-center text-white text-6xl">
                Skill Swap
              </Text>
              <Text className=" text-center text-white text-4xl">
                Welcome to our platform
              </Text>
            </View>
            <View>
              <Button
                onPress={() => router.push("/login")}
                title="Đăng Nhập"
                containerStyle="mb-4"
                textStyle="bg-indigo-500 text-white rounded-xl w-full py-4 text-center"
              />
              <Button
                onPress={() => router.push("/register")}
                title="Đăng Kí"
                containerStyle="mb-4"
                textStyle="bg-white text-indigo-500 rounded-xl w-full py-4 text-center"
              />
            </View>
          </SafeAreaView>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
