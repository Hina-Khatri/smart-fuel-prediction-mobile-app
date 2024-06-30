import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Platform } from 'react-native';
import MapView, { Marker, LatLng } from 'react-native-maps';
import axios from 'axios';
import TypePrimary from '../components/TypePrimary';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';


const GoogleMapScreen = () => {
  const [destination, setDestination] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<LatLng | null>(null);
  const [currentLocation, setCurrentLocation] = useState<LatLng | null>(null);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    // Request location permission when the component mounts
    requestLocationPermission();
  
    // Get the current location
    getCurrentLocation();
  }, []);
  

  const requestLocationPermission = async () => {
    try {
      const status = await request(
        Platform.OS === 'android'
          ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
          : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      );

      if (status === 'granted') {
        console.log('Location permission granted');
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
        setInitialRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        console.log('Current location:', { latitude, longitude });
      },
      (error) => {
        console.error('Error getting current location:', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const handleSearch = async () => {
    try {
      const apiKey = 'AIzaSyBtGPJeKV8bZQuM73Yr97Q_FNKBqEnkDJ';
      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=${apiKey}`;

      const response = await axios.get(apiUrl);

      if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry.location;
        setSelectedLocation({ latitude: lat, longitude: lng });

        // Update the initial region based on the selected location
        setInitialRegion({
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        console.log('Selected location:', { latitude: lat, longitude: lng });
      } else {
        console.log('No results found');
      }
    } catch (error) {
      console.error('Error searching for location:', error);
    }
  };

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setSelectedLocation(coordinate);
    console.log('Map pressed at:', coordinate);
  };

  const handleCurrentLocationPress = () => {
    if (currentLocation) {
      setInitialRegion({
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      console.log('Returned to current location:', currentLocation);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      <MapView
        style={{ flex: 1 }}
        onPress={handleMapPress}
        initialRegion={initialRegion}
      >
        {currentLocation && (
          <Marker
            coordinate={currentLocation}
            title="Current Location"
            description="Click to go to current location"
          />
        )}

        {selectedLocation && (
          <Marker coordinate={selectedLocation} title="Selected Location" />
        )}
      </MapView>

      <TextInput
        placeholder="Enter destination"
        value={destination}
        onChangeText={(text) => setDestination(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, position: 'absolute', top: 60, left: 26, width: 324 }}
      />

      {/* Directions button */}
      <TouchableOpacity
        onPress={handleCurrentLocationPress}
        style={{ position: 'absolute', bottom: 16, right: 16, backgroundColor: '#3498db', padding: 8 }}
      >
        <Text style={{ color: '#fff' }}>Get Directions</Text>
      </TouchableOpacity>

      {/* Your TypePrimary component with dynamic text */}
      <TypePrimary
        getStarted="Search"
        typePrimaryPosition="absolute"
        typePrimaryBackgroundColor="#ff7966"
        typePrimaryElevation={8}
        typePrimaryPaddingHorizontal="unset"
        typePrimaryMarginLeft="unset"
        typePrimaryTop={10} // Adjust the bottom position as needed
        typePrimaryLeft={26}
        typePrimaryWidth={324}
        typePrimaryHeight="unset"
        onPress={handleSearch}
      />
    </View>
  );
};

export default GoogleMapScreen;
