import AboutWidget from './AboutWidget/AboutWidget';
import ContactWidget from './ContactWidget/ContactWidget';
import CopyWidget from './CopyWidget/CopyWidget';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <AboutWidget/>
                    <ContactWidget/>
                </div>
            </div>
           <CopyWidget/>
        </footer>
    );
}
export default Footer;