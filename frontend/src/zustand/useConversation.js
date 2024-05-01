import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
}));

export default useConversation; 
// import { create } from "zustand";

// const useConversation = create((set) => ({
// 	selectedConversation: null,
// 	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
// 	messages: [],
// 	setMessages: (messages) => set({ messages }),
// }));

// // Destructure the returned object and return an array with the required elements
// export const useConversationState = () => {
//   const { selectedConversation, setSelectedConversation } = useConversation();
//   return [selectedConversation, setSelectedConversation];
// }

// // Optionally, you can export other parts of the state if needed
// export const useMessagesState = () => {
//   const { messages, setMessages } = useConversation();
//   return [messages, setMessages];
// }

// export default useConversationState;
