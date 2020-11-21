import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
 import Button from './components/Button';
 import SidesControl from './components/SidesControl'
  import MiddleControl from './components/MiddleControls';
  import AddToCard from './AddToCard';
  import OnlineShopping from  './OnlineShopping';
  import PaymentSuccessful from './PaymentSuccessful';

export default function App() {
  return (
     <AddToCard/>
    //  <OnlineShopping />
    // <PaymentSuccessful />
    
    // <View style={styles.Container}>
     
    //   <View>
    //      <Text style={styles.MainHeading}>ADD TO CARD</Text>
    //     <Text>
    //       {" "}
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum. proident, sunt
    //       in culpa qui officia deserunt mollit anim id est laborum.
    //     </Text>
    //   </View>

    //   <Image
    //     source={require("./assets/shopping-card.png")}
    //     style={styles.image}
    //   />
    //  <Button/>

     
     
     
    //   <View>
    //     <View style={styles.footer}>
    //       <Text>Previous</Text>

    //       <View style={styles.controls}>
         
    //       <SidesControl/>
    //      <MiddleControl/>
    //      <SidesControl />
         
    //       </View>

    //       <Text>Skip</Text>

    //     </View>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginHorizontal: 50,
    justifyContent: "space-around",
  },

  MainHeading: {
    fontWeight: "bold",
    fontSize: 25,
    marginVertical: 10,
  },

  image: {
    height: 200,
    width: 200,
    alignSelf: "center",
  },

  buttonContainer: {
    height: 50,
    width: 120,
    backgroundColor: "#5b33b8",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  controls: {
    flexDirection: "row",
  },
  middleControl: {
    backgroundColor: "#5b33b8",
    height: 8,
    width: 25,
    borderRadius: 5,
    marginHorizontal: 2,
  },

  firstControl: {
    backgroundColor: "lightgrey",
    height: 8,
    width: 8,
    borderRadius: 5,
  },

  secondControl: {
    backgroundColor: "lightgrey",
    height: 8,
    width: 8,
    borderRadius: 5,
  },
});
