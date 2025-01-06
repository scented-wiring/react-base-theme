import moduleIcon from '../../../assets/icons/text-icon.svg';
import { Island } from '@hubspot/cms-components';
import MySlider from '../../../components/islands/Slider.jsx?island';

export const Component = () => {
    return (
        <Island module={MySlider} />
    );
};


// Re-export the fields from fields.jsx
export { fields } from './fields.jsx';

// Export the metadata
export const meta = {
    label: '@Slider',
    global: 'false',
    inline_help_text: 'This is a module',
    host_template_types: ['PAGE'],
    icon: moduleIcon,
    categories: ['TEXT'],
}