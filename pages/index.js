import React from 'react';
import AppLayout from '../components/AppLayout';
import LoginMain from '../components/LoginMain';
import UserProfile from '../components/UserProfile';
import MyPostCard from '../components/MyPostCard';
import Main from '../components/Main';
import { Col, Input, Menu, Row,Avatar} from 'antd';
import { Components } from 'antd/lib/date-picker/generatePicker';
import styles from '../components/stylee.module.css'
import styled from "styled-components";
import { useSelector } from 'react-redux';

// const dummy = {
//   isLoggedIn: false,
//   imagePaths: [],
//   mainPosts: [{
//     id: 1,
//     User: {
//       id: 1,
//       nickname: 'june',
//     },
//     content: '안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. ',
//     Images: [{
//       src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
//     }, {
//       src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
//     }, {
//       src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
//     }]
//   }],
// };



const Home = () => {
  const { me } = useSelector((state) => state.user);
  return (
          <>
          {me
            ? <Main /> : <LoginMain />}
          </>
  )};

export default Home;

