import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    saleId: number;
}

function handleClick(saleId: number) {
    axios.get(`${BASE_URL}/sales/${saleId}/notification`)
        .then(response => {
            console.log(response);
        });
}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="dsmeta-red-bnt" onClick={() => { handleClick(saleId) }}>
            <img src={icon} alt="Notificar" />
        </div>
    );
}

export default NotificationButton;