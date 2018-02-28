import React from "react";

const Message = ({ message, date, name, avatar }) => {
  const style = {
    divStyle: {
      color: "#484848",
      fontFamily:
        "Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      lineHeight: "22px",
      fontWeight: 300,
      fontSize: "17px",
      display: "block"
    },
    imgStyle: {
      width: '48px',
      height: '48px',
      'borderRadius': '50%'
    }
  };

  return (
    <div style={style.divStyle}>
      <img src={avatar} style={style.imgStyle}/>
      <span>{name}</span>
      <span>{date}</span>
      <span>{date}</span>
      <span>{message}</span>
    </div>
  );
};

export default Message;
