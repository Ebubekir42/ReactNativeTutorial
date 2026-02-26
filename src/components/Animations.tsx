import { Animated, StyleSheet, TouchableOpacity } from "react-native"

type AnimatedStyle = {
    width: Animated.Value,
    height: Animated.Value
}

const Animations = (): React.JSX.Element => {

    const animatedWidth: Animated.Value = new Animated.Value(50);
    const animatedHeight: Animated.Value = new Animated.Value(100);

    const animatedStyle: AnimatedStyle = { width: animatedWidth, height: animatedHeight };

    const animatedBox = (): void => {
        Animated.timing(animatedWidth, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: false
        }).start();
        Animated.timing(animatedHeight, {
            toValue: 500,
            duration: 500,
            useNativeDriver: false
        }).start();
    }

    return (
        <TouchableOpacity style={styles.container} onPress={animatedBox}>
            <Animated.View style={[styles.box, animatedStyle]} />
        </TouchableOpacity>
    );
}

export default Animations;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        backgroundColor: 'blue',
        width: 50,
        height: 100
    }
})