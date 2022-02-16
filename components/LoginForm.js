import React, { useCallback, useState } from 'react';
import { AutoComplete, Button, Form, Input } from 'antd';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';
import Modal from './SignUpModal';
import SignUp from './SignUp';

//로그인 페이지에서 로그인 창 양식

const red_line = {fontSize:"3vmax",textAlign:"center",marginRight:"25vw",width:"50vw",backgroundColor:"rgba(0,0,0,0)",border:"none",backgroundImage:"url('/img/red_line.png')",backgroundSize:"100% 100%", fontFamily: "'Caveat','Nanum Pen Script',cursive"}
const red_line2 = {fontSize:"3vmax",textAlign:"center",marginRight:"25vw",width:"50vw",letterSpacing:"2vw",fontWeight:"1000",backgroundColor:"rgba(0,0,0,0)",border:"none",backgroundImage:"url('/img/red_line.png')",backgroundSize:"100% 100%", fontFamily: "'Caveat','Nanum Pen Script',cursive"}
const buttonn = {backgroundColor:"rgba(0,0,0,0)",border:"none",fontSize:"2vmax", fontFamily: "'Caveat','Nanum Pen Script',cursive",fontWeight:"1000"}
const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state) => state.user);
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch({
      type: LOG_IN_REQUEST,
      data: { "user": {
                      "email": id,
                      "password": password
                      }
            },
    });
  }, [id, password]);


  const [ modalOpen, setModalOpen ] = useState(false);

  const openModal = () => {
      setModalOpen(true);
  }
  const closeModal = () => {
      setModalOpen(false);
  }

  return (
    <>
    <Form onFinish={onSubmitForm} onSubmit={e => e.preventDefault()}>
      <div style={{textAlign:"right", width:"100vw", height:"10vh"}}>
        <label htmlFor="user-id" style={{fontFamily: "'Caveat','Nanum Pen Script',cursive", marginRight:"2vw", fontSize:"3vmax"}}>E-Mail</label>
        <input className="login_input" name="user-id" value={id} onChange={onChangeId} required style={red_line}/>
      </div>
      <div style={{textAlign:"right", width:"100vw", height:"10vh"}}>
        <label htmlFor="user-password" style={{fontFamily: "'Caveat','Nanum Pen Script',cursive", marginRight:"2vw", fontSize:"3vmax"}}>Password</label>
        <input className="login_input" name="user-password" value={password} onChange={onChangePassword} type="password" required style={red_line2} />
      </div>
      <div style={{ marginLeft:"auto", marginRight:"auto",width:"100vw",height:"5vh", textAlign:"center" }}>
        <button style={buttonn} htmlType="submit" loading={logInLoading}>Send</button>
        <button style={buttonn} onClick={ openModal }>I'm Not A User Yet</button>
      </div>
    </Form>
    <Modal open={ modalOpen } close={ closeModal } header="Modal heading">
      <SignUp />
    </Modal>
    </>
  );
};

export default LoginForm;
