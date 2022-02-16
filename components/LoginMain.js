import React from 'react';
import LoginForm from '../components/LoginForm';
import { Col, Row} from 'antd';
import styles from './stylee.module.css'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

//처음 사이트 들어갔을 때 제일 먼저 뜨는 로그인 페이지 양식


// const dummy = {
//     isLoggedIn: true,
//     imagePaths: [],
//     mainPosts: [{
//       id: 1,
//       User: {
//         id: 1,
//         nickname: 'june',
//       },
//       content: '안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. 안녕하세요 저는 조준입니다. 이 사이트는 React DiarySns입니다. ',
//       Images: [{
//         src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
//       }, {
//         src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
//       }, {
//         src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
//       }]
//     }],
//   };


const LoginMain = () => {
    return(
        <div style={{backgroundImage: "url('/img/envelope.jpg')",width:"100vw",height:"100vh", backgroundSize:"100% 100%" ,backgroundColor:"rgba(0,0,0,0)",backgroundRepeat: "no-repeat"}}>
            <Row><Col className="fontset_logintitle" style={{marginLeft:"auto", marginRight:"auto", textAlign:"center", marginTop:"6vh", fontSize:"7vmax"}}>DiarySNS Invitation</Col></Row>
            <Row><Col style={{marginTop: "-10px"}}><LoginForm /></Col></Row>
            <Row ></Row>
        </div>
    )
};

// const LoginMain = () => {
//   return(
//     <div className={cx('section','section--cards','-cards-show')}>
//       <div className={cx('section--inner-cards')}>
//         <div className={cx('b__card-animated')}>
//           <div className={cx('env-wrapper')}>
//             <div className={cx('env-top')}>
//               <div className={cx('flip-btn','mobile-hidden')}>
//                 <span className={cx('gradient-text')}>Turn card</span>
//                 <img alt='' src='https://s3.amazonaws.com/PM_emailer/gm_emailer_mom/flip-btn.png'/>
//               </div>
//               <div className={cx('env-top--frontside')}>
//                 <img alt='' src='https://s3.amazonaws.com/PM_emailer/gm_emailer_mom/env--top.png'/>
//               </div>
//               <div className={cx('env-top--backside')}>
//                 <img alt='' src='https://s3.amazonaws.com/PM_emailer/gm_emailer_mom/env--top-backside.png'/>
//               </div>
//             </div>
//             <div className={cx('env-front')}>
//               <img alt='' src='	https://s3.amazonaws.com/PM_emailer/gm_emailer_mom/env--front.png'/>
//             </div>
//             <div className={cx('env-card')}>
//               <div className={cx('env-card--inner')}>
//                 <div className={cx('env-card--frontside')}>
//                   <img alt='' src='https://s3.amazonaws.com/PM_emailer/gm_emailer_mom/card--1.jpg'/>
//                 </div>
//                 <div className={cx('env-card--backside')}>
//                   <img alt='' src='https://s3.amazonaws.com/PM_emailer/gm_emailer_mom/card-contructor--1.jpg'/>
//                   <div className={cx('input-heading')}>Your</div>
//                   <div className={cx('input-disclaimer')}>Destination Name</div>
//                 </div>
//               </div>
//             </div>
//             <div className={cx('env-btn','js-open-env')}></div>
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// };



export default LoginMain;