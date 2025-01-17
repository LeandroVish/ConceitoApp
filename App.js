import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "./comp/Navbar";
import ProductCarousel from "./comp/ProductCarousel";
import BrandCarousel from "./comp/BrandCarousel";
import ProductDetailsScreen from "./comp/ProductDetailsScreen";
// import Cardgeral from "./comp/CardAbaixo";

const Stack = createStackNavigator();



const HomeScreen = ({navigation}) => {''
  return (
    <View style={styles.container}>
      <Navbar />
      <ProductCarousel navigation={navigation}/>
      <BrandCarousel />
      {/* <Cardgeral /> */}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
