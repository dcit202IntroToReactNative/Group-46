import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Axios from "axios";

//pick country code from text view

const SignUp = ({ navigation }: any) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async () => {
    /// make request to backedn using axios

    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "space-between",
          marginTop: 20,
        }}
      >
        <View>
          <View className="flex justify-center items-center w-screen">
            <Text style={{ fontSize: 20 }}>Create Account</Text>
          </View>
          <View className="flex justify-center items-center w-screen">
            <Text className="text-gray-500">
              Provide your details to complete
            </Text>
            <Text className="text-gray-500">creting account</Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          {/* <Text style ={{fontSize:20}}>Create Account</Text> */}
        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          flex: 1,
          alignContent: "center",
          marginTop: 50,
        }}
      >
        <View className="flex gap-y-3">
          <View>
            <View className="ml-6" style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: "300", fontSize: 15 }}>Full Name</Text>
            </View>

            <View className="ml-3 pr-10" style={{ flexDirection: "row" }}>
              <TextInput
                className="pl-3 border-gray-300"
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={(text) => {
                  setFullName(text);
                }}
                style={{
                  borderWidth: 1,
                  borderColor: "#E5E7EB",
                  width: "100%",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
                }}
                keyboardType="number-pad"
              />
            </View>
          </View>

          <View>
            <View className="ml-6" style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: "300", fontSize: 15 }}>Email</Text>
            </View>

            <View className="ml-3 pr-10" style={{ flexDirection: "row" }}>
              <TextInput
                className="pl-3 border-gray-300"
                placeholder="example@domain.com"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                }}
                style={{
                  borderWidth: 1,
                  borderColor: "#E5E7EB",
                  width: "100%",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
                }}
                keyboardType="number-pad"
              />
            </View>
          </View>

          <View>
            <View className="ml-6" style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: "300", fontSize: 15 }}>Password</Text>
            </View>

            <View className="ml-3 pr-10" style={{ flexDirection: "row" }}>
              <TextInput
                className="pl-3 border-gray-300"
                placeholder="password"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                }}
                style={{
                  borderWidth: 1,
                  borderColor: "#E5E7EB",
                  width: "100%",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
                }}
                keyboardType="number-pad"
              />
            </View>
          </View>

          <View>
            <View className="ml-6" style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: "300", fontSize: 15 }}>
                Confirm Password
              </Text>
            </View>

            <View className="ml-3 pr-10" style={{ flexDirection: "row" }}>
              <TextInput
                className="pl-3 border-gray-300"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                }}
                style={{
                  borderWidth: 1,
                  borderColor: "#E5E7EB",
                  width: "100%",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
                }}
                keyboardType="number-pad"
              />
            </View>
          </View>
        </View>

        <View className="px-6" style={{ alignItems: "center", marginTop: 20 }}>
          <TouchableOpacity
            className="w-full bg-primary"
            onPress={handleSubmit}
            style={{
              height: 50,
              borderRadius: 5,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Create Account</Text>
          </TouchableOpacity>
        </View>

        <View className="flex justify-center items-center pt-5 px-20">
          <Text className="text-center">
            By creating an account, you accept our{" "}
            <Text className="text-primary underline">Terms</Text> and{" "}
            <Text className="text-primary underline">Privacy Policies</Text>
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            marginTop: 20,
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text className="font-medium" style={{ fontSize: 18 }}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              console.log(" I have been hit");
              navigation.navigate("SignIn");
            }}
          >
            <Text
              style={{
                color: "#2465C2",
                fontSize: 18,
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignContent: "center",
            marginBottom: 30,
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center'
  },
});

export default SignUp;