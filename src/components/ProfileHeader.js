import React, { useRef } from 'react';
import { LiaAngleDownSolid } from "react-icons/lia";

const ProfileHeader = () => {
  // Ref를 사용하여 아래로 스크롤할 컴포넌트를 참조
  const targetRef = useRef(null);

  const handleScroll = () => {
    // 클릭 시 targetRef가 참조하는 요소로 스크롤 이동
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-center z-10">
      {/* <h1 className="text-6xl font-bold mb-4">Music to be Drawn by</h1> */}
      
      <div className="relative flex justify-center">
        <img 
          src='/lp-asset.png' 
          alt="LP Record" 
          className="w-6/12 min-w-80 h-auto mt-40 mb-20 relative z-10"
        />
      </div>

      <div className="flex items-center justify-center h-full">
        <LiaAngleDownSolid 
          className="mt-10 mb-1 cursor-pointer" 
          style={{ width: '60px', height: '30px', color: 'rgba(75, 85, 99, 0.1)' }} 
          onClick={handleScroll} // 클릭 이벤트 핸들러 추가
        />
      </div>

      {/* 타겟 요소 */}
      <div ref={targetRef}>
      </div>

      
    </div>
  );
};

export default ProfileHeader;
