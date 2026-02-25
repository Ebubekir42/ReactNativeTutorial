import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

type LoginModel = {
    email: string,
    password: string
}

const Inputs = (): React.JSX.Element => {
    const [login, setLogin] = useState<LoginModel>({ email: '', password: '' });

    const handleEmail = (text: string) => { setLogin(prev => ({ ...prev, email: text })) }
    const handlePassword = (text: string) => { setLogin(prev => ({ ...prev, password: text })) }
    const onLogin = () => { console.log(`Email: ${login.email} Password: ${login.password}`) }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                placeholder='Email'
                placeholderTextColor='#9a73ef'
                autoCapitalize='none'
                onChangeText={handleEmail}
            />
            <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                placeholder='Password'
                placeholderTextColor='#9a73ef'
                autoCapitalize='none'
                onChangeText={handlePassword}
            />
            <TouchableOpacity
                style={styles.submitButton}
                onPress={onLogin}
            >
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})

export default Inputs;