import logo from "@/assets/logo.png";
import Button from "@/components/ui/button";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
    <SafeAreaView className="flex-1 bg-indigo-50">
      <ScrollView
        className="flex-1"
        contentContainerClassName="p-5 justify-center items-center"
        keyboardShouldPersistTaps="handled"
      >
        <Image source={logo} className="w-24 h-24 rounded-3xl" />

        <Text className="text-2xl font-bold text-gray-800 mb-6 mt-4">
          Đăng Nhập
        </Text>

        <TextInput
          className="w-full bg-white px-4 py-3 rounded-lg mb-4"
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="w-full bg-white px-4 py-3 rounded-lg mb-4"
          placeholder="Mật Khẩu"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {error && (
          <Text className="text-red-500 text-sm mb-4 font-semibold">
            {error}
          </Text>
        )}
        <Button
          onPress={handleLogin}
          title="Đăng nhập"
          containerStyle="w-full mb-4"
          textStyle="bg-indigo-600  border-red-600 text-white rounded-xl w-full py-4 text-center"
        />

        <Text className="text-gray-500 mt-4">
          Chưa có tài khoản?{" "}
          <Text
            className="text-indigo-500 font-semibold"
            onPress={() => router.push("/register")}
          >
            Đăng Kí
          </Text>
        </Text>
        <Text
          className="text-indigo-800 font-semibold mt-3"
          onPress={() => router.push("/")}
        >
          Quay lại trang chủ
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
