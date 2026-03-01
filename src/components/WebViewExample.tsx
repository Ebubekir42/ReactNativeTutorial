import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

const WebViewExample = (): React.JSX.Element => (
    <View style={styles.container}>
        <WebView
            source={{ uri: 'https://www.google.com/search?q=react+native+tutorial' }}
        />

    </View>
);

export default WebViewExample;

const styles = StyleSheet.create({
    container: {
        height: 350
    }
});