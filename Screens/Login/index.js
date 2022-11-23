
import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Login() {
    const navigation = useNavigation()
    var array = [{
        "Name": "vineeth",
        "Given_Name": "@ Zeal Coders",
        "call_time": "6:12 pm",
    }, {
        "Name": "vivek",
        "Given_Name": "@ Zeal Coders",
        "call_time": "6:12 pm",
    }, {
        "Name": "abhijith",
        "Given_Name": "@ Zeal Coders",
        "call_time": "6:12 pm",
    }, {
        "Name": "suresh",
        "Given_Name": "@ Zeal Coders",
        "call_time": "6:12 pm",
    }, {
        "Name": "vineeth",
        "Given_Name": "@ Zeal Coders",
        "call_time": "6:12 pm",
    }, {
        "Name": "vivek",
        "Given_Name": "@ Zeal Coders",
        "call_time": "6:12 pm",
    }, {
        "Name": "abhijith",
        "Given_Name": "@ Zeal Coders",
        "call_time": "6:12 pm",
    }, {
        "Name": "suresh",
        "Given_Name": "@ Zeal Coders",
        "call_time": "6:12 pm",
    },
    ];

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 }}>CONTACTS</Text>
            <FlatList

                data={array}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 5,
                                alignItems: 'center',
                                marginLeft: 35,
                                marginRight: 15,
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: 'cyan',
                                borderRadius: 10,
                                height: 80,
                            }}>
                            <TouchableOpacity onPress={() => {

                                navigation.navigate("SignUp")

                            }}>

                                <Image
                                    style={{ marginLeft: 5, height: 30, width: 30 }}
                                    source={{
                                        uri: 'https://fsymbols.com/images/phone-icon.png',
                                    }}></Image>
                                <View>
                                    <Text style={{ marginLeft: 20, fontWeight: 'bold', }}>{item.Name}</Text>

                                    <Text style={{ marginLeft: 20, fontSize: 10 }}>{item.Given_Name}</Text>
                                </View>
                                <Text style={{ marginLeft: 80 }}>{item.call_time}</Text>
                            </TouchableOpacity>

                        </View>
                    );
                }}></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
