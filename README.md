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
