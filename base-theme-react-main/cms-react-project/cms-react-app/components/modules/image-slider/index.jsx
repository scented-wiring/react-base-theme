import { Island } from '@hubspot/cms-components';
import ImageSwiper from '../../islands/swiper.jsx?island';

export const Component = ({ fieldValues, hublParameters = {} }) => {
    return (
        <section className="image-slider__wrapper">
            <Island module={ImageSwiper} data={[]} />
        </section>       
    );
}

// Re-export the fields
export { fields } from './fields.jsx';

// Metadata
export const meta = {
    label: 'Image Slider',
    global: false,
    inline_help_text: 'This is a module',
    host_template_types: ['PAGE'],
    icon: '',
    categories: ['DESIGN'],
};
