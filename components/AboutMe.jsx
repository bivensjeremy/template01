'use client'
import { Button } from "@heroui/button";
import Image from "next/image";
import SectionHeader from './SectionHeader';
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";

const AboutMe = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section id="about" className="bg-background">
            <div className="container grid grid-cols-1 md:grid-cols-2 px-4 md:px-24 py-12 gap-6">
                <div className="">
                    <SectionHeader title={'About Us'} />
                    <div className="">
                        <p className="text-justify pb-8">
                            This is a great place to describe who you are and your business. You can use this space to go into detail about your company and the services you offer. Are you a solo-preneur or do you have a team? Why should customers trust you? What makes you stand apart? Talk about all of that here!
                        </p>

                        <p className="text-justify pb-12">
                            Here is more space to talk about your background, qualifications and interests. Clients love to know what makes you relatable. Or you can focus on the business and why you offer the services you are offering. 
                        </p>

                        <div className="pb-12">
                            <Button
                                as={Link}
                                color="secondary"
                                size="lg"
                                isExternal
                                href={siteConfig.links.business2}
                                variant="solid"
                                className=""
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <Image 
                        src={isLight ? '/image_01.jpg' : '/image_02.png'}
                        alt="Pixar Image"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;