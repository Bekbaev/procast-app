import React, {useEffect, useState} from 'react';
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import SavedCastingsScreen from "./SavedCastingsScreen";
import ResponsesScreen from "./ResponsesScreen";
import SettingsScreen from "./SettingsScreen";
import ExitScreen from "./ExitScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import CreateCasting from "./CreateCasting";
import {useSelector} from "react-redux";
import MyCastings from "./MyCastings";
import CastingScreen from "./CastingsScreen";
import UserResponsesScreen from "./UserResponsesScreen";
import UserProfileScreen from "./UserProfileScreen";
import FillProfileScreen from "./FillProfileScreen";
import FiltersScreen from "./FiltersScreen";

const Drawer = createDrawerNavigator();

const SplashScreen = (props) => {
    const role = useSelector(state => state.userReducer.role);


    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                        // borderBottomLeftRadius: 10,
                        // borderBottomRightRadius: 10,
                        height: 95
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                }} initialRouteName="Главная">
                <Drawer.Screen name="Главная" component={ HomeScreen }/>
                {role === '1' && <Drawer.Screen name="Мои кастинги" component={MyCastings}/>}
                <Drawer.Screen name="Профиль" component={ProfileScreen}/>
                {role === '0' && <Drawer.Screen name="Отклики на роли" component={ResponsesScreen}/>}
                {role === '0' && <Drawer.Screen name="Сохраненые кастинги" component={SavedCastingsScreen}/>}
                <Drawer.Screen name="Настройки" component={SettingsScreen}/>
                {role === '1' && <Drawer.Screen name="Создать кастинг" component={CreateCasting}/>}
                <Drawer.Screen name="Выйти">
                    {() => <ExitScreen singOut={props.singOut}/>}
                </Drawer.Screen>

                <Drawer.Screen name="CastingScreen" component={ CastingScreen } options={{
                    title: 'Подробнее',
                    drawerItemStyle: {height: 0}
                }}/>
                <Drawer.Screen name="UserResponsesScreen" component={ UserResponsesScreen } options={{
                    title: 'Отклики',
                    drawerItemStyle: {height: 0}
                }}/>
                <Drawer.Screen name="UserProfileScreen" component={ UserProfileScreen } options={{
                    title: 'Профиль',
                    drawerItemStyle: {height: 0}
                }}/>

                <Drawer.Screen name="FillProfileScreen" component={ FillProfileScreen } options={{
                    title: 'Профиль',
                    drawerItemStyle: {height: 0}
                }}/>

                <Drawer.Screen name="FiltersScreen" component={ FiltersScreen } options={{
                    title: 'Фильтры',
                    drawerItemStyle: {height: 0}
                }}/>

            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default SplashScreen;
