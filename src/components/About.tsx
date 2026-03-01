import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types/Navigation"
import React from "react";
import { Text, TouchableOpacity } from "react-native";

type AboutProp = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'About'>;
}

const About = ({ navigation }: AboutProp): React.JSX.Element => {

    const goToHome = () => {
        navigation.navigate('Home');
    }

    return (
        <TouchableOpacity style={{ margin: 128, backgroundColor: '#00f3' }} onPress={goToHome}>
            <Text>This is About</Text>
        </TouchableOpacity>
    );
}

export default About;