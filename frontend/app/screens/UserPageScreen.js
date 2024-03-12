import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import axios from 'axios';

function UserPageScreen({ route }) {
    // pr l'instant ca rend la page pour le user avec l'id: 2
    const userId = route.params?.userId || '2';
    let initialDatas = [
        {   
            'id': '1',
            'name': 'don',
            'amount': 5
        },
        {
            'id': '2',
            'name': 'alice',
            'amount': 20
        },
        {
            'id': '3',
            'name': 'matthieu',
            'amount': 50
        }
    ];
    const [datas, setDatas] = useState(initialDatas);

    const user = datas.find((item) => item.id === userId);
    const sortedDatas = datas.sort((a, b) => b.amount - a.amount);

    const addMoney = (userId) => {
        const updatedDatas = datas.map(item => {
            if(item.id === userId) {
                return { ...item, amount: item.amount + 5 };
            }
            return item;
        });

        setDatas(updatedDatas);
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
        >
            <View style={styles.container}>
                {user ? (
                    <View>
                        <Text>{user.name},</Text>
                        <Text>Vous avez {user.amount}€ dans la tirelire</Text>

                        <TouchableOpacity 
                            style={styles.oinkButton}
                            onPress={() => addMoney(userId)}
                            >
                            <Text style={styles.buttonText}>Oink Oink 🐷</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <Text>User not found</Text>
                )}
            </View>
            <View style={styles.container}>
                <Text style={styles.historique}>Les plus gros scores</Text>
                {sortedDatas.map((item) => (
                    <View key={item.id}>
                        <Text style={styles.historiqueList}>{item.name} a {item.amount}€ dans la tirelire</Text>
                    </View>
                ))}
            </View>
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#F3F0E8',
    },
    oinkButton: {
        padding: 20,
        borderRadius: 5,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      historique: {
        backgroundColor: 'grey',
        width: 500,
        textAlign: 'center',
        color: 'white',
        margin: 10,
      },
      historiqueList: {
        padding: 12,
      }
})

export default UserPageScreen;