import { useState } from "react";
import { StyleSheet, View } from "react-native"
import { Picker } from "@react-native-picker/picker";
import { Text } from "react-native-gesture-handler";

const PickerExample = (): React.JSX.Element => {

    const [user, setUser] = useState<string>('');
    const updateUser = (u: string) => { setUser(u) }

    return (
        <View style={{ marginTop: 20 }}>
            <Picker selectedValue={user} onValueChange={updateUser}>
                <Picker.Item label="Steve" value={"steve"} />
                <Picker.Item label="Ellen" value={"ellen"} />
                <Picker.Item label="Maria" value={"maria"} />
            </Picker>
            <Text style={styles.text}>{user}</Text>
        </View>
    );
}

export default PickerExample;

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    }
})