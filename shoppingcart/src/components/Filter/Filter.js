const Filter = ({isActive, category}) => {
    return (
        <span 
        className={isActive ?
     'filterButton filterButtonActive' : 'filterButton'
        }
        >
        {category}
        </span>
    )
    }
    
    export default Filter;