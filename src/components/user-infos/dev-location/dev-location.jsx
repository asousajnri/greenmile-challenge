import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

import './leaflet.css';

import geocode from '../../../utils/geocode';

import DevLocationLoading from './dev-location-loading';
import { StyledDevLocation } from './dev-location-styles';

const DevLocation = ({ isFetchinging, devData }) => {
  const [position, setPosition] = useState([
    -3.71846,
    -38.541672,
  ]);

  const { location, name, avatar_url } = devData;

  const setLatLong = async () => {
    const { lat, lng } = await geocode(location);

    if (lat && lng) {
      setPosition([lat, lng]);
    }
  };

  setLatLong();

  return (
    <>
      {isFetchinging ? (
        <DevLocationLoading />
      ) : (
        <StyledDevLocation>
          <Map center={position} zoom={13}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <img src={avatar_url} alt={name} />
                <h1>{name}</h1>
              </Popup>
            </Marker>
          </Map>
        </StyledDevLocation>
      )}
    </>
  );
};

export default connect(state => ({
  devData: state.devData,
  isFetchinging: state.isFetchinging,
}))(DevLocation);
