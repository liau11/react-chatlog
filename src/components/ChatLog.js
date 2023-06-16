import ChatEntry from './ChatEntry';



const ChatLog = ({ entries, localColor, localSender, remoteColor, pressLike }) => {
    return (
        <div>
            {entries.map((entry, index) => (
                <ChatEntry
                    key={index}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    changeLike={pressLike}
                    localColor={localColor}
                    remoteColor={remoteColor}
                    localSender={localSender}
                />
            ))}
        </ div >
    )
};

export default ChatLog;
