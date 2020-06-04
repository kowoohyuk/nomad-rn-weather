import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
  // Default
  Default: {
    iconName: "weather-sunny",
    gradient: ["#000000", "#434343"],
    subtitle: "반가워요!",
  },
  // Group 2
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#4b6cb7", "#182848"],
    subtitle: "집 밖은 위험해요.",
  },
  // Group 3
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    subtitle: "우산 꼭 챙기세요!",
  },
  // Group 5
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#373B44", "#4286f4"],
    subtitle: "우산 꼭 챙기세요!",

  },
  // Group 6
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#abbaab", "#ffffff"],
    color: "#000",
    subtitle: "빙판 조심!",
  },
  // Group 7
  Mist: {
    iconName: "weather-fog",
    gradient: ["#E6DADA", "#274046"],
    subtitle: "안전 운전하세요.",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#2c3e50", "#bdc3c7"],
    subtitle: "안전 운전하세요.",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#283E51", "#4B79A1"],
    subtitle: "안전 운전하세요.",
  },
  Dust: {
    iconName: "weather-tornado",
    gradient: ["#1e130c", "#9a8478"],
    subtitle: "마스크는 꼭 챙기세요!",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#757F9A", "#D7DDE8"],
    color: "#000",
    subtitle: "안전 운전하세요.",
  },
  Sand: {
    iconName: "weather-tornado",
    gradient: ["#3E5151", "#DECBA4"],
    subtitle: "마스크는 꼭 챙기세요!",
  },
  Ash: {
    iconName: "weather-hail",
    gradient: ["#403A3E", "#BE5869"],
    subtitle: "나가면 큰일 나요!",
  },
  Squall: {
    iconName: "weather-windy",
    gradient: ["#373B44", "#4286f4"],
    subtitle: "비바람 주의!",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#16222A", "#3A6073"],
    subtitle: "집 밖은 너무 위험해요.",
  },
  // Group 8
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#EDE574", "#E1F5C4"],
    color: "#000",
    subtitle: "맑은 날!!",
  },
  // Group 9
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#83a4d4", "#b6fbff"],
    color: "#000",
    subtitle: "구름이 많아요.",
  },
}

export default function Weather({ temp, condition }) {
  const type = weatherOption[condition] || weatherOption['Default'];
  return (
    <LinearGradient
      colors={type.gradient}
      style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={type.iconName} size={120} color="#fff" />
        <Text style={styles.temp}>
          {temp}
          <MaterialCommunityIcons name="temperature-celsius" size={28} color="#fff" />
        </Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>
          {condition}
        </Text>
        <Text style={styles.subtitle}>
          {type.subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 150,
    paddingBottom: 40
  },
  temp: {
    fontSize: 32,
    color: "#fff",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});