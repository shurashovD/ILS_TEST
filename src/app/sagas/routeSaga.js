import { put, takeEvery } from "redux-saga/effects";
import { fetchMapboxRoute } from "../../api/mapboxApi";
import { resetCoords, resetCoordsIsLoading, setCoords, setCoordsIsLoading, setFromCoords, setToCoords } from "../geographyMapSlice";
import { setCheckedOrderId } from "../ordersSlice";
import store from "../store";
import checkedOrderSelector from "../selectors/checkedOrderSelector";
import { resetError, setError } from "../errorsSlice";

function* getRoute() {
    const state = store.getState()
    const order = checkedOrderSelector(state)
    yield put(resetError())
    yield put(resetCoords())
    if (order) {
        yield put(setCoordsIsLoading())
        const { from, to } = order
        try {
            const data = yield fetchMapboxRoute(from.lat, from.lng, to.lat, to.lng)
            yield put(setCoords(data))
            yield put(setFromCoords([from.lat, from.lng]))
            yield put(setToCoords([to.lat, to.lng]))
            yield put(resetCoordsIsLoading())
        } catch (e) {
            console.error(e)
            yield put(resetCoords())
            yield put(setError(e.message))
        }
    }
}

export function* watchRoutes() {
    yield takeEvery(setCheckedOrderId, getRoute)
}