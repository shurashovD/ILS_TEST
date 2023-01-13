import { Button } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { resetCheckedOrderId, setCheckedOrderId } from "../../app/ordersSlice"

const Item = ({ id }) => {
    const isChecked = useSelector(state => state.ordersSlice.checkedOrderId === id)
    const isLoading = useSelector(state => state.geographyMapSlice.coordsIsLoading)
    const { isError } = useSelector(state => state.errorsSlice)
    const dispatch = useDispatch()

    const handler = () => {
        if ( isLoading ) {
            return
        }
        if ( isChecked ) {
            dispatch(resetCheckedOrderId())
        } else {
            dispatch(setCheckedOrderId(id))
        }
    }

    return (
        <Button type={isChecked ? "primary" : "default"} onClick={handler} loading={isLoading && isChecked} danger={isError && isChecked}>Заявка {id}</Button>
    )
}

export default Item