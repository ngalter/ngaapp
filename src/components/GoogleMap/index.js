import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  maxWidth: '100%',
    maxHeight: 650,
  height: 650,
};
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export class MapContainer extends Component {
    onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }
    render() {
            return (
                <Map
                    google={this.props.google}
                    zoom={13}
                    style={mapStyles}
                    initialCenter={{
                        lat: 40.262388,
                        lng: -74.651277
                    }}
                >
                <Marker
                onClick={this.onMarkerClick}
                name={'Mercer County Park'}
                    ></Marker>
                </Map>
            );
        }
    }

export default GoogleApiWrapper(
  () => ({
      apiKey: REACT_APP_API_KEY
    }
  ))(MapContainer)

