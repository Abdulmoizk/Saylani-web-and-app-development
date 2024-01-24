import React from 'react';
import { Card } from 'antd';
const  CardColumn = (v ) => (

      <Card title={v.title} bordered={false}>
        {v.content}
      </Card>
    


);
export default CardColumn;