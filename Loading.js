import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const contents = [
  "날씨를 불러오고 있습니다.",
  "날씨를 불러오고 있어요.",
  "날씨를 가져오고 있습니다.",
  "날씨를 가져오고 있어요.",
  "잠시만 기다려주세요.",
  "실행 중 입니다.",
  "로딩 중...",
  "반가워요!",
  "로딩 중...",
  "반가워요!",
];

/*
const gradients = [
  {
    gradient: ["#000000", "#434343"],
  },
  {
    gradient: ["#4B79A1", "#283E51"],
  },
  {
    gradient: ["#5A3F37", "#2C7744"],
  },
  {
    gradient: ["#1e3c72", "#2a5298"],
  },
  {
    gradient: ["#004FF9", "#FFF94C"],
  },
  {
    gradient: ["#485563", "#29323c"],
  },
  {
    gradient: ["#77A1D3", "#79CBCA", "#E684AE"],
  },
  {
    gradient: ["#334d50", "#cbcaa5"],
  },
  {
    gradient: ["#E55D87", "#5FC3E4"],
  },
  {
    gradient: ["#757519", "#CCCCB2"],
  },
];
*/

export default function Loading() {
  const random = Math.round(Math.random() * 10);
  const gradient = ["#000428", "#004e92"];
  const content = contents[random];
  return (
    <LinearGradient 
      colors={gradient}
      style={styles.container}
    >
      <View>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.text}>{content}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 25,
    paddingVertical: 100,
  },
  text: {
    fontSize: 30,
    color: "#ddd",
  }
});