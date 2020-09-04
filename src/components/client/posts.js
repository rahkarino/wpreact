import React, { useState } from 'react';
import MainLayout from '../Layout/mainLayout';
import { Row, Col, Card, Avatar, Typography } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import axios from 'axios';
import clientConfig from '../../clientConfig';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [data, setData] = useState([]);
    const { Paragraph } = Typography;
    const _WPAPI = clientConfig.siteUrl + '/wp-json/wp/v2/posts';
    axios.get(_WPAPI).then(res => setData(res.data)).catch(err => console.log(err));
    const {Meta} = Card;
    //console.log(data);
    return ( 
    <MainLayout activePage="blog">
        <Row>
            <h1>بلاگ</h1>
            </Row>
            <Row>
            {data.map(post => {return (
                    <Col lg={6} key={post.id}>
                        <Link to={`${post.id}`}>
            <Card
            cover={
            <img
                alt={post.title.rendered}
                src={(post.uagb_featured_image_src.medium[0]) ? post.uagb_featured_image_src.medium[0] : "assets/images/notfound.jpg"}
            />
            }
            actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
            ]}
            hoverable
        >
            <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={post.title.rendered}
            description={(<Paragraph ellipsis={{rows: 2, expandable: false, symbol: 'ادامه'}}><div>{renderHTML(post.excerpt.rendered)}</div></Paragraph>)}
            />
        </Card></Link>
            </Col>
                
            )})}
            
        </Row>
    </MainLayout> );
}
 
export default Posts;