import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';



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

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
        })
    ),
    localColor: PropTypes.string,
    localSender: PropTypes.string,
    remoteColor: PropTypes.string,
    changeLike: PropTypes.func
}

export default ChatLog;
