import React from "react"
import {TextInput,ScrollView,View,Text, TouchableOpacity} from "react-native"
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function LocationItem(props){
  return(
    <TouchableOpacity onPress={()=>{props.navigation.navigate("DirectionMap",{
      place:props.description
    })}}>
      <View style={{zIndex:999,flexDirection:"row",padding:10}}>
        <MaterialCommunityIcons name="google-maps" size={20} />
        <Text>{props.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

function GooglePlacesAutoComplete({navigation,...rest}) {
  return (
    <GoogleAutoComplete apiKey="AIzaSyDJSzGFM725WqKtiZe345r1FafqGyL-p9Y"
    currentLocation={true}
    currentLocationLabel='Current location'
    debounce={300} minLength={3}>
      {({handleTextChange, locationResults }) => (
        <React.Fragment>
          <TextInput
            placeholder="Search here"
            placeholderTextColor="#000"
            autoCapitalize="none"
            style={{margin:10}}
            onChangeText={handleTextChange}
          />
          <ScrollView style={{ maxHeight: "50%" }}>
            {locationResults.map((el, i) => (
              <LocationItem
                {...el}
                key={i}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </React.Fragment>
      )}
    </GoogleAutoComplete>
  );
}

export default GooglePlacesAutoComplete