import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';
import Content from '../screens/ContentScreen';


const screens = {
    Home : {
        screen: Login
    },
    Register : {
        screen: Register
    },
    Content : {
        screen: Content
    }

}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);