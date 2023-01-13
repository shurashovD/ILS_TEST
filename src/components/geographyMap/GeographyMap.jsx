import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet'
import { useSelector } from 'react-redux';
import "leaflet/dist/leaflet.css";

const GeographyMap = () => {
    const { bounds, center, pathCoords, fromCoords, toCoords  } = useSelector(state => state.geographyMapSlice)

    return (
        <MapContainer
            bounds={bounds}
            center={center}
            scrollWheelZoom={false}
            className="min-vh-100 w-100"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={fromCoords}>
                <Popup>
                    Начало маршрута
                </Popup>
            </Marker>
            <Marker position={toCoords}>
                <Popup>
                    Конец маршрута
                </Popup>
            </Marker>
            <Polyline positions={pathCoords} />
        </MapContainer>
    )
}

export default GeographyMap