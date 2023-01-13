import { Space, Typography } from "antd"

const MapErrorComponent = () => {
    return (
        <Space direction="vertical">
            <Typography.Title level={4}>
                Ошибка отображения карты
            </Typography.Title>
            <Typography.Text>
                попробуйте еще раз
            </Typography.Text>
        </Space>
    )
}

export default MapErrorComponent