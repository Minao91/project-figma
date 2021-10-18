import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

function InscriptionScreen2({ navigation }) {
    const U = (props) => <Text style={{textDecorationLine: 'underline'}}>{props.children}</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{flex : 1,}}>
            <View style={{height: 65,width: '100%',backgroundColor: 'black',borderRadius: 10,}}>
              <Text style={{color:"white",fontSize:15,textAlign:"center",textTransform:"uppercase",lineHeight: 66.5,fontWeight:'600'}}>SIGN UP</Text>  
            </View>
          </TouchableOpacity>
          <View style={{marginTop: 100,}}>
            <Text style={{color : "black"}}>By signing up, you agree to Photo's <U>Terms of Service</U> and <U>Privacy Policy</U>.</Text>
          </View>
        </View>
      </View>
    );
  }

export default InscriptionScreen2;

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