import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Welcome from '../screens/Welcom';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: () => ({
        headerShown: false
      })
    },
    Login: {
      screen: Login,
      navigationOptions: () => ({
        headerTransparent: true
      })
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: () => ({
        headerTransparent: true
      })
    }
  },
  {
    initialRouteName: 'Welcome'
  }
);

export default createAppContainer(AppNavigator);
