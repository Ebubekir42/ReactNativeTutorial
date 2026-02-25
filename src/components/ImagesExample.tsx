import { Image } from "react-native";


const ImagesExample = (): React.JSX.Element => {

    return (
        // <Image source={require('../components/images/code.jpg')} />
        <Image source={{ uri: 'https://www.w3schools.com/images/w3schools_green.jpg' }}
            style={{ width: 200, height: 300 }}
        />
    );
}

export default ImagesExample;