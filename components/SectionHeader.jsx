import clsx from "clsx";
import { fontFira } from '@/config/fonts';

const SectionHeader = ({ title }) => {
    return (
        <h2 className={clsx(fontFira.className, 'uppercase text-4xl pb-12 text-grey')}>
            {title}
            <hr className="max-w-72 border-4 border-grey mt-2" />
        </h2>
    );
}

export default SectionHeader;