import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const signin = () => {
  return (
    <View styles={styles.container}>
      <Text>SignIn Screen</Text>
    <LinearGradient>
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
   </LinearGradient>

    {/* <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']} */}
       
        {/* > */}
         <Button
         title="SIGNIN"
         onPress={()=> alert('Button Clicked')}
         icon={{
           name: 'signin',
           type: 'font-awesome',
           size: 15,
           color: 'white',
         }}
         linearGradientProps={{
            colors: ['#FF9800', '#F44336'],
            start: [1, 0],
            end: [0.2, 0],
         }}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
        //    backgroundColor: 'rgba(90, 154, 230, 1)',
           borderColor: 'transparent',
           borderWidth: 0,
           borderRadius: 30,
         }}
         containerStyle={{
           width: 200,
           marginHorizontal: 50,
           marginVertical: 10,
         }}
         />
     {/* <LinearGradient/>   */}

    </View>
  );
};

export default signin;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'orange',
    },

    background:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },


});

