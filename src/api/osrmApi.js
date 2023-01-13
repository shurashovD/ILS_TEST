import axios from "axios"

const baseUrl = 'http://router.project-osrm.org/route/v1/driving/'

// не получилось реализовать, OSRM выдаёт некорректный маршрут с моим подходом;
export async function fetchRoute(fromLat, fromLong, toLat, toLong) {
    try {
        const coords = `${fromLat},${fromLong};${toLat},${toLong}`
        const queryParams = '?geometries=geojson&overview=full'
        const url = baseUrl + coords + queryParams
        const data = await axios.get(url).then(res => res.data)
        if (data.code === 'Ok' && data.routes[0].geometry.coordinates) {
            return data.routes[0].geometry.coordinates
        }
        throw new Error('Ошибка получения маршрута')
    } catch (e) {
        throw e
    }
}