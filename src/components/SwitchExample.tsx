import { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";

const SwitchExample = (): React.JSX.Element => {
    const [switchValue, setSwitchValue] = useState<boolean>(false);
    const toggleSwitch = (value: boolean) => {
        setSwitchValue(value);
        console.log(value);
    }
    return (
        <View style={styles.container}>
            <Switch onValueChange={toggleSwitch} value={switchValue} />
        </View>
    );
}

export default SwitchExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    }
})