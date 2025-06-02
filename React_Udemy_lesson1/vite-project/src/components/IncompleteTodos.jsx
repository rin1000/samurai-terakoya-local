export const incompleteTodos = (props) => {
    const {todos, onClickComplete, onClickDelete} = props;
    return(
        <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
            {todos.map((todo, index) => {
            return(
                <li key={todo}>
                <div className='list-row'>
                    <p className='todo-item'>{todo}</p>
                    <button onClick={() => {onClickComplete}}>完了</button>
                    <button onClick={() => {onClickDelete}}>削除</button>
                </div>
                </li>
            );
            })}
        </ul>
        </div>
    )
};