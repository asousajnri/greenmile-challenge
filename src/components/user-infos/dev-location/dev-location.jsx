import React, { useState } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import {
  Map,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

import './leaflet.css';

import DevLocationLoading from './dev-location-loading';
import { StyledDevLocation } from './dev-location-styles';

const DevLocation = ({ isFetchinging, devData }) => {
  const [position, setPosition] = useState[
    (-3.71846, -38.541672)
  ];

  const { location, name, avatar_url } = devData;

  const getLatLng = async () => {
    const response = await axios.get(
      `https://www.mapquestapi.com/geocoding/v1/address?key=lEazw4PFcrR2oAEp5QFDHRBoh3JHAJhd&location=${location}`
    );

    console.log(response);

    setPosition([-3.71846, -38.541672]);

    // const {
    //   displayLatLng,
    // } = response.data.locations.results[0];

    // if (displayLatLng) {
    //   setPosition([displayLatLng.lat, displayLatLng.lng]);
    // }
  };

  getLatLng();

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
