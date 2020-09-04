import React from 'react';
import MainLayout from '../Layout/mainLayout';
import renderHTML from 'react-render-html';
import { Card } from 'antd';

const Post = ({post}) => {
    return ( 
    <MainLayout>
        <Card
            style={{ marginTop: 0 }}
            type="inner"
            title={post.title.rendered}
            >
                <img src={(post.uagb_featured_image_src.medium[0]) ? post.uagb_featured_image_src.medium[0] : "assets/images/notfound.jpg"} />
            {renderHTML(post.content.rendered)}
        </Card>
    </MainLayout> );
}
 
export default Post;