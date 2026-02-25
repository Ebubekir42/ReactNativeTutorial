import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

type User = {
    id: number;
    name: string;
}

const List = (): React.JSX.Element => {

    const [state, setState] = useState<User[]>([
        {
            id: 0,
            name: 'Ben',
        },
        {
            id: 1,
            name: 'Susan',
        },
        {
            id: 2,
            name: 'Robert',
        },
        {
            id: 3,
            name: 'Mary',
        }
    ]);

    const alertItemName = (item: User) => { console.log(item.name) }

    return (
        <View>
            {
                state.map((value, index) => (
                    <TouchableOpacity
                        key={value.id}
                        style={styles.container}
                        onPress={() => alertItemName(value)}
                    >
                        <Text style={styles.text}>
                            {value.name}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center'
    },
    text: {
        color: '#4f603c'
    }
});

export default List;