import "./todo-list-item.css"


const TodoListItem = ({important, done, label, onToggleDone, onDeleted, onToggleImportant}) => {
    let classNames = 'todo-list-item';
    if (done) {
        classNames += ' done';
    }

    if (important) {
        classNames += ' important';
    }
    return (
        <span className={classNames}>
            <span
                className={"todo-list-item-label"}
                onClick={onToggleDone}
            >
            {label}
            </span>
            <button type={"button"}
                    className="btn btn-outline-success btn-sm float-end"
                    onClick={onToggleImportant}
            >
            <i className={"fa fa-exclamation"}/>
            </button>

            <button type={"button"}
                    className="btn btn-outline-danger btn-sm float-end"
                    onClick={onDeleted}
            >
                <i className={"fa-solid fa-x"}/>
            </button>
        </span>

    );
}
export default TodoListItem;

