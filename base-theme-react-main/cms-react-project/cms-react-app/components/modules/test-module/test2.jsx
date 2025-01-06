export default function AccordionItem({ header, text, isActive, onClick, index }) {
    return (
        <div onClick={onClick} aria-expanded={isActive} className={`cursor-pointer self-baseline mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8 ${isActive ? 'active' : ''}`}>
            <div className="faq-btn flex w-full text-left">
                {header}
            </div>
            <div className={`mt-2 text-body-color dark:text-dark-6 ${isActive ? 'block' : 'hidden'}`}>
                {text}
            </div>
        </div>
    );
}