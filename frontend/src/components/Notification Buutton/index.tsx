import icon from '../../assets/img/notificar.svg';
import './styles.css';

function NotificationButton() {
    return (
        <>
            <div className="dsmeta-red-btn">
                <img src={icon} alt="Notificar"></img>
            </div>
        </>
    )
}

export default NotificationButton;
