import 'react-native-gesture-handler';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import Home from './src/components/Home';
import Details from './src/components/Details';
import{createStackNavigator} from '@react-navigation/stack'


const Stack= createStackNavigator();

export default function App() {

  return (
   <NavigationContainer>
     <Stack.Navigator initiualRoute= 'Home' screenOptions={{headerShown:false}}>
       <Stack.Screen name='home' component={Home}/>
       <Stack.Screen name='details' component={Details}/>
     </Stack.Navigator>
     {/* <Drawer.Navigator drawerContent ={props=> <DrawerContent {...props}}/>
      <Drawer.Screen name='' component={}/>
      <Drawer.Screen name='' component={}/>
      <Drawer.Screen name='' component={}/>
     <Drawer.Navigator/>  */}
   </NavigationContainer>
  );
}


