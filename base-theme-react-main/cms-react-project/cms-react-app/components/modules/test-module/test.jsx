import { useState } from "react";
import AccordionItem from './test2.jsx';

const Accordion = ({ fieldValues, group, hublParameters  = {} }) => {
    console.log(fieldValues)
    const [activeIndex, setActiveIndex] = useState(null); // Tracks the index of the active item

    function handleAccordionItemClick(index) {
        setActiveIndex(index === activeIndex ? null : index); // Toggle active item
    }

    return (
        <div className="w-full grid grid-cols-3 gap-4">
            {group.map((item, index) => (
                <AccordionItem
                    key={index}
                    index={index}
                    header={item.text_item}
                    text={item.content_item}
                    isActive={index === activeIndex}
                    onClick={() => handleAccordionItemClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;