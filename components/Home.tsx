import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";

const B1 = (props: any) => <View><Text>{props.route.name}</Text></View>

const Drawer = createBottomTabNavigator();

const Home = ({ route, navigation, ...props }: any) => {
    
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false}}>
            {Array.from({length: 4}).map((_, i) => (
                <Drawer.Screen key={`home-bot-${i}`} component={B1} name={`Screen-${i}`}></Drawer.Screen>)
            )}
        </Drawer.Navigator>
    )
};

export default Home;