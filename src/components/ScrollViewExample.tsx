import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type User = {
    name: string,
    id: number
}

const ScrollViewExample = (): React.JSX.Element => {
    const [names, setNames] = useState<User[]>([
        { name: 'Ben', id: 1 },
        { name: 'Susan', id: 2 },
        { name: 'Robert', id: 3 },
        { name: 'Mary', id: 4 },
        { name: 'Daniel', id: 5 },
        { name: 'Laura', id: 6 },
        { name: 'John', id: 7 },
        { name: 'Debra', id: 8 },
        { name: 'Aron', id: 9 },
        { name: 'Ann', id: 10 },
        { name: 'Steve', id: 11 },
        { name: 'Olivia', id: 12 }
    ]);

    return (
        <View>
            <ScrollView>
                {
                    names.map(item => (
                        <View key={item.id} style={styles.item}>
                            <Text>{item.name}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 4,
        marginVertical: 20,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
})

export default ScrollViewExample;