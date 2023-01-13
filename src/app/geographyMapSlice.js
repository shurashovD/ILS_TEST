import { createSlice } from "@reduxjs/toolkit";

function calcBounds(coords) {
    if ( !coords.length ) {
        return []
    }

    // получение северной и южной координат прямоугольника, содержащего маршрут;
    const latitudes = coords.map((item) => (item[0]))
    const latitudeMax = Math.max(...latitudes)
    const latitudeMin = Math.min(...latitudes)

    // получение восточной и западной координат прямоугольника, содержащего маршрут;
    const longitudes = coords.map((item) => (item[1]))
    const longitudeMin = Math.min(...longitudes)
    const longitudeMax = Math.max(...longitudes)

    if ( isNaN(latitudeMax * latitudeMin * longitudeMax * longitudeMin) ) {
        return []
    }

    // если прямоугольник, содержащий маршрут, сеществует;
    return [[latitudeMin, longitudeMin], [latitudeMax, longitudeMax]]
}

function calcCenter(bounds) {
    const [start, end] = bounds
    if (!start || !end) {
        return []
    }

    const [latitudeMin, longitudeMin] = start
    const [latitudeMax, longitudeMax] = end
    if ( isNaN(latitudeMax * latitudeMin * longitudeMax * longitudeMin) ) {
        return []
    }

    const centerLat = (latitudeMax + latitudeMin) / 2
    const centerLong = (longitudeMax + longitudeMin) / 2
    return [centerLat, centerLong]
}

const initialState = {
    bounds: [],
    center: [],
    pathCoords: [],
    fromCoords: [],
    toCoords: [],
    coordsIsLoading: false,
}

const geographyMapSlice = createSlice({
    initialState,
    name: 'geographyMapSlice',
    reducers: {
        resetCoords() {
            return initialState
        },
        resetCoordsIsLoading(state) {
            state.coordsIsLoading = false
        },
        setCoords(state, { payload }) {
            state.pathCoords = payload
            const bounds = calcBounds(payload)
            state.bounds = bounds
            if ( bounds.length ) {
                state.center = calcCenter(bounds)
            } else {
                state.center = []
                state.isMapError = true
            }
        },
        setCoordsIsLoading(state) {
            state.isMapError = false
            state.coordsIsLoading = true
        },
        setFromCoords(state, { payload }) {
            state.fromCoords = payload
        },
        setToCoords(state, { payload }) {
            state.toCoords = payload
        }
    }
})

export const { resetCoordsIsLoading, setCoordsIsLoading, resetCoords, setCoords, setFromCoords, setToCoords } = geographyMapSlice.actions
export default geographyMapSlice