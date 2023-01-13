import { Spin, Typography } from "antd"
import { ErrorBoundary } from "react-error-boundary"
import { useSelector } from "react-redux"
import MapErrorComponent from "./MapErrorComponent"
import GeographyMap from "./GeographyMap"
import RouteErrorComponent from "./RouteErrorComponent"

const GeographyWrapper = () => {
    const { coordsIsLoading } = useSelector(state => state.geographyMapSlice)
    const nonChecked = useSelector(state => !state.ordersSlice.checkedOrderId)
    const { isError } = useSelector(state => state.errorsSlice)

    if (coordsIsLoading) {
        return (
            <Spin tip="Загрузка маршрута"></Spin>
        )
    }
    
    if (nonChecked) {
        return (
            <Typography.Title level={4}>Выберите заявку</Typography.Title>
        )
    }

    if (isError) {
        return (
            <RouteErrorComponent />
        )
    }

    return (
        <ErrorBoundary FallbackComponent={MapErrorComponent}>
            <GeographyMap />
        </ErrorBoundary>
    )
}

export default GeographyWrapper