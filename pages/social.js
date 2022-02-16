import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import NicknameEditForm from '../components/NicknameEditForm';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'aim_1535',
    },
    content: '하하하',
    Images: [{
      src: 'http://image.kyobobook.co.kr/ink/images/prom/2021/general/210217_handwriting/font/img_font_2020_01.jpg',
    }, {
      src: 'https://static-clova.pstatic.net/static/public/font_event/pc_intro_1008/format_pc_intro_001@2x.jpg',
    }, {
      src: 'https://static-clova.pstatic.net/static/public/font_event/pc_intro_1008/format_pc_intro_001@2x.jpg',
    }]
  }],
};

const Social = () => {
  const followerList = [{ nickname: 'JUNGINRHEE' }, { nickname: 'dongjoo' }, { nickname: 'hawoon' }];
  const followingList = [{ nickname: 'JUNGINRHEE' }, { nickname: 'dongjoo' }, { nickname: 'hawoon' }];

  return (
    <AppLayout>
      <PostForm />
      {dummy.mainPosts.map((c) => {
        return (
          <PostCard key={c.id} post={c} />
        );
      })}
    </AppLayout>
  );
};

export default Social;
