import styles from "../../../styles/cards.module.css";
import { RichText } from '@hubspot/cms-components';

export const Component = ({ fieldValues, hublParameters = {} }) => {
    const { module_title: title } = fieldValues;
    const label = fieldValues.text_settings.label1;
    const { text_group: textGroup } = fieldValues;

    return (
        <div className={styles.wrapper}>
            <div className="card__header">
                <span className="label">{label}</span>
                <RichText fieldPath="text_settings.content" />
            </div>
            <h1>{title}</h1>
            <RichText fieldPath="module_title_2" />
            <div className={styles.grid}>
                {textGroup.map((item, index) => (
                    <div key={index} className="grid-item">
                        <h3>{item.text_item}</h3>
                    </div>
                ))}
            </div>
            <RichText fieldPath="module_title_3" />
        </div>
    );
}

// Re-export the fields from fields.jsx
export { fields } from './fields.jsx';

// Export the metadata
export const meta = {
    label: `Cards`,
}