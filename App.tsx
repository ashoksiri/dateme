import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import Home from './components/Home';

import { Button } from 'react-native-paper';
import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { Appbar, Provider, MD3LightTheme } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { theme } from './core';
import { LoginScreen, RegisterScreen, ResetPasswordScreen, StartScreen } from './screens';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Button onPress={() => navigation.openDrawer()} mode='contained'>open Drawer</Button>
    // </View>
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          detachPreviousScreen: !navigation.isFocused(),
          header: ({ navigation, route, options, back }): React.ReactNode => {
            const title = getHeaderTitle(options, route.name);
            
            return (
              <Appbar.Header elevated>
                {back 
                  ? <Appbar.Action 
                    icon='chevron-left'
                    size={32}
                    onPress={() => navigation.goBack()} 
                  />
                  : (navigation as any).openDrawer 
                    ? <Appbar.Action
                      icon="menu"
                      isLeading
                      onPress={() =>
                        (
                          navigation as any as DrawerNavigationProp<{}>
                        ).openDrawer()
                      }
                    />
                    : null
                }
                <Appbar.Content title={title} />
                <Appbar.Action
                      icon="menu"
                      isLeading
                      onPress={() =>
                        (
                          navigation as any
                        ).getParent().getParent().openDrawer()
                      }
                    />
              </Appbar.Header>
            );
          },
        };
      }}
    >
      <Stack.Screen
        name="ExampleList"
        component={Home}
        options={{ title: 'Examples' }}
      />

      {/* {(Object.keys(examples) as Array<keyof typeof examples>).map(id => {
        return (
          <Stack.Screen
            key={id}
            name={id}
            component={examples[id]}
            options={{
              title: examples[id].title,
              headerShown: id !== 'themingWithReactNavigation',
            }}
          />
        );
      })} */}
    </Stack.Navigator>
  );
}

const LeftDrawer = createDrawerNavigator();

const LeftDrawerScreen = () => {
  return (
    <LeftDrawer.Navigator screenOptions={{ drawerPosition: 'left', headerShown: false }}>
      <LeftDrawer.Screen name="Home" component={HomeScreen} />
    </LeftDrawer.Navigator>
  );
};

const RightDrawer = createDrawerNavigator();

// const LoginScreen = () => <View style={styles.container}><Text>Login Screen</Text></View>

const RightDrawerScreen = () => {
  return (
    <RightDrawer.Navigator screenOptions={{ drawerPosition: 'right', headerShown: false }}>
      <RightDrawer.Screen name="StartScreen" component={StartScreen} />
      <RightDrawer.Screen name="LoginScreen" component={LoginScreen} />
      <RightDrawer.Screen name="RegisterScreen" component={RegisterScreen} />
      <RightDrawer.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <RightDrawer.Screen name="Home" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
};



export default function App() {


  return (
    <>
      <Provider theme={theme}>
        <StatusBar style='auto' />
        <NavigationContainer>
          <RightDrawerScreen />
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
