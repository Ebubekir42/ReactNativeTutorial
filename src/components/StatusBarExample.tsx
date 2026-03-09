import { StatusBar } from "react-native";

const StatusBarExample = (): React.JSX.Element => {

    return (
        <StatusBar barStyle={"dark-content"} hidden={false} backgroundColor={"#00bcd4"} translucent={true} />
    );
}

export default StatusBarExample;