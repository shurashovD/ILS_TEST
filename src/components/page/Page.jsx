import { Col, Row } from "antd"
import GeographyWrapper from "../geographyMap/GeographyWrapper"
import Orders from "../orders/Orders"

const Page = () => {
    return (
        <Row align="middle" className="min-vh-100">
            <Col xs={6} align="middle">
                <Orders />
            </Col>
            <Col xs={18} align="middle">
                <GeographyWrapper />
            </Col>
        </Row>
    )
}

export default Page