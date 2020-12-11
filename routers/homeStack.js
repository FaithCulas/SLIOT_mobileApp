import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';
import Content from '../screens/ContentScreen';
import Info from '../screens/InfoScreen';


const screens = {
    Info : {
        screen: Info
    },
    Home : {
        screen: Login
    },
    Register : {
        screen: Register
    },
    Content : {
        screen: Content
    },
    

}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);