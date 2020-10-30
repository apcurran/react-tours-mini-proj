import React, { useState } from 'react';

function Tour({ id, image, info, price, name, removeTour }) {
    const [readMore, setReadMore] = useState(false);

    const showAllText = readMore ? info : `${info.substring(0, 200)}...`;
    const readBtnText = readMore ? "Show Less" : "Read More";

    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {showAllText}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readBtnText}
                    </button>
                </p>
                <button onClick={() => removeTour(id)} className="delete-btn">Not Interested</button>
            </footer>
        </article>
    );
}

export default Tour;
