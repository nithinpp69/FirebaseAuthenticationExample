import React, {component} from 'react'
import { createStackNavigator,createSwitchNavigator } from 'react-navigation';
import Splash from './modules/splash/splash'
import SignUp from './modules/signup/signup'
import Login from './modules/login/login'
import Home from './modules/home/home'

const Authentication = createStackNavigator({
	Login: {screen: Login},
	SignUp: {screen: SignUp},
})

const ApplicationHome = createStackNavigator({
	Home: {screen: Home}
})

export const ScreenRegistry = createSwitchNavigator({
	Splash: {screen: Splash},
	Authentication: {screen: Authentication},
	ApplicationHome: {screen: ApplicationHome}
}
,{
	initialRouteName: 'Splash'
}
);



