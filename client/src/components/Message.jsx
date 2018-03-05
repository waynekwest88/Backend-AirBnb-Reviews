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

const Message = ({ msgObj }) => {
  return msgObj.map(review => (
    <MessageWrapper>
      <div>
        <ImageWrapper src={review.image} />
        <span>{review.guest_name}</span>
        <span>{review.date}</span>
      </div>
      <div>
        <span>{review.message}</span>
      </div>
    </MessageWrapper>
  ));
};

export default Message;
