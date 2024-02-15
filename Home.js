import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hey B! 🤓</Text>
      {/* <Image
        source={{
          uri: 'file:///Users/swati/B_ReactNativeApp/images/HopelessR.jpeg',
        }} */}
        style={{ width: 410, height: 350 }} />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default HomeScreen;


// <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text>Hey B! </Text>
//       <Image
//         source={{
//           uri: 'file:///Users/swati/B_ReactNativeApp/images/HopelessR.jpeg',
//         }}
//         style={{ width: 410, height: 350 }} />
//     </View>