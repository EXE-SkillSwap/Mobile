import { ButtonProps } from "@/types/ButtonProps";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, title, textStyle, containerStyle }: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`rounded-xl min-h-[62px] justify-center items-center ${containerStyle}`}
    >
      <Text className={`font-semibold text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
