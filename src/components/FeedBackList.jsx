import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedBackItem from './FeedBackItem';
import FeedbackContext from '../context/FeedbackContext'

const FeedBackList = () => {

    const { feedback } = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.dev
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedBackItem item={item} />
                    </motion.dev>
                ))}
            </AnimatePresence>
        </div>
    )

}


export default FeedBackList
