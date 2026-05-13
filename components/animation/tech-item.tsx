import Image from "next/image";

export default function TechItem({ title, ImgTech }: { title: string, ImgTech: any }) {
    return (
        <div className="flex items-center space-x-3 whitespace-nowrap group cursor-default">
            <div className="w-6 h-6 md:w-8 md:h-8 relative flex-shrink-0">
                <Image
                    src={ImgTech}
                    alt={title}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
            </div>
            <span className="text-zinc-400 group-hover:text-current font-medium text-sm md:text-lg transition-colors">
                {title}
            </span>
        </div>
    );
}