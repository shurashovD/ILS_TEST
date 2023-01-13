import { Space } from "antd"
import { useSelector } from "react-redux"
import Item from "./Item"

const Orders = () => {
    const { orders } = useSelector(state => state.ordersSlice)

    return (
        <Space direction="vertical">
            { orders.map(({ id }) => (
                <Item key={id} id={id} />
            )) }
        </Space>
        
    )
}

export default Orders