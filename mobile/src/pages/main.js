import React, {useEffect, useState} from 'react';
import { StyleSheet} from 'react-native'
import { View, Image, Text } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import MapView, { Marker, Callout } from 'react-native-maps';

function Main(){
    const [currentRegion, setCurrentRegion] = useState(null);
    useEffect(()=> {
        async function loadInitialPosition(){
            const { granted } = await requestPermissionsAsync();

            if(granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });           
            
                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })

            }

        }

        loadInitialPosition();

    },[]);

    if(!currentRegion){
        return null;
    }
    return(
        <MapView initialRegion={currentRegion} style = {styles.map}>

            <Marker coordinate = {{ latitude: -15.8039715, longitude: -47.9317727}}>
                <Image style = {styles.avatar} source = {{ uri: 'https://avatars1.githubusercontent.com/u/31075972?s=400&u=9b30a7cec9bf67b8e6e65eda3e1d721c0ac20714&v=4' }}/> 
                <Callout>
                <View style = {styles.callout}>
                    <Text style = {styles.devName}>Joao Marcelo Nunes</Text>
                    <Text style = {styles.devBio} >Computer Engineering Student at University of Brasília</Text>
                    <Text style = {styles.devTechs}>C, React, Python</Text>
                </View>
                </Callout>
            
            </Marker>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex:1
    },

    avatar:{
        width: 54,
        height: 54, 
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'

    },

    callout:{
        width: 260,
    },
    
    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    
    devBio:{
        color: '#666',
        marginTop: 5,
    },

    devTechs:{
        marginTop: 5,
    },


})

export default Main;