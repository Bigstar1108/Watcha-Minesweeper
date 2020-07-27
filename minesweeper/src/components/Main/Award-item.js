import React from 'react';

const AwardItem = ({ name, time}) => {
  return(
    <div className = "AwardItem">
      <span>🎉 <b>걸린 시간:</b> {time}, <b>이름:</b> {name}</span>
    </div>
  );
}

export default AwardItem;