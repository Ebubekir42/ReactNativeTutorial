import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const ActivityIndicatorExample = (): React.JSX.Element => {
    const [animating, setAnimating] = useState<boolean>(true);

    const closeActivityIndicator = () => {
        setTimeout(() => setAnimating(false), 5000);
    }

    useEffect(() => {
        closeActivityIndicator();
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator
                animating={animating}
                color={'#bc2278'}
                size='large'
                style={styles.activityIndicator}
            />
        </View>
    );
}

export default ActivityIndicatorExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
})