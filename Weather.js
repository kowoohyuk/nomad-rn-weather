import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#314755", "#26a0da"],
  },
  Drizzle: {
    iconName: "weather-snowy",
    gradient: ["#314755", "#26a0da"],
  },




  Rain: {
    iconName: "weather-snowy",
    gradient: ["#314755", "#26a0da"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#314755", "#26a0da"],
  },
  Atmosphere: {
    iconName: "weather-lightning",
    gradient: ["#314755", "#26a0da"],
  },
  Clear: {
    iconName: "weather-snowy",
    gradient: ["#314755", "#26a0da"],
  },
  Clouds: {
    iconName: "weather-snowy",
    gradient: ["#314755", "#26a0da"],
  },
  Mist: {
    iconName: "weather-snowy",
    gradient: ["#314755", "#26a0da"],
  },
  Dust: {
    iconName: "weather-snowy",
    gradient: ["#314755", "#26a0da"],
  },
}

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOption[condition].gradient}
      style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOption[condition].iconName} size={120} color="#fff" />
        <Text style={styles.temp}>
          {temp} / {condition}
          <MaterialCommunityIcons name="temperature-celsius" size={24} color="#fff" />
        </Text>
      </View>
      <View style={styles.halfContainer}>
        <Text>Perfect</Text>
      </View>
    </LinearGradient>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm", 
    "Drizzle", 
    "Rain", 
    "Snow", 
    "Atmosphere", 
    "Clear", 
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
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
  }
});