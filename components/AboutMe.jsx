import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from './SectionHeader';

const AboutMe = () => {
    return (
        <section id="AboutMe" className="min-h-screen bg-primary">
            <div className="container flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 bg-blue-200 flex flex-col">
                    <div className="px-24 pt-12">
                        <SectionHeader title={'About Me'} />
                        <div className="max-w-md">
                            <p className="text-justify pb-12">
                                This is a great place to describe who you are and your business. You can use this space to go into detail about your company and the services you offer. Are you a solo-preneur or do you have a team? Why should customers trust you? What makes you stand apart? Talk about all of that here!
                            </p>

                            <p className="text-justify pb-12">
                                Here is more space to talk about your background, qualifications and interests. Clients love to know what makes you relatable. Or you can focus on the business and why you offer the services you are offering. 
                            </p>

                            <div className="pb-12">
                                <Button href="/book" color="secondary" size="lg">
                                    Get This Design
                                </Button>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <div className="w-full sm:w-1/2">
                    <Image 
                        src={'/pixar_image-2.png'}
                        alt="Pixar Image"
                        width={500}
                        height={500}
                        className="mx-auto"
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;