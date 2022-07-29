import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutIconLinks = () => {
    return (
        <div className="about-link">
            <Link to='/about'>
                <FaQuestion size={30} />
            </Link>
        </div>
    )
}
{/* <Link to={{
    pathname: '/about',
    search: '?sort=name',
    hash: '#hello'
}}> */}
export default AboutIconLinks
