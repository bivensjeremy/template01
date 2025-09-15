'use client'
import { fontFira } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { useTheme } from "next-themes";

const Hero = () => {
    const { theme } = useTheme();
    const isLight = theme === "light";

    return (
        <section id='home' className={`
            min-h-screen bg-cover bg-center 
            ${isLight ? "bg-[url('/wallpaper02.jpg')]" : "bg-[url('/wallpaper.png')]"}
        `}>
            <div className="min-h-screen text-start flex flex-col justify-end max-w-4xl pb-24 px-4 md:px-24">
                <h1 className={clsx('pt-12 font-bold text-xl text-zinc-50')}>
                    <span className='text-[#1f3c88] bg-zinc-50 rounded-md p-1'>Blueprint Web Dev</span> Template Website
                </h1>
        
                <h1 className={clsx(
                    fontFira.className,
                    "font-heading text-7xl font-bold mb-4 max-w-6xl text-primary-foreground"
                )}>
                    <span className="text-shadow-md"></span>Your Awesome Business
                </h1>

                <p className="text-lg mb-6 max-w-xl text-primary-foreground">
                    Blueprint Web Dev offers several template websites to get your business up and running fast. These sites are perfect for startups and small businesses who need a quick, polished web presence. Click the link below to get started.
                </p>
                
                <div className="flex flex-col md:flex-row gap-2 max-w-sm md:max-w-md">
                    <Button
                        as={Link}
                        color="primary"
                        size="lg"
                        isExternal
                        href={siteConfig.company.lead}
                        variant="solid"
                        radius="lg"
                        className="font-semibold w-full"
                    >
                        Get This Layout
                    </Button>

                    <Button
                        as={Link}
                        color="accent"
                        size="lg"
                        isExternal
                        href={siteConfig.links.business2}
                        variant="bordered"
                        radius="lg"
                        className="font-semibold text-secondary-foreground w-full"
                    >
                        Blueprint Web Dev
                    </Button>
                </div>
                
            </div>
        </section>
    );
}

export default Hero;