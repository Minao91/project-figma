import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

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

export default ConnexionScreen;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
};