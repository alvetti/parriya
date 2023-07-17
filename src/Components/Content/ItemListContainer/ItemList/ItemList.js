import ProductImage from '../../../../assets/images/product.jpg';

const ItemList = ({title,price}) => {

    return (
        <li className="products--item">
            <img className="products-item__img" src={ProductImage} alt="{title}"/>
            <div className="products--item__desc">
                <h4>{title}</h4>
                <div className="price">$ {price}</div>
            </div>
        </li>
    );
}
export default ItemList;