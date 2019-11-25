import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions,Permissions,Location } from 'react-native';
import Destinationbutton from './components/Destinationbutton';
import CurrentLocationButton from './components/CurrentLocationButton';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      region : null,
      }
      this._getLocationAsync();
      }
      _getLocationAsync = async () =>{
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted')
        console.log('Permission to access location was denied.');
        let location = await Location.getCurrentPositionAsync({enableHighAccuracy : true});
       
        let region = {
          latitude :   location.coords.latitude,
          longitude : location.coords.longitude,
          latitudeDelta : 0.045,
          longitudeDelta : 0.045
        }
        this.setState({region: region}) 
      } 
    centerMap() {
        const { latitude,
             longitude,
             latitudeDelta,
             longitudeDelta } =  this.state.region ;

        this.map.animateToRegion({
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta
        })
    }      
  render() {
    return (
      <View style={styles.container}>
        <MapView
        initialRegion={this.state.region}
        showsUserLocation={true}
        showsCompass={true}
        ref={(map) =>{this.map = map }}
        rotateEnable={true}
        style={{flex:1,zIndex:0}}
      />
      <Destinationbutton />
      <CurrentLocationButton cb={() => { this.centerMap() }} />
      </View>
    );
  }}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    zIndex:0
    
  },
});