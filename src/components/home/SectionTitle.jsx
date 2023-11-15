
const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full mb-12">
            <p className="w-full italic text-center text-xl mb-4 text-yellow-400 dark:text-gray-400 md:max-w-xl">
                {subheading}
            </p>
            <h2 className="text-3xl border-y-4 px-12 py-5 tracking-tight text-center text-gray-800 dark:text-white md:text-4xl md:leading-none">
                {heading}
            </h2>
        </div>
    );
};

export default SectionTitle;