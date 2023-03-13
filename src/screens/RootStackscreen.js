import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Landing} from './Landing';
import Signin from './Signin';
import { Signup} from './Signup';


const RootStack= createStackNavigator();

const RootStackscreen = ({navigation}) => {
   return(
   <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name='Landing' component={Landing}/>
      <RootStack.Screen name='Signin' component={Signin}/>
      <RootStack.Screen name='Signup' component={Signup}/>
   </RootStack.Navigator>
   );
}
  
   
  


export default RootStackscreen;

