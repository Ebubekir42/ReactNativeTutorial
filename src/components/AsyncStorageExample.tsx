import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, TextInput, View } from "react-native";

const AsyncStorageExample: React.FC = (): React.JSX.Element => {
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {
        AsyncStorage.getItem('name').then(value => setName(value));
    }, []);

    const setData = (value: string): void => {
        AsyncStorage.setItem('name', value);
        setName(value);
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} autoCapitalize="none" onChangeText={setData} />
            <Text>{name}</Text>
        </View>
    );
}

export default AsyncStorageExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    textInput: {
        margin: 5,
        height: 100,
        borderWidth: 1,
        backgroundColor: '#7685ed'
    }
});