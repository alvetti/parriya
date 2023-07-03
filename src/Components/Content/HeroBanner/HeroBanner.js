import Background from '../../../assets/images/meat.jpg';

const HeroBanner = ({image,title,subtitle,readmoreText,readmoreLink}) => {

    return (
        <div className="hero_banner" style={{ backgroundImage: `url(${Background})` }}>
            <div className='container'>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <a href={readmoreLink} title={readmoreText}>{readmoreText}</a>
            </div>
            <div className='overlay'></div>
        </div>
    );
}
export default HeroBanner;