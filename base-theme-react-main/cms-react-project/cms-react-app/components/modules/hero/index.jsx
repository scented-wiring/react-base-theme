import { RichText } from '@hubspot/cms-components';
import ModuleIcon from '../../../assets/icons/hero-icon.svg';
import Background from '../../module-components/background/index.jsx';
import Label from '../../module-components/label/index.jsx';
import Title from '../../module-components/title/index.jsx';
import BigText from '../../module-components/bigText/index.jsx';
import Buttons from '../../module-components/buttons/index.jsx';

export const Component = ({ fieldValues, hublData, hublParameters = {} }) => {
    const moduleId = fieldValues.module_settings.module_anchor;
    const moduleHide = fieldValues.module_settings.hide_module;
    const bgColor = fieldValues.module_settings.background_settings.background_color;
    const customBgColor = fieldValues.module_settings.background_settings.custom_bg_color;
    const contentWidth = fieldValues.group_style.content_width;
    const contentPosition = fieldValues.group_style.content_position;
    const contentAlignment = fieldValues.group_style.content_alignment;
    const moduleWidth = fieldValues.group_style.module_width;
    const transform = fieldValues.group_style.label_style.text_transform;
    const labelColor = fieldValues.group_style.label_style.text_color_select;

    if (moduleHide) {
        return null;
    }

    return (
        <section id={moduleId} className={`base-wrapper ${bgColor} relative pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] px-[20px] md:px-[40px] ${ moduleWidth === 'contained' ? 'mx-auto max-w-[1440px]' : ''}`} style={bgColor === 'bg-custom' ? { backgroundColor: customBgColor } : {}}>
            <Background fieldPathing={fieldValues.module_settings} />
            <div className={`mx-auto z-10 relative mx-auto max-w-[1440px] text-white`}>
                <div className={`
                    text__header 
                    max-w-[${contentWidth}px] 
                    ${contentPosition === 'right' ? 'ml-auto' : contentPosition === 'center' ? 'mx-auto' : ''} 
                    text-${contentAlignment} 
                    justify-items-${contentAlignment === 'right' ? 'end' : contentAlignment === 'left' ? 'start' : 'center'}
                `}>
                    <Label fieldValues={fieldValues} transform={transform} color={labelColor} />
                    <Title fieldValues={fieldValues} text={hublData.titleStripped} />
                    <BigText fieldValues={fieldValues} />
                    <div className="content mt-4">
                        <RichText fieldPath="module_content" />
                    </div>
                    <Buttons fieldValues={fieldValues} />
                </div>
            </div>
        </section>
    );
}

// Re-export the fields from fields.jsx
export { fields } from './fields.jsx';

// Export the metadata
export const meta = {
    label: 'Hero',
    global: 'false',
    inline_help_text: 'The Hero module is a prominent, full-width section at the top of your webpage. It sets the tone for your content by showcasing key messages, eye-catching visuals, and calls-to-action. Designed to grab attention and engage visitors instantly, it often includes headlines, subtext, buttons, and background images or videos. Ideal for making a strong first impression.',
    host_template_types: ['PAGE'],
    icon: ModuleIcon
}

export const hublDataTemplate = `
    {% set hublData = 
        {
            "titleStripped": module.module_title|replace('<h1>', '')|replace('</h1>', '')|replace('<h2>', '')|replace('</h2>', '')|replace('<h3>', '')|replace('</h3>', '')|replace('<h4>', '')|replace('</h4>', '')|replace('<h5>', '')|replace('</h5>', '')
        }
    %}
`