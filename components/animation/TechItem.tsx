import Image, { StaticImageData } from "next/image";

interface TechItemProps {
    title: string;
    ImgTech: StaticImageData;
}

export default function TechItem({ title, ImgTech }: TechItemProps) {
    return (
        <div className="bg-dark-200 dark:bg-black flex justify-center w-[200px] lg:w-[250px] py-4 items-center border-2 border-surface-50 dark:border-white rounded-[8px] mx-1">
            <Image src={ImgTech} alt={title} className="w-[30px] h-[30px]" />
            <p className="text-surface-50 dark:text-white text-base font-normal ml-5">{title}</p>
        </div>
    );
}

