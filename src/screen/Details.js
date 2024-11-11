import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { API_KEY } from './Constants';


const Details = (props) => {
  const { name, image } = props.route.params;
  const defaultBackground = require('../assets/BackGround.jpg'); 

  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setLoading(true);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
    )
      .then(res => {
        if (!res.ok) {
          throw new Error('City not found');  
        }
        return res.json();
      })
      .then(res => {
        setData(res);
        setError(null);  
      })
      .catch(err => {
        setError(err.message);  
      })
      .finally(() => {
        setLoading(false);  
      });
  }, [name]);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={image || defaultBackground}
        style={{ flex: 1 }}>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3916/3916840.png',
            }}
            style={{
              tintColor: 'white',
              height: 30,
              width: 30,
              resizeMode: 'contain',
              marginLeft: 30,
              marginTop: 30,
            }}
          />
        </TouchableOpacity>

        
        {loading ? (
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 50 }}>
            Loading...
          </Text>
        ) : error ? (
          
          <Text style={{ color: 'red', fontSize: 20, textAlign: 'center', marginTop: 50 }}>
            {error}
          </Text>
        ) : data ? (
          
          <View style={{ alignItems: 'center', flex: 1 }}>
            <View style={{ marginTop: 60 }}>
              <Text style={{ fontSize: 33, color: 'white', textAlign: 'center', fontWeight: "700" }}>
                {name}
              </Text>
              <Text style={{ color: 'white', fontSize: 20 }}>
                {data['weather'][0]['main']}
              </Text>
            </View>
            <Text style={{ color: 'white', fontSize: 40, marginTop: 30 }}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>
            <Text style={{ color: 'white', fontSize: 30, marginTop: 50, marginBottom: 30, fontWeight: "500" }}>
              Weather Details
            </Text>

            <View style={{ height: 150, width: '80%', borderWidth: 3, borderColor: 'white', paddingHorizontal: 20, borderRadius: 10, justifyContent: 'center' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 16 }}>Wind</Text>
                <Text style={{ color: 'white', fontSize: 16 }}>{data['wind']['speed']}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 16 }}>Pressure</Text>
                <Text style={{ color: 'white', fontSize: 16 }}>{data['main']['pressure']}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 16 }}>Humidity</Text>
                <Text style={{ color: 'white', fontSize: 16 }}>{data['main']['humidity']} %</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 16 }}>Visibility</Text>
                <Text style={{ color: 'white', fontSize: 16 }}>{data['visibility']}</Text>
              </View>
            </View>
          </View>
        ) : null}
      </ImageBackground>
    </View>
  );
};

export default Details;
