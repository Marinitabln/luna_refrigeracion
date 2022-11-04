import React from "react";
import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "auto",
  height: "230px",
};

const center = {
  lat: -32.87101901755689,
  lng: -68.77884351823357,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDJbJcCdWK3akJLEltNhnuy8mEP5jgGfro",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
   /*  const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds); */    
    map.setZoom(11)
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  console.log(map);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={{ lat: -32.87101901755689, lng: -68.77884351823357 }} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
