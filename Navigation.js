import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStartedScreen from './Components/GetStartedScreen';
import LoginScreen from './Components/LoginScreen';
import LoginScreenTwo from './Components/LoginScreenTwo';
import WalletPage from './Components/walletPage';
import HomeScreen from './Components/HomeScreen';
import pavilionScreen from './Components/pavilionScreen';
import MainScreen from './Components/MainScreen';
import topicScreen from './Components/topicScreen';
import waitingScreen from './Components/waitingScreen';
import QuestionScreen from './Components/QuestionScreen';
import Submitted from './Components/Submitted';






const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name='GetStarted' component={GetStartedScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false}}/>
        <Stack.Screen name="LoginTwo" component={LoginScreenTwo}  options={{ headerShown: false}}/>
        <Stack.Screen name="Wallet" component={WalletPage} options={{headerShown: false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="PavilionScreen" component={pavilionScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Main" component={MainScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Topic" component={topicScreen} options={{headerShown: false}}/>
        <Stack.Screen name="waiting" component={waitingScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Question' component={QuestionScreen} options={{ headerShown: false}}/>
        <Stack.Screen name='submit' component={Submitted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
