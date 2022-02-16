import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';

import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import PostImages from './PostImages';
import FollowButton from './FollowButton';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import { ImgWrapper } from './ImagesZoom/styles';


//피드에 뜨는 글 창 양식


const dummyComments = [{
  User: {
    nickname: '이정인',
  },
  content: '좋아요~',
}, {
  User: {
    nickname: '김동주',
  },
  content: '멋져요',
}, {
    User: {
      nickname: '김하운',
    },
    content: '최고에용!',
  }];

const CardWrapper = styled.div`
  margin-top: 10px;
`;

const PostCard = ({ post }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [liked, setLiked] = useState(false);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <CardWrapper key={post.id}>
      <Card style={{backgroundImage: "url('/img/postit.png')",border: 0, backgroundPosition: "center", backgroundColor:"rgba(0,0,0,0)",backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
        bodyStyle={{border: 0, opacity:0.8 }}
        //cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
            : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="message" onClick={onToggleComment} />,
          <Popover
            key="ellipsis"
            content={(
              <Button.Group>
                <Button>수정</Button>
                <Button danger>삭제</Button>
              </Button.Group>
            )}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta className="fontset_mypostcontents" style={{ height: 300, marginTop: "60px"}}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List style={{backgroundColor:"rgba(255,255,255,0.5"}}
            header={`${dummyComments.length} 댓글`}
            itemLayout="horizontal"
            dataSource={dummyComments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={(
                    <Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                      <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                    </Link>
                  )}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </CardWrapper>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    Images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
    })),
    createdAt: PropTypes.object,
  }),
};

export default PostCard;
