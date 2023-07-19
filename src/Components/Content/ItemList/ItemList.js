import Item from "../Item/Item";

const ItemList=({item})=>{
   
    return(
        <div className="products">
            {item.map(item=>
                <div className="products--item" key={item.id}>
                    <Item item={item}/>
                </div>
            )}
        </div>
        
    )
}
export default ItemList;