import "./item-status-filter.css"

const ItemStatusFilter = ({filter, onFilterChange}) => {

    const buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    const buttonElements = buttons.map(({name, label}) => {
        const isActive = name === filter;
        const clazz = isActive ? 'btn btn-info' : 'btn btn-outline-secondary';

        return (
            <button
                key={name}
                className={clazz}
                type="button"
                onClick={() => onFilterChange(name)}>
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {buttonElements}
        </div>
    )
}

export default ItemStatusFilter;