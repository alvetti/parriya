import BrandWidget from './BrandWidget/BrandWidget';
import CartWidget from './CartWidget/CartWidget';
import NavbarMenu from './Navbar/Navbar';
import Navbar from './Navbar/Navbar';
import NavbarMobile from './Navbar/NavbarMobile';

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
                    <NavbarMenu/>
                </div>
            </div>
        </header>
    );
}
export default Header;