const ColorChoice = (props) => {

    return (
        <section>
            <button onClick={() => props.setColorCallback('red')}>🔴</button>
            <button onClick={() => props.setColorCallback('orange')}>🟠</button>
            <button onClick={() => props.setColorCallback('yellow')}>🟡</button>
            <button onClick={() => props.setColorCallback('green')}>🟢</button>
            <button onClick={() => props.setColorCallback('blue')}>🔵</button>
            <button onClick={() => props.setColorCallback('purple')}>🟣</button>
        </section >
    )
};

export default ColorChoice;