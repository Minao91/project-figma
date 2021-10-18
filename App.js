import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Alert, Modal, Pressable, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
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

function DiscoverScreen({ navigation }) {
  const imagediscover = { uri : "https://www.teahub.io/photos/full/0-3033_amoled-dark-wallpapers-hd-phone-dark-wallpapers-for.jpg" };
  const image = { uri: "https://www.teahub.io/photos/full/0-3033_amoled-dark-wallpapers-hd-phone-dark-wallpapers-for.jpg" };
  const imageprofil = { uri : "https://images2.alphacoders.com/111/thumb-350-1116569.jpg" };

  const image1 = { uri : "https://images8.alphacoders.com/998/998474.jpg" };
  const image2 = { uri : "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" };
  const image3 = { uri : "https://www.wallpapertip.com/wmimgs/0-6941_android-wallpaper-hd-marshmello-with-high-resolution-android.jpg" };
  const image4 = { uri : "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/1ecfc7c3-8b2b-43d8-94f7-947c1bdb4a95/2623413422/masa-cool-wallpapers-wallpaper-hd-background-screenshot.jpg" };
  const image5 = { uri : "https://wallpaperaccess.com/full/51364.jpg" };
  const image6 = { uri : "https://img2.apksum.com/93/com.mda.black.wallpapers.hd.dark.background/6.0/icon.png" };
  const image7 = { uri : "https://mobcup.b-cdn.net/images/wt/6a0471ee6fe9c9b30394b08bd0a749d6.jpg" };
  const image8 = { uri : "https://i.pinimg.com/originals/28/ab/71/28ab71de15b11c195dfb90efd6f1ac11.jpg" };

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      <View style={{ flex: 1,}}>
        <View style={styles.discoverheader}>
          <Text style={{fontSize: 55, marginBottom: 30,}}>Discover</Text>
        </View>
        <View style={styles.discovercontainer}>
          <Text style={{fontWeight: 'bold', textTransform: 'uppercase'}}>what's new today</Text>
          <Pressable
                onPress={() => setModalVisible(!modalVisible)}
              >
          <Image source={imagediscover} style={{width: "100%", height: 343, backgroundColor: 'red', marginTop: 30, marginBottom: -15,}}></Image>
          </Pressable>
          <View>
            <Image source={imageprofil} style={{width: 50, height: 50, borderRadius: 50, backgroundColor: 'red', marginTop: 30,}}></Image>
            <Text style={{width: 'auto', position: 'absolute', top : 35, left : 65, fontWeight: "bold",}}>Antoine Geoffroy</Text>
            <Text style={{width: 'auto', color: 'rgba(0, 0, 0, 0.8)', position: 'absolute', top : 55, left : 65,}}>@Minao91</Text>
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <Image source={imageprofil} style={{width: 50, height: 50, borderRadius: 50, position: 'absolute', top : 40, left : 20, backgroundColor: 'red', marginTop: 30,}}></Image>
                    <Text style={{width: 'auto', color: 'white', position: 'absolute', top : 75, left : 85, fontWeight: "bold",}}>Antoine Geoffroy</Text>
                    <Text style={{width: 'auto', color: 'rgba(255, 255, 255, 0.8)', position: 'absolute', top : 95, left : 85,}}>@Minao91</Text>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={{width: 'auto', color: 'white', position: 'absolute', top : -375, right : 20, fontSize : 25}}>X</Text>
                    </Pressable>
                  </ImageBackground>
                </View>
              </View>
            </Modal>
          </View>
          <Text style={{fontWeight: 'bold', textTransform: 'uppercase', marginTop: 30, marginBottom: 30}}>BROWSE ALL</Text>
          <ScrollView>
            <View style={{flex: 1, flexDirection:"row",width: '100%',}}>
              <View style={{flex : 1, width: '100%', height: 220, backgroundColor: 'red'}}>
                <Image source={image1} style={{width: '100%', height: '100%',}}></Image>
              </View>
              <View style={{flex : 0.1, backgroundColor:""}}/>
              <View style={{flex : 1, width: '100%', height: 310, backgroundColor: 'red'}}>
                <Image source={image2} style={{width: '100%', height: '100%',}}></Image>
              </View>
            </View>
            <View style={{flex: 1, flexDirection:"row",width: '100%',}}>
              <View style={{flex : 1, width: '100%', height: 310, marginTop: -70, backgroundColor: 'red'}}>
                <Image source={image3} style={{width: '100%', height: '100%',}}></Image>
              </View>
              <View style={{flex : 0.1, backgroundColor:""}}/>
              <View style={{flex : 1, width: '100%', height: 310, marginTop: 20, backgroundColor: 'red'}}>
                <Image source={image4} style={{width: '100%', height: '100%',}}></Image>
              </View>
            </View>
            <View style={{flex: 1, flexDirection:"row",width: '100%',}}>
              <View style={{flex : 1, width: '100%', height: 310, marginTop: -70, backgroundColor: 'red'}}>
                <Image source={image5} style={{width: '100%', height: '100%',}}></Image>
              </View>
              <View style={{flex : 0.1, backgroundColor:""}}/>
              <View style={{flex : 1, width: '100%', height: 310, marginTop: 20, backgroundColor: 'red'}}>
                <Image source={image6} style={{width: '100%', height: '100%',}}></Image>
              </View>
            </View>
            <View style={{flex: 1, flexDirection:"row",width: '100%',}}>
              <View style={{flex : 1, width: '100%', height: 310, marginTop: -70, backgroundColor: 'red'}}>
                <Image source={image7} style={{width: '100%', height: '100%',}}></Image>
              </View>
              <View style={{flex : 0.1, backgroundColor:""}}/>
              <View style={{flex : 1, width: '100%', height: 220, marginTop: 20, backgroundColor: 'red'}}>
                <Image source={image8} style={{width: '100%', height: '100%',}}></Image>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{flex: 1, flexDirection:"row", height: 90, width: '100%', marginTop: 25, backgroundColor: 'white', borderTopColor: 'rgba(0, 0, 0, 0.3)', borderTopWidth: 1,}}>
          <TouchableOpacity onPress={() => navigation.navigate('Discover')} style={{flex : 1,}}>
            <View style={{flex : 1, width: '100%'}}>
              <Text style={{textAlign: 'center', marginTop: 30,}}>🏠</Text>
            </View>
          </TouchableOpacity>
          <View style={{flex : 0.1, backgroundColor:""}}/>
          <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{flex : 1,}}>
            <View style={{flex : 1, width: '100%'}}>
              <Text style={{textAlign: 'center', marginTop: 30,}}>🔎</Text>
            </View>
          </TouchableOpacity>
          <View style={{flex : 0.5, backgroundColor:""}}/>
          <TouchableOpacity onPress={() => navigation.navigate('Discover')} style={{flex : 1,}}>
            <View style={{flex : 2, width: '100%',}}>
              <LinearGradient
                // Button Linear Gradient
                colors={['#FF00D6', '#FF4D00']}
                style={{marginTop: 20, borderRadius: 20, height: 40,}}>
                <Text style={{textAlign: 'center', marginTop: 0, fontSize: 30, color: 'white'}}>+</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
          <View style={{flex : 0.5, backgroundColor:""}}/>
          <TouchableOpacity onPress={() => navigation.navigate('Discover')} style={{flex : 1,}}>
            <View style={{flex : 1, width: '100%'}}>
              <Text style={{textAlign: 'center', marginTop: 30,}}>💬</Text>
            </View>
          </TouchableOpacity>
          <View style={{flex : 0.1, backgroundColor:""}}/>
          <TouchableOpacity onPress={() => navigation.navigate('Discover')} style={{flex : 1,}}>
            <View style={{flex : 1, width: '100%'}}>
              <Text style={{textAlign: 'center', marginTop: 30,}}>👤</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

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
        <Stack.Screen name="Search" component={SearchScreen1} />
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
  discoverheader: {
    width: '100%',
    marginTop: 50,
    marginBottom: -20,
    padding: 20,
  },
  discovercontainer: {
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
  },
  searchcontainer: {
    width: '100%',
    marginTop: 50,
    padding: 20,
  },
  centeredView: {
    width: '100%',
    flex: 1,
    backgroundColor: 'red'
  },
  modalView: {
    width: '100%',
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: "center"
  },
});
