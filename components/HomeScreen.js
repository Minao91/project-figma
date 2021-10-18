import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
    let Image_Http_URL ={ uri: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'};
    return (
      <View style={{ flex: 1 }}>
        <Image source={Image_Http_URL} style={styles.homewallpaper}/>
        <View style={styles.homefooter}>
          <View style={{flex:1, flexDirection:"row",}}> 
              <TouchableOpacity onPress={() => navigation.navigate('Connexion')} style={{flex : 1,}}>
                <View style={{flex : 1, borderWidth: 2, borderColor: "black", borderRadius: 5,}}>
                  <Text style={{textAlign: 'center', fontWeight: "bold", marginTop : 20,}}>LOG IN</Text>
                </View>
              </TouchableOpacity>
              <View style={{flex : 0.1, backgroundColor:""}}/>
              <TouchableOpacity onPress={() => navigation.navigate('Inscription1')} style={{flex : 1,}}>
                <View style={{flex : 1,  borderWidth: 2, backgroundColor: "black", borderRadius: 5,}} onPress={() => navigation.navigate('Details')}>
                    <Text style={{color: '#fff', textAlign: 'center', fontWeight: "bold", marginTop : 20,}}>REGISTER</Text>
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

export default HomeScreen;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 homewallpaper: {
    width: '100%',
    height: 785,
  },
  homefooter: {
    width: '100%',
    height: 100,
    padding: 20,
  },
};
