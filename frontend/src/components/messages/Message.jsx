import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const formattedTime = extractTime(message.createdAt);
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : '';

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img
            src={profilePic}
            alt="user avatar"
          />
        </div>
      </div>

      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;



// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//         <div className='chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                 <img
//                     src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} 
//                     alt="user avatar"
//                 />
//             </div>
//         </div>  

//         <div className={'chat-bubble text-white bg-blue-500'}>Hi! What's up?</div>     
//         <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>19:59</div>
//     </div>
//   )
// }

// export default Message