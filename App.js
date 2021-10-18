import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

function ConnexionScreen({ navigation }) {
  return (
    <View style={{ flex: 1,}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.connexionheader}>
          <Text style={{fontSize: 25,}}>⤶</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.connexioncontainer}>
        <Text style={{fontSize: 55, marginBottom: 30,}}>Log in</Text>
        <TextInput
          style={styles.input}
          placeholder="Adresse mail"
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Discover')} style={{flex : 1,}}>
          <View style={{height: 65,width: '100%',backgroundColor: 'black',borderRadius: 10,}}>
            <Text style={{color:"white",fontSize:15,textAlign:"center",textTransform:"uppercase",lineHeight: 66.5,fontWeight:'600'}}>se connecter</Text>  
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function InscriptionScreen1({ navigation }) {
  return (
    <View style={{ flex: 1,}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.inscriptionheader}>
          <Text style={{fontSize: 25,}}>⤶</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.inscriptioncontainer}>
        <Text style={{fontSize: 55, marginBottom: 30,}}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Adresse mail"
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Inscription2')} style={{flex : 1,}}>
          <View style={{height: 65,width: '100%',backgroundColor: 'black',borderRadius: 10,}}>
            <Text style={{color:"white",fontSize:15,textAlign:"center",textTransform:"uppercase",lineHeight: 66.5,fontWeight:'600'}}>NEXT</Text>  
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function InscriptionScreen2({ navigation }) {
  return (
    <View style={{ flex: 1,}}>
      <TouchableOpacity onPress={() => navigation.navigate('Inscription1')}>
        <View style={styles.inscriptionheader}>
          <Text style={{fontSize: 25,}}>⤶</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.inscriptioncontainer}>
        <Text style={{fontSize: 55, marginBottom: 30,}}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Pseudo"
        />
        <TouchableOpacity onPress={() => navigation.navigate('Discover')} style={{flex : 1,}}>
          <View style={{height: 65,width: '100%',backgroundColor: 'black',borderRadius: 10,}}>
            <Text style={{color:"white",fontSize:15,textAlign:"center",textTransform:"uppercase",lineHeight: 66.5,fontWeight:'600'}}>SIGN UP</Text>  
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DiscoverScreen({ navigation }) {
  return (
    <View style={{ flex: 1,}}>
      <Text>test</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Connexion" component={ConnexionScreen} />
        <Stack.Screen name="Inscription1" component={InscriptionScreen1} />
        <Stack.Screen name="Inscription2" component={InscriptionScreen2} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
var styles = StyleSheet.create({
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
  connexionheader: {
    width: '100%',
    marginTop: 50,
    marginBottom: -20,
    padding: 20,
  },
  connexioncontainer: {
    width: '100%',
    padding: 20,
  },
  input:{
    height: 50,
    marginBottom: 20,
    width: '100%',
    borderWidth: 3,
    padding: 15,
    borderColor: "black",
  },
  inscriptionheader: {
    width: '100%',
    marginTop: 50,
    marginBottom: -20,
    padding: 20,
  },
  inscriptioncontainer: {
    width: '100%',
    padding: 20,
  },
});
