import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"

const ButtonExample = (): React.JSX.Element => {

    const handlePress = () => console.log('Pressed button!');

    return (
        <View style={styles.container}>
            {/* <Button
                onPress={handlePress}
                title='Red button!'
                color='red'
            /> */}
            <TouchableOpacity>
                <Text style={styles.text}>
                    Button
                </Text>
            </TouchableOpacity>
            <TouchableHighlight>
                <Text style={styles.text}>
                    Button
                </Text>
            </TouchableHighlight>
        </View>
    );
}

export default ButtonExample;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        backgroundColor: 'red'
    }
})