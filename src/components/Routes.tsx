import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types/Navigation"
import Home2 from "./Home2";
import About from "./About";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = (): React.JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home2} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;