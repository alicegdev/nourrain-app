import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import axios from 'axios';

function UserPageScreen(props) {
// function UserPageScreen({route}) {
    const datas = [
        {
            'name': 'don',
            'amout': '5'
        },
        {
            'name': 'alice',
            'amout': '20'
        },
        {
            'name': 'matthieu',
            'amout': '50'
        }
    ]
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
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
            {datas.map((item, index) => (
                <Text key={index}>{item.name}</Text>,
                <Text key={index}>{item.amount}</Text>
            ))}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})

export default UserPageScreen;