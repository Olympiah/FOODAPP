import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const landing = () => {
  return (
    <View styles={styles.container}>
       <View styles={styles.header}>
         <Text>Header</Text>
       </View>
       <View styles={styles.footer}>
         <Text>Footer</Text>
       </View>
    {/* <LinearGradient>
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
   </LinearGradient> */}

    {/* <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']} */}
       
        {/* > */}
         {/* <Button
         title="HOME"
         onPress={()=> alert('Button Clicked')}
         icon={{
           name: 'home',
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
         /> */}
     {/* <LinearGradient/>   */}

    </View>
  );
};

export default landing
;

const {height}= Dimensions.get('screen');
// const height_log= height * 0.28;

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
    title:{
      color: 'black',
      fontSize:30,
      fontWeight:'bold'
    },
    signIn:{
     width:150,
     height:40,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:50,
     flexDirection:'row'
    },
    textSign:{
     color:'white',
     fontWeight:'bold'
    },
    // logo:{
    //   width:height_logo,
    //   height:height_logo,
    // },
    footer:{
      flex:1,
      backgroundColor: '#fff',
      borderTopRightRadius:30,
      borderTopLeftRadius:30,
      paddingVertical:50,
      paddingHorizontal:50,

    },
    header:{
      flex:2,
      justifyContent:'center',
      alignItems:'center'
    }


});