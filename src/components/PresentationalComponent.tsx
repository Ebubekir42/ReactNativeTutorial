import { StyleSheet, Text, View } from "react-native";

type Props = {
    myState: string,
    updateState: () => void
}

const PresentationalComponent = (props: Props): React.JSX.Element => {

    return (
        <View>
            <Text style={styles.myState} onPress={props.updateState}>{props.myState}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    myState: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default PresentationalComponent;