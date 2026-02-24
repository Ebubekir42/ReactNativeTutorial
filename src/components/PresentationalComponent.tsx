import { Text, View } from "react-native";

type Props = {
    myState: string,
    updateState: () => void
}

const PresentationalComponent = (props: Props): React.JSX.Element => {

    return (
        <View>
            <Text onPress={props.updateState}>{props.myState}</Text>
        </View>
    );
}

export default PresentationalComponent;