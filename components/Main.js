import React from 'react';
import AppLayout from '../components/AppLayout';
import UserProfile from '../components/UserProfile';
import MyPostCard from '../components/MyPostCard';
import {Col, Row} from 'antd';


//로그인 했을 때 가장 먼저 나오는 창 양식 


const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
      id: 1,
      User: {
        id: 1,
        nickname: 'june',
      },
      content: '안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. ',
      Images: [{
        src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
      }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
      }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
      }]
    }],
  };


const Main = () => {
    return (
        <div style={{backgroundImage: "url('/img/wall1.jpg')"}}>
            <AppLayout>
                <UserProfile style={{marginTop: "100px", opacity: 0.4}}/>
            <Row gutter={[40, 40]} justify="center">
                <Col span={7}>
                {dummy.mainPosts.map((c) => {
                return (
            <MyPostCard  style={{backgroundImage: "url('/img/postit.png')"}} key={c.id} post={c} />
            );
        })}
                </Col>
                
                <Col span={7}>
                {dummy.mainPosts.map((c) => {
                return (
            <MyPostCard key={c.id} post={c} />
            );
        })}
                </Col>
                <Col span={7}>
                {dummy.mainPosts.map((c) => {
                return (
            <MyPostCard key={c.id} post={c} />
            );
        })}
                </Col>

                <Col span={7}>
                dsds
                </Col>
                <Col span={7}>
                dsds
                </Col>
                <Col span={7}>
                sdsd
                </Col>
            </Row>
            </AppLayout>
        </div>
    )
};

export default Main;