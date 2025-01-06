import { Island } from '@hubspot/cms-components';
import FAQ from '../../../components/islands/FAQ.jsx?island';
import styles from "../../../styles/cards.module.css";

export const ImageSwiper = ({ fieldValues, hublParameters = {} }) => {
    const { text_group: textGroup } = fieldValues;
    
    return (
        <div className={styles.wrapper, styles.grid}>
            <div className={styles.grid}>
                {textGroup.map((item, index) => (
                    <Island module={FAQ} readMoreButton={item.text_item} moreText={item.text_item_more} />
                ))}
            </div>
        </div>
    );
}

// Re-export the fields from fields.jsx
export { fields } from './fields.jsx';

// Export the metadata
export const meta = {
    label: 'FAQ',
    global: 'false',
    inline_help_text: 'This is a module',
    host_template_types: ['PAGE'],
    icon: '',
    categories: ['DESIGN'],
}
