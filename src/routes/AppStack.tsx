import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../modules/Home/screens/Home";

export function AppStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    );
}