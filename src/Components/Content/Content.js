import HeroBanner from './HeroBanner/HeroBanner';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const Content = () => {
    return (
        <div className='content'>
            <HeroBanner title='Parrilla Premium Ya' subtitle='Todo de especial para tu asado' readmoreText='Sepa mas' readmoreLink='#'/>
            <ItemListContainer/>
        </div>
    );
}
export default Content;