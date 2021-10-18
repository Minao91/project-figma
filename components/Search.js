import React from 'react';
import { Text, View, TextInput } from 'react-native';

function SearchScreen1({ navigation }) {
    return (
      <View style={{ flex: 1,}}>
        <View style={styles.searchcontainer}>
          <Text style={{fontSize: 55, marginBottom: 30,}}>Search</Text>
          <TextInput
            style={styles.input}
            placeholder="Search all photos"
          />
        </View>
      </View>
    );
  }

export default SearchScreen1;

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
    searchcontainer: {
        width: '100%',
        marginTop: 50,
        padding: 20,
    },
  };