import Filter from "./Filter";

const Filters = () => {
return (
    <div className="borderedContainer">
      <b>Chose category: </b>
      {['fruit', 'vegetable', 'all']
      .map(category => <Filter 
        category={category} 
        isActive={false}
        />)
      }
    </div>
)
}

export default Filters;