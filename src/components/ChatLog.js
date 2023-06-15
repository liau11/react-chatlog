import ChatEntry from './ChatEntry';



const ChatLog = ({ entries, pressLike }) => {
    return (
        <div>
            {entries.map((entry, index) => (
                <ChatEntry
                    key={index}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    changeLike={pressLike}
                />
            ))}
        </ div >
    )
};

export default ChatLog;
