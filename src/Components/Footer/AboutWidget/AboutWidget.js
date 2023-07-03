import BrandWidgetFooter from "./BrandWidgetFooter";
import PaymentImage from '../../../assets/images/payment.webp';

const AboutWidget = () => {

    return (
        <div className="about col-md-4">
            <BrandWidgetFooter/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum mi ex, eget gravida massa facilisis consectetur.</p>
            <img src={PaymentImage} alt="payment"/>
        </div>
    );
}
export default AboutWidget;