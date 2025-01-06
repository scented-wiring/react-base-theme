import moduleIcon from '../../../assets/icons/text-icon.svg';
import Wrapper from '../../../components/grouped-components/module-wrapper/index.jsx';

export const Component = ({ fieldValues, hublData, hublParameters = {} }) => {
    return (
        <Wrapper 
        customContentClasses={`testClass`}
        hideContentWidth={true} 
        modulePath={fieldValues} 
        customClasses={`pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] px-[20px] md:px-[40px]`}>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
        </Wrapper>
    );
}

// Re-export the fields from fields.jsx
export { fields } from './fields.jsx';

// Export the metadata
export const meta = {
    label: '@Text Columns',
    global: 'false',
    host_template_types: ['PAGE'],
    icon: moduleIcon,
    categories: ['TEXT'],
}