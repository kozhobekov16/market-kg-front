import {Col, Typography} from 'antd';
import {CopyrightOutlined} from '@ant-design/icons';

const {Text, Link} = Typography;

export const Policy = () => {
  return (
    <div style={{backgroundColor: "#021736"}}>
      <div className={'--container flex justify-between flex-wrap py-4 gap-2 sm:gap-16'}>
        <div>
          <Text style={{color: '#CBCBCB'}}>
            <CopyrightOutlined/> 2024 nDevSolutions
          </Text>
        </div>

        <div className={'flex gap-2 sm:gap-16 flex-wrap'}>
          <Col>
            <Link style={{color: '#CBCBCB'}}>cookie settings</Link>
          </Col>
          <Col>
            <Link style={{color: '#CBCBCB'}}>политика конфиденциальности</Link>
          </Col>
          <Col>
            <Link style={{color: '#CBCBCB'}}>Условия и положения</Link>
          </Col>
        </div>
      </div>
    </div>
  );
};
