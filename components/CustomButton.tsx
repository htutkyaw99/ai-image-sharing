import { Text, TouchableOpacity } from "react-native";

const CustomButton = () => {
  return (
    <TouchableOpacity
        className="bg-[#A5E900] mx-5 p-5 rounded-xl"
        activeOpacity={0.8}
    >
        <Text className="text-xl text-center font-bold">
            Get Started
        </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;