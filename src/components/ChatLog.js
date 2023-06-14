import ChatEntry from './ChatEntry';



const ChatLog = ({ messages }) => {

    return (
        <div>
            {messages.map((message, index) => (
                <ChatEntry
                    key={index}
                    sender={message.sender}
                    body={message.body}
                    timeStamp={message.timeStamp}
                />
            ))}
        </ div >
    )
};

export default ChatLog;