import Background from '../../../assets/images/meat.jpg';

const HeroBanner = ({image,title,subtitle,readmoreText,readmoreLink}) => {

    return (
        <div>
            <div className="hero_banner" style={{ backgroundImage: `url(${Background})` }}>
                <div className="container">
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                </div>
                <div className="overlay"></div>
            </div>
            <div className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <i className="fa-solid fa-truck-fast"></i> Envíos a todo el país
                        </div>
                        <div className="col-md-4">
                            <i className="fa-solid fa-credit-card"></i> 3 Cuotas Sin Interés
                        </div>
                        <div className="col-md-4">
                            <i className="fa-solid fa-shield-halved"></i> Comprá Seguro
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeroBanner;