import { useEffect, useState } from "react";
import { Text, View } from "react-native";

type ResponseModel = {
    userId: number,
    id: number,
    title: string,
    body: string
}

const HttpExample = (): React.JSX.Element => {

    const [data, setData] = useState<ResponseModel>();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET'
        })
            .then(response => response.json() as Promise<ResponseModel>)
            .then(json => {
                console.log(json);
                setData(json);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <View>
            <Text>{data?.body}</Text>
        </View>
    );
}

export default HttpExample;