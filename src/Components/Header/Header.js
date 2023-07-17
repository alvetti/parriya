import BrandWidget from './BrandWidget/BrandWidget';
import CartWidget from './CartWidget/CartWidget';
import NavbarWidget from './NavbarWidget/NavbarWidget';

const Header = () => {
    return (
        <header className='header'>
            <div className='top_bar'>
                <div className='container'>
                    <BrandWidget/>
                    <CartWidget/>
                </div>
            </div>
            <div className='menu'>
                <div className='container'>
                    <NavbarWidget/>
                </div>
            </div>
        </header>
    );
}
export default Header;