import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "../components/icons";
import { Foundation } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import Weight from "../components/card/weight";
import Age from "../components/card/age";
import Female from "../components/card/female";
import Male from "../components/card/male";

const Home = () => {
  const [gender, setGender] = useState("");
  const handleSubmit = () => {
    console.log("hello");
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="flex justify-center items-center">
        <Text className="text-3xl font-medium text-primary">
          BMI Calculator
        </Text>
      </View>

      <View className="flex justify-center flex-row mt-10">
        <Female
          gender={gender}
          onPress={() => {
            setGender("female");
          }}
        />
        <Male
          gender={gender}
          onPress={() => {
            setGender("male");
          }}
        />
      </View>

      <View className="flex justify-between  items-center mt-6 bg-primary h-44 rounded-lg mx-14 pt-10">
        <Text className="text-2xl text-white">
          HEIGHT<Text className="text-sm">cm</Text>
        </Text>
        <Slider
          style={{ width: 200, height: 40, marginBottom: 20 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#000000"
        />
      </View>

      <View className="flex flex-row rounded-lg mx-12 pt-10">
        <Weight />
        <Age />
      </View>

      <View
        className="px-10 pt-5"
        style={{ alignItems: "center", marginTop: 20 }}
      >
        <TouchableOpacity
          className="w-full bg-primary"
          onPress={handleSubmit}
          style={{
            height: 60,
            borderRadius: 5,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Calculate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;