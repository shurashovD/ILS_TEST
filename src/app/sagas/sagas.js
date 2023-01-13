import { all } from "redux-saga/effects";
import { watchRoutes } from "./routeSaga";

export default function* () {
    yield all([
        watchRoutes()
    ])
}