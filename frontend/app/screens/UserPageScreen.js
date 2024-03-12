import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import axios from 'axios';

function UserPageScreen({ route }) {
    // pr l'instant ca rend la page pour le user avec l'id: 2
    const userId = route.params?.userId || '2';
    const datas = [
        {   
            'id': '1',
            'name': 'don',
            'amount': '5'
        },
        {
            'id': '2',
            'name': 'alice',
            'amount': '20'
        },
        {
            'id': '3',
            'name': 'matthieu',
            'amount': '50'
        }
    ];

    const user = datas.find((item) => item.id === userId);

    const addMoney = () => {
        // appel api update
      };

    //   useEffect(() => {
    //     fetch('localhost:8000')
    //       .then((response) => response.json())
    //       .then((json) => {
    //         setDonnees(json);
    //         setLoading(false);
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //         setLoading(false);
    //       });
    //   }, []);
    
    //   if (loading) {
    //     return <ActivityIndicator />;
    //   }

    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/icon.png')}
        >
            <View style={styles.container}>
                {user ? (
                    <View>
                        <Text>{user.name}</Text>
                        <Text>Vous avez {user.amount}€ dans la tirelire</Text>
                    </View>
                ) : (
                    <Text>User not found</Text>
                )}
            </View>

            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={addMoney}
                    >
                    <Text style={styles.buttonText}>Oink Oink</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems: 'center',
    },
    button1: {
        padding: 20,
        // margin: 10,
        borderRadius: 5,
        backgroundColor: 'pink',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})

export default UserPageScreen;