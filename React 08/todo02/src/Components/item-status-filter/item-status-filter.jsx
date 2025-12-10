import "./item-status-filter.css"
const ItemStatusFilter = (props) => {
    return (
        <div className="btn-group">
            <button className={"btn btn-info"} type={"button"}>All</button>
            <button className={"btn btn-outline-secondary"} type={"button"}>Active</button>
            <button className={"btn btn-outline-secondary"} type={"button"}>Done</button>
        </div>
    )
}

export default ItemStatusFilter;