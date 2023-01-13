import axios from "axios"

const baseUrl = 'https://api.mapbox.com/directions/v5/mapbox/driving/'
const token = 'pk.eyJ1Ijoic2h1cmFzaG92ZCIsImEiOiJjbGNzb2IzOWwwY21qM3dzMTkzdW1ucms5In0.1ZrPF1PuH82PX1iCFgNIIA'

// меняет местами широту и долготу;
function convertCoordsLongLatFromat(coords) {
    if ( !Array.isArray(coords) ) {
        throw new Error('Координаты должны быть массивом')
    }

    if ( !coords.every(item => Array.isArray(item)) ) {
        throw new Error('Координаты должны быть массивом массивов')
    }

    if ( !coords.every(item => item.length === 2) ) {
        throw new Error('Координаты должны быть массивом кортежей')
    }
    return coords.map(item => item.reverse())
}

// получает координаты полилинии маршрута, вместо OSRM;
export async function fetchMapboxRoute(fromLat, fromLong, toLat, toLong) {
    try {
        const coords = `${fromLong},${fromLat};${toLong},${toLat}`
        const queryParams = `?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=false&access_token=${token}`
        const url = baseUrl + coords + queryParams
        const data = await axios.get(url).then(res => res.data)
        if ( data?.routes?.[0]?.geometry?.coordinates ) {
            // в Map Box порядок координат сначала широта, затем долгота, у нас наоборот;
            const coordsLongLatFormat = data?.routes?.[0]?.geometry?.coordinates
            const result = convertCoordsLongLatFromat(coordsLongLatFormat)
            return result
        }
        throw new Error('Ошибка получения маршрута')
    } catch (e) {
        throw e
    }
}