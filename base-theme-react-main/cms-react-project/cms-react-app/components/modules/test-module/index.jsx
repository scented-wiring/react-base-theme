import { Island } from '@hubspot/cms-components';
import Accordion from './test.jsx?island';

export const Component = ({ fieldValues, hublParameters = {} }) => {
    const { module_title: title } = fieldValues;
    const { text_group: textGroup } = fieldValues;

    return (
        <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                {title}
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-black sm:text-[40px]/[48px]">
                                Any Questions? Look Here
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <Island module={Accordion} group={textGroup} fieldValues={fieldValues} hublParameters={hublParameters} hydrateOn="load" />
            </div>
        </section>
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
