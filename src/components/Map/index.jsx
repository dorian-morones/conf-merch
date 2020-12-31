/* eslint-disable no-return-assign */
import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapContainer } from "./styles/Map";

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  const handleMap = () => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZG9yaWFubXgzIiwiYSI6ImNrMTcwa2Z4cjAyb3czY254bW9uNWx5eTYifQ.6UUrz0l4ueqe5W4j8QGd4w";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-99.1718706, 19.4267261],
        zoom: 15,
      });
      setMap(map);
      map.addControl(new mapboxgl.NavigationControl());

      const marker = new mapboxgl.Marker()
        .setLngLat([-99.1718706, 19.4267261])
        .addTo(map);
    };

    if (!map) initializeMap({ setMap, mapContainer });
  };

  useEffect(() => {
    handleMap();
  }, [map]);

  return <MapContainer ref={(el) => (mapContainer.current = el)} />;
};

export default MapboxGLMap;
