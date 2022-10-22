import React from "react";
import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "auto",
  height: "230px",
};

const center = {
  lat: -32.87106009649117,
  lng: -68.77875926289552,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDJbJcCdWK3akJLEltNhnuy8mEP5jgGfro",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
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
      zoom={9}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={{ lat: -32.87106009649117, lng: -68.77875926289552 }} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
