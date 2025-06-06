export const completeTodos = (props) => {
    const {todos, onClickBack} = props;
    return(
        <div className='complete-area'>
    <p className='title'>完了のTODO</p>
    <ul>
        {todos.map((todo, index) => {
            return(
                <li key={todo}>
                <div className='list-row'>
                    <p className='todo-item'>{todo}</p>
                    <button onClick={() => {onClickBack}}>戻る</button>
                </div>
                </li>
            );
        })}
    </ul>
</div>
    );
};