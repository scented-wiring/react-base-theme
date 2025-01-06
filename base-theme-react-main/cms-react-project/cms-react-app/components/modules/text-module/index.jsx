import moduleIcon from '../../../assets/icons/text-icon.svg';
import Background from '../../../components/module-components/background/index.jsx';
import Label from '../../../components/module-components/label/index.jsx';
import Title from '../../../components/module-components/title/index.jsx';
import BigText from '../../../components/module-components/bigText/index.jsx';
import { RichText } from '@hubspot/cms-components';
import Buttons from '../../../components/module-components/buttons/index.jsx';

export const Component = ({ fieldValues, hublData, hublParameters = {} }) => {
    const moduleId = fieldValues.module_settings.module_anchor;
    const moduleHide = fieldValues.module_settings.hide_module;
    const bgColor = fieldValues.module_settings.background_settings.background_color;
    const customBgColor = fieldValues.module_settings.background_settings.custom_bg_color;
    const contentWidth = fieldValues.group_style.content_width;
    const moduleWidth = fieldValues.group_style.module_width;
    const transform = fieldValues.group_style.label_style.text_transform;
    const labelColor = fieldValues.group_style.label_style.text_color_select;
    const columnsLayout = fieldValues.text_col_layout;
    const columns = fieldValues.text_columns;

    if (moduleHide) {
        return null;
    }
    
    return (
        <section id={moduleId} className={`base-wrapper ${bgColor} relative pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] px-[20px] md:px-[40px] ${ moduleWidth === 'contained' ? 'mx-auto max-w-[1440px]' : ''}`} style={bgColor === 'bg-custom' ? { backgroundColor: customBgColor } : {}}>
            <Background fieldPathing={fieldValues.module_settings} />
            <div className={`mx-auto z-10 relative max-w-[${contentWidth}px] text-dark bg-white`}>
                <div className="text__header">
                    <Label fieldValues={fieldValues} transform={transform} color={labelColor} />
                    <Title fieldValues={fieldValues} text={hublData.titleStripped} />
                    <BigText fieldValues={fieldValues} />
                    <div className="content mt-4">
                        <RichText fieldPath="module_content" />
                    </div>
                    <Buttons fieldValues={fieldValues} />
                </div>
                <div className={`text__body grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columnsLayout} gap-20 pt-20`}>
                    {columns.map((item, index) => (
                        <div key={index} className="text-cols__item">
                            <Label fieldValues={item} />
                            <div dangerouslySetInnerHTML={{ __html: item.column_content }} />
                            {item.buttons && item.buttons.length > 0 ? (
                                <Buttons fieldValues={{ buttons: item.buttons }} />
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Re-export the fields from fields.jsx
export { fields } from './fields.jsx';

// Export the metadata
export const meta = {
    label: '@Text',
    global: 'false',
    host_template_types: ['PAGE'],
    icon: moduleIcon,
    categories: ['TEXT'],
}

export const hublDataTemplate = `
    {% set hublData = 
        {
            "titleStripped": module.module_title|replace('<h1>', '')|replace('</h1>', '')|replace('<h2>', '')|replace('</h2>', '')|replace('<h3>', '')|replace('</h3>', '')|replace('<h4>', '')|replace('</h4>', '')|replace('<h5>', '')|replace('</h5>', '')
        }
    %}
`