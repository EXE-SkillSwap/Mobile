import Button from "@/components/ui/button";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    // Password must be at least 8 characters, contain uppercase, lowercase, and a number
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password)
    );
  };

  const handleRegister = () => {
    // Reset errors
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    let isValid = true;

    // Validate email
    if (!email.trim()) {
      newErrors.email = "Email bắt buộc";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Email không hợp lệ";
      isValid = false;
    }

    // Validate password
    if (!password) {
      newErrors.password = "Mật khẩu bắt buộc";
      isValid = false;
    } else if (!validatePassword(password)) {
      newErrors.password =
        "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số";
      isValid = false;
    }

    // Validate confirm password
    if (!confirmPassword) {
      newErrors.confirmPassword = "Xác nhận mật khẩu bắt buộc";
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu không khớp";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // Handle successful registration
      Alert.alert("Thành công", "Tạo tài khoản thành công!", [{ text: "OK" }]);

      // In a real app, you would submit to your API here
      console.log("Registration data:", { email, password });
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-6 py-8"
        keyboardShouldPersistTaps="handled"
      >
        <View className="mb-8">
          <Text className="text-3xl font-bold text-gray-800">
            Tạo tài khoản
          </Text>
          <Text className="text-gray-500 mt-2">
            Tạo mới tài khoản để bắt đầu
          </Text>
        </View>

        {/* Email Field */}
        <View className="mb-4">
          <Text className="text-gray-700 mb-2 font-medium">Email</Text>
          <TextInput
            className={`border-b rounded-lg p-3 placeholder:text-zinc-400 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Email của bạn"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email ? (
            <Text className="text-red-500 text-sm mt-1">{errors.email}</Text>
          ) : null}
        </View>

        {/* Password Field */}
        <View className="mb-4">
          <Text className="text-gray-700 mb-2 font-medium">Mật khẩu</Text>
          <TextInput
            className={`border-b rounded-lg p-3 placeholder:text-zinc-400 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Mật khẩu của bạn"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {errors.password ? (
            <Text className="text-red-500 text-sm mt-1">{errors.password}</Text>
          ) : null}
        </View>

        {/* Confirm Password Field */}
        <View className="mb-6">
          <Text className="text-gray-700 mb-2 font-medium">
            Xác nhận mật khẩu
          </Text>
          <TextInput
            className={`border-b rounded-lg p-3 placeholder:text-zinc-400 ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Xác nhận mật khẩu của bạn"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          {errors.confirmPassword ? (
            <Text className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </Text>
          ) : null}
        </View>

        {/* Register Button */}
        <Button
          onPress={handleRegister}
          title="Đăng kí"
          containerStyle="w-full mb-4 bg-indigo-600 py-4 "
          textStyle="text-white rounded-xl w-full text-center"
        />

        {/* Already have account link */}

        <View className="flex-1 justify-between items-center mt-4">
          <Text className="text-gray-600">
            Đã có tài khoản?{" "}
            <Text
              className="text-indigo-500 font-semibold"
              onPress={() => router.push("/login")}
            >
              Đăng nhập
            </Text>
          </Text>
          <Text
            className="text-indigo-800 font-semibold"
            onPress={() => router.push("/")}
          >
            Quay lại trang chủ
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
