
// App.js or main entry point
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchPage from './(searchpage)/index';
import LifestylePage from './(lifestyle)/index';
import ProfilePage from './profile/index';
import ProductionPage from './production/index';
import ReelPage from './(reelpage)/index'; 

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchPage" headerMode="none">
        <Stack.Screen name="SearchPage" component={SearchPage} options={{headerShown:false}} />
        <Stack.Screen name="LifestylePage" component={LifestylePage} options={{headerShown:false}} />
     
        <Stack.Screen name="Profile" component={ProfilePage} options={{ headerShown: false }} />
        <Stack.Screen name="Production" component={ProductionPage} options={{headerShown:false}}/>
        <Stack.Screen name="ReelPage" component={ReelPage} options={{headerShown:false}}/>
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;




