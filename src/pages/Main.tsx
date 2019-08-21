import React from 'react';
import { Row, Col } from 'antd';

class MainPage extends React.Component<{}, {}> {
    componentDidMount() {
        console.log('Main Page')
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        Точки
                    </Col>
                    <Col span={12}>
                        Карта
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MainPage;