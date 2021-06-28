import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import GooglePlacesAutoComplete from "../components/GooglePlacesAutoComplete"
const SearchPlaces = ({navigation}) => {


    return(
        <View style={styles.container}>
            <GooglePlacesAutoComplete navigation={navigation}/>
        </View>        
    )

}
export default SearchPlaces;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "baseline",
    }
});