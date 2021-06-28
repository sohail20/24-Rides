import React, { useEffect, useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ToastAndroid
} from "react-native";
import * as  Location from "expo-location"
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import StarRating from "../components/StarRating";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.9;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;


var rad = function(x) {
  return x * Math.PI / 180;
};

var getDistance = function(p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.latitude - p1.latitude);
  var dLong = rad(p2.longitude - p1.longitude);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.latitude)) * Math.cos(rad(p2.latitude)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return Math.round(d/1000); // returns the distance in KM
};

const DirectionMap = ({navigation,route}) => {
    const direction = route.params;
    const [CurrentLocation, setCurrentLocation] = useState({});
    const [Loading, setLoading] = useState(true);
    const [Region, setRegion] = useState({});


    const marker = {
        holder:"user",
        coordinate: {
          latitude: 25.397456519230683,
          longitude: 68.33357032796224,
        },
        title: "Driver 1",
        description: "I have expreince of 5+ years",
        image: {uri:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1567052518/assets/91/f8d08e-84b1-417f-bba6-9c8e3eaf2220/original/APAC-driver-uber-comfort-driver2.jpg"},
        rating: 4,
        reviews: 99,
      }

    useEffect(()=>{
        (async ()=>{
            let location = await Location.getCurrentPositionAsync({});
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.04864195044303443,
                longitudeDelta: 0.040142817690068,
              })

            setLoading(false)
        })();
    },[])

    const origin = {
      latitude: Region.latitude,
      longitude: Region.longitude,
    }

    const destination = {
        latitude: 25.4048997,
        longitude: 68.34521333333333,
      }
    return Loading?<Text>Loading...</Text>:(
        <View style={styles.container}>
            <MapView
            initialRegion={Region}
            style={styles.container}
            >

              <MapViewDirections
                  origin={origin}
                  destination={destination}
                  apikey={"AIzaSyDJSzGFM725WqKtiZe345r1FafqGyL-p9Y"}
                  strokeWidth={3}
                  strokeColor="hotpink"
                  optimizeWaypoints={true}
              />

            </MapView>

            <View style={styles.topBox}>
              <View>
                <Text>{"Distance: "+getDistance(origin,destination)+" km"}</Text>
                <Text>{"Driver's Fare: Rs."+50+" per km"}</Text>
                <Text>{"Total Fare: Rs."+(50 * getDistance(origin,destination))+""}</Text>

              </View>
            </View>

            <View style={styles.card} >
            <Image 
              source={marker.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>{"Hello"}</Text>
              <StarRating ratings={marker.rating} reviews={marker.reviews} />
              <Text numberOfLines={1} style={styles.cardDescription}>{marker.description}</Text>
              
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => {
                        ToastAndroid.showWithGravity(
                        "Your request has been sent success fully, You will get notification shortly",
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                      );
                      navigation.navigate("Home")
                    }}
                  style={[styles.signIn, {
                    borderColor: '#FF6347',
                    borderWidth: 1
                  }]}
                >
                  <Text style={[styles.textSign, {
                    color: '#FF6347'
                  }]}>Make a request</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>        
    )

}
export default DirectionMap;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topBox: {
      position:'absolute', 
      marginTop: Platform.OS === 'ios' ? 40 : 20, 
      flexDirection:"row",
      backgroundColor: '#fff',
      width: '90%',
      alignSelf:'center',
      borderRadius: 5,
      padding: 10,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    marginBottom:10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width:50,
    height:50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5
  },
  signIn: {
      width: '100%',
      padding:5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3
  },
  textSign: {
      fontSize: 14,
      fontWeight: 'bold'
  }
});