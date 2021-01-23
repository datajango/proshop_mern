import React from 'react'
import PropTypes from 'prop-types'


const Rating = ({ value, text, color }) => {
    const starInfo = [
        { stars: 1, min: 0.5 },
        { stars: 2, min: 1.5 },
        { stars: 3, min: 2.5 },
        { stars: 4, min: 3.5 },
        { stars: 5, min: 4.5 },
    ];

    return (
        <div className='rating'>
            {starInfo.map(info => (
                <span>
                    <i
                        style={{ color }}
                        className={
                            value >= info.stars
                                ? 'fas fa-star'
                                : value >= info.min
                                    ? 'fas fa-star-half-alt'
                                    : 'far fa-star'
                        }
                    ></i>
                </span>
            ))}
            <span>{text && text}</span>
        </div>
    )
}

Rating.defaultProps = {
    color: '#f8e825',
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Rating
