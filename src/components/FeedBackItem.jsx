import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


const FeedBackItem = ({ item }) => {

    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color='red' />
            </button>
            <button className="edit" onClick={() => editFeedback(item)}>
                <FaEdit color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedBackItem;