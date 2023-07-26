import * as React from 'react';
import { Space, Spin } from 'antd';

const Loader: React.FC = () => (
    <Space direction="vertical" style={{ width: '100%' }}>
        <Space>
            <Spin size="large">
                <div className="content" />
            </Spin>
        </Space>
    </Space>
);

export default Loader;
