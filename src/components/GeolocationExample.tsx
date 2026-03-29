import React, { useEffect, useState } from "react";
import { Alert, PermissionsAndroid, Platform, StyleSheet, Text, View } from "react-native"
import Geolocation from "react-native-geolocation-service";

const requestLocationPermission = async (): Promise<boolean> => {
    if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
}

const SwitchExample: React.FC = (): React.JSX.Element => {
    const [initialPosition, setInitialPosition] = useState<string>('unknown');
    const [lastPosition, setLastPosition] = useState<string>('unknown');

    useEffect(() => {
        let watchId: number;

        const initLocation = async () => {
            const hasPermission = await requestLocationPermission();

            if (!hasPermission) {
                Alert.alert('İzin gerekli', 'Konum izni verilmedi');
                return;
            }

            Geolocation.getCurrentPosition(
                position => {
                    setInitialPosition(JSON.stringify(position));
                },
                error => {
                    Alert.alert('Hata', error.message);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 10000
                }
            );

            watchId = Geolocation.watchPosition(
                position => {
                    setLastPosition(JSON.stringify(position));
                },
                error => {
                    console.log(error);
                },
                {
                    enableHighAccuracy: true,
                    distanceFilter: 10, // 10 metre değişince tetikler
                    interval: 5000,
                    fastestInterval: 2000
                }
            );
        }

        initLocation();

        return () => {
            if (watchId !== undefined) {
                Geolocation.clearWatch(watchId);
            }
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.boldText}>Initial Position:</Text>
            <Text>{initialPosition}</Text>

            <Text style={styles.boldText}>Current Position:</Text>
            <Text>{lastPosition}</Text>
        </View>
    )
}

export default SwitchExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
    },
    boldText: {
        fontSize: 20,
        color: 'red',
        marginTop: 10,
    },
});