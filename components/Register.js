import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

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

export default InscriptionScreen1;

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
  };