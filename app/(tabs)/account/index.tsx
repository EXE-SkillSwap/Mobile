import Button from "@/components/ui/button";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Acocunt = () => {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-500">
      <Text className="text-3xl font-bold">Account</Text>
      <Text>Account</Text>
      <View>
        <Button
          onPress={() => router.push("/login")}
          title="Logout"
          containerStyle="bg-red-500 rounded-full px-4 py-2"
          textStyle="text-white text-lg font-semibold"
        />
      </View>
    </View>
  );
};

export default Acocunt;
