import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  color: #484848;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  line-height: 22px;
  font-weight: 300;
  font-size: 17px;
  display: block;
`;

const ImageWrapper = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Message = ({ message, date, name, avatar }) => {


  return (
    <MessageWrapper>
      <ImageWrapper src={avatar} />
      <span>{name}</span>
      <span>{date}</span>
      <span>{date}</span>
      <span>{message}</span>
    </MessageWrapper>
  );
};

export default Message;



// const style = {
//   divStyle: {
//     color: '#484848',
//     fontFamily:
//       'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
//     lineHeight: '22px',
//     fontWeight: 300,
//     fontSize: '17px',
//     display: 'block'
//   },
//   imgStyle: {
//     width: '48px',
//     height: '48px',
//     borderRadius: '50%'
//   }
// };