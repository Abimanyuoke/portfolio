// import Image, { StaticImageData } from "next/image";

// interface TechItemProps {
//     title: string;
//     IMGUrl: StaticImageData;
// }

// export default function TechItem({ title, IMGUrl }: TechItemProps) {
//     return (
//         <div className="bg-dark-200 flex justify-center px-16 lg:w-[280px] py-4 items-center border-2 border-surface-50 rounded-[8px]">
//             <Image src={IMGUrl} alt={title} />
//             <p className="text-surface-50 text-[18px] font-normal ml-6">{title}</p>
//         </div>
//     );
// }

import Image, { StaticImageData } from "next/image";

interface TechItemProps {
    title: string;
    IMGUrl: StaticImageData;
}

export default function TechItem({ title, IMGUrl }: TechItemProps) {
    return (
        <div className="bg-dark-200 flex items-center justify-center gap-x-4 w-[240px] py-4 border-2 border-surface-50 rounded-lg">
            <Image src={IMGUrl} alt={title} width={28} height={28} />
            <p className="text-surface-50 text-[16px] font-normal truncate" title={title}>
                {title}
            </p>
        </div>
    );
}

