import HeroBanner from './HeroBanner/HeroBanner';
import ItemList from './ItemList/ItemListContainer';

const Content = () => {
    return (
        <div className='content'>
            <HeroBanner title='Parrilla Premium Ya' subtitle='Todo de especial para tu asado' readmoreText='Sepa mas' readmoreLink='#'/>
            <ItemList/>
        </div>
    );
}
export default Content;