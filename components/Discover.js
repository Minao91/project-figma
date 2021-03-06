import React, { useState } from 'react';
import { Text, View, ImageBackground, ScrollView, Alert, Modal, Pressable, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
                <Text style={{textAlign: 'center', marginTop: 30,}}>????</Text>
              </View>
            </TouchableOpacity>
            <View style={{flex : 0.1, backgroundColor:""}}/>
            <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{flex : 1,}}>
              <View style={{flex : 1, width: '100%'}}>
                <Text style={{textAlign: 'center', marginTop: 30,}}>????</Text>
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
                <Text style={{textAlign: 'center', marginTop: 30,}}>????</Text>
              </View>
            </TouchableOpacity>
            <View style={{flex : 0.1, backgroundColor:""}}/>
            <TouchableOpacity onPress={() => navigation.navigate('Discover')} style={{flex : 1,}}>
              <View style={{flex : 1, width: '100%'}}>
                <Text style={{textAlign: 'center', marginTop: 30,}}>????</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

export default DiscoverScreen;

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
  };