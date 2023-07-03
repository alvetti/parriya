import ItemListItem from './ItemListItem';

const ItemList = () => {

    return (
        <div className="item_list">
            <div className="container">
                <ul className="products">
                    <ItemListItem  title='Product Title 1' price='1000,00'/>
                    <ItemListItem  title='Product Title 2' price='200,00'/>
                    <ItemListItem  title='Product Title 3' price='300,00'/>
                    <ItemListItem  title='Product Title 4' price='800,00'/>
                    <ItemListItem  title='Product Title 5' price='1200,00'/>
                    <ItemListItem  title='Product Title 6' price='356,00'/>
                    <ItemListItem  title='Product Title 7' price='234,00'/>
                    <ItemListItem  title='Product Title 8' price='1890,00'/>
                    <ItemListItem  title='Product Title 9' price='2340,00'/>
                    <ItemListItem  title='Product Title 10' price='110,00'/>
                </ul>
            </div>
        </div>
    );
}
export default ItemList;