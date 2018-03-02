import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  color: #484848;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif;
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

const Message = props => {
  return (
    <MessageWrapper>
      <ImageWrapper src={props.avatar} />
      <span>{props.name}</span>
      <span>{props.date}</span>
      <span>{props.date}</span>
      <span>{props.message}</span>
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
