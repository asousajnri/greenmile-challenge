import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import { Icon } from 'leaflet';

import './leaflet.css';

import DevLocationLoading from './dev-location-loading';
import { StyledDevLocation } from './dev-location-styles';

const DevLocation = ({ isFetchinging }) => {
  const [position, setPosition] = useState([
    -3.71846,
    -38.541672,
  ]);

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
                A pretty CSS3 popup. <br /> Easily
                customizable.
              </Popup>
            </Marker>
          </Map>
        </StyledDevLocation>
      )}
    </>
  );
};

export default connect(state => ({
  isFetchinging: state.isFetchinging,
}))(DevLocation);
