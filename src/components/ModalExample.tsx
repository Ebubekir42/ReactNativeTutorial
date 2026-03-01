import { useState } from "react";
import { Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";

const ModalExample = (): React.JSX.Element => {
    const [visible, setVisible] = useState<boolean>(false);
    const toggleModal = (visible: boolean) => { setVisible(visible) };

    return (
        <View style={styles.container}>
            <Modal animationType="fade" transparent={false}
                visible={visible} onRequestClose={() => { console.log('Modal has been closed'); setVisible(!visible) }}
            >
                <View style={styles.modal}>
                    <Text style={styles.text}>Modal is open!</Text>
                    <TouchableHighlight onPress={() => { toggleModal(!visible) }}>
                        <Text style={styles.text}>Close Modal</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
            <TouchableHighlight onPress={() => { toggleModal(true) }}>
                <Text style={styles.text}>Open Modal</Text>
            </TouchableHighlight>
        </View>
    );
}

export default ModalExample;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#ede3f2',
        padding: 100
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7021a',
        padding: 100
    },
    text: {
        color: '#3f2949',
        marginTop: 10
    }
})