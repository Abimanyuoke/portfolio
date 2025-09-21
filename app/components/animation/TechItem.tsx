import Image, { StaticImageData } from "next/image";

interface TechItemProps {
    title: string;
    ImgTech: StaticImageData;
}

export default function TechItem({ title, ImgTech }: TechItemProps) {
    return (
        <div className="bg-dark-200 flex justify-center lg:w-[250px] py-4 items-center border-2 border-surface-50 rounded-[8px] mx-1">
            <Image src={ImgTech} alt={title} className="w-[30px] h-[30px]"/>
            <p className="text-surface-50 text-base font-normal ml-5">{title}</p>
        </div>
    );
}

