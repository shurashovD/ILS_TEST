import { Space, Typography } from "antd"

const RouteErrorComponent = () => {
    return (
        <Space direction="vertical">
            <Typography.Title level={4}>
                Ошибка получения маршрута
            </Typography.Title>
            <Typography.Text>
                попробуйте еще раз
            </Typography.Text>
        </Space>
    )
}

export default RouteErrorComponent