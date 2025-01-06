import { useState } from "react";
import cardsStyles from '../../styles/cards.module.css';

export default function FAQ({ defaultExpanded, readMoreButton, moreText }) {
    let [ expanded, setExpanded ] = useState(defaultExpanded);

    function handelReadMoreClick(e) {
        setExpanded(expanded == true ? false : true);
        console.log(expanded);
    }

    return (
        <div class="test">
            <button onClick={handelReadMoreClick}>{ readMoreButton }</button>
            <div className={ expanded ? 'cardsStyles.show' : cardsStyles.hide }>
                <p>{ moreText}</p>
            </div>
        </div>
    )
}