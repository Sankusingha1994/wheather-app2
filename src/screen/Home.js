import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, StatusBar, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { Icons } from '../Themes/Themes';
import LinearGradient from 'react-native-linear-gradient';

const Home = (props) => {
  const [city, setCity] = useState('');


  const cities = [
    {
      name: 'Kolkata',
      image: require('../assets/kolkata.jpg'),
    },
    {
      name: 'New Delhi',
      image: require('../assets/Delhi.jpg'),
    },
    {
      name: 'Jaypur',
      image: require('../assets/Jaypur.jpg'),
    },
    {
      name: 'Bangalore',
      image: require('../assets/Bangalore.jpg'),
    },
    {
      name: 'Mumbai',
      image: require('../assets/Mumbai.jpg'),
    },
    {
      name: 'Kerala',
      image: require('../assets/Kerala.jpg'),
    },
  ];


  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <ImageBackground
        source={Icons.back}
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            width: '100%',
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 28,
              color: 'yellow',
              fontWeight: '700',
              textAlign: 'center',
            }}>
            WEATHER
          </Text>
          <Text
            style={{
              fontSize: 28,
              color: 'black',
              fontWeight: '100',
              textAlign: 'center',
              marginLeft: 10,
              fontWeight:"400"
            }}>
            FORCASTS
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            textAlign: 'center',
            fontWeight: '500',
          }}>
          Search by the name of the city
        </Text>
        <View
          style={{
            backgroundColor: 'rgba(171, 178, 185, 0.4)',
            height: 50,
            width: '85%',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'skyblue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Enter a city"
            placeholderTextColor={'rgba(171, 178, 185, 0.7)'}
            value={city}
            onChangeText={e => {
              setCity(e);
            }}
            style={{
              height: '90%',
              width: '90%',
              color: 'white',
              fontSize: 17,
            }}></TextInput>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Details', {name: city})}
          style={{
            height: 40,
            width: 120,
            backgroundColor: 'skyblue',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
            justifyContent: 'center',
          }}>
          <LinearGradient
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 5,
              justifyContent: 'center',
            }}
            colors={['black', 'skyblue']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '500',
                color: 'white',
              }}>
              Search
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            fontWeight: '500',
            marginLeft: 30,
            marginTop: 30,
            marginBottom: 20,
          }}>
          Popular Locations
        </Text>
        <FlatList
          data={cities}
          numColumns={2}
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={item => {
            return (
                <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Details', {
                    name: item.item.name,
                    image: item.item.image || Icons.back, 
                  });
                }}
                style={{
                  height: 150,
                  width: 150,
                  marginVertical: 10,
                  marginHorizontal: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                }}>
                <ImageBackground
                  source={item.item.image || Icons.back}  
                  imageStyle={{
                    borderRadius: 10,
                  }}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      height: 40,
                      width: '100%',
                      backgroundColor: 'rgba(0,0,0,0.4)',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize:20
                      }}>
                      {item.item.name}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
      </ImageBackground>
    </View>
  );
};



export default Home;
