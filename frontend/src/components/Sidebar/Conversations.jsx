
import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversation 
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()} // You're already generating a random emoji here
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading && <span className='loading loading-spinner mx-auto'></span>}
    </div>
  );
};

export default Conversations;
