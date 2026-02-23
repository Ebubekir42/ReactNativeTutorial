import { useState } from "react";
import { Text, View } from "react-native"


const Home = (): React.JSX.Element => {

    const [myState, setMyState] = useState<string>('Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quit');
    const updateState = () => setMyState('The state is updated')

    return (
        <Text onPress={updateState}>{myState}</Text>
    )
}

export default Home;