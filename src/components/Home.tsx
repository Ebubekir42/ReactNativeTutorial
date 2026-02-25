import { useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import Inputs from "./Inputs";
// import PresentationalComponent from "./PresentationalComponent";
// import List from "./List";


const Home = (): React.JSX.Element => {

    const [myState, setMyState] = useState<string>('Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quit');
    const updateState = () => setMyState('The state is updated')

    return (
        // <Text onPress={updateState}>{myState}</Text>
        // <View>
        //     <PresentationalComponent myState={myState} updateState={updateState} />
        // </View>
        // <View style={styles.container}>
        //     <View style={styles.redbox} />
        //     <View style={styles.bluebox} />
        //     <View style={styles.blackbox} />
        // </View>
        // <List />
        <Inputs />
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: 'grey',
        height: 600
    },
    redbox: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    bluebox: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    },
    blackbox: {
        width: 100,
        height: 100,
        backgroundColor: 'black'
    }
});

export default Home;