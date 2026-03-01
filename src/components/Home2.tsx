import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../types/Navigation";

type HomeProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

const Home2 = ({ navigation }: HomeProps): React.JSX.Element => {

    const goToAbout = (): void => {
        navigation.navigate('About');
    }

    return (
        <TouchableOpacity style={{ margin: 128, backgroundColor: '#00f3' }} onPress={goToAbout}>
            <Text>This is HOME!</Text>
        </TouchableOpacity>
    );
}

export default Home2;