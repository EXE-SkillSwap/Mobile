import logo from "@/assets/logo.png";
import Button from "@/components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      setTimeout(() => setError(""), 3000);
      return;
    }
    if (email === "test" && password === "test") {
      router.push("/home");
    } else {
      setError("Sai thông tin đăng nhập");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <SafeAreaView className="flex-1 items-center justify-center px-4">
          <Animated.View
            entering={FadeInDown.delay(200).springify()}
            className={"items-center mb-8"}
          >
            <Image source={logo} className="w-24 h-24 rounded-xl" />
          </Animated.View>

          <Animated.View
            entering={FadeInUp.delay(400).springify()}
            style={styles.formContainer}
          >
            <Text className="text-3xl text-black font-bold text-center mb-6">
              Đăng Nhập
            </Text>

            <View className="flex-row items-center bg-gray-100 rounded-xl mb-4 h-14 px-4">
              <Ionicons
                name="mail-outline"
                size={20}
                color="#666"
                className="mr-3"
              />
              <TextInput
                className="flex-1 h-full text-lg text-gray-700"
                placeholder="Email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View className="flex-row items-center bg-gray-100 rounded-xl mb-4 h-14 px-4">
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color="#666"
                className="mr-3"
              />
              <TextInput
                className="flex-1 h-full text-lg text-gray-700"
                placeholder="Mật Khẩu"
                placeholderTextColor="#999"
                secureTextEntry={!isPasswordVisible}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                className="absolute right-4 h-full justify-center"
              >
                <Ionicons
                  name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color="#666"
                />
              </TouchableOpacity>
            </View>

            {error && (
              <Animated.Text
                entering={FadeInDown.springify()}
                className="text-red-500 text-md mb-4 text-center"
              >
                {error}
              </Animated.Text>
            )}

            <Button
              onPress={handleLogin}
              title="Đăng Nhập"
              containerStyle="bg-indigo-500 py-3"
              textStyle="text-white"
            />

            <TouchableOpacity className="self-center mt-4">
              <Text className="text-indigo-500">Quên mật khẩu?</Text>
            </TouchableOpacity>

            <View className="flex-row justify-center mt-4">
              <Text>Chưa có tài khoản? </Text>
              <TouchableOpacity onPress={() => router.push("/register")}>
                <Text className="text-indigo-600 font-bold">Đăng Kí</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(400).springify()}>
            <Pressable
              onPress={() => router.push("/")}
              className="flex-row items-center mt-8"
            >
              <Ionicons name="arrow-back-circle" size={24} color="white" />
              <Text className="text-white ml-2 text-base font-medium">
                Quay lại trang chủ
              </Text>
            </Pressable>
          </Animated.View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
});

export default Login;
