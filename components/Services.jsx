import { fontFira } from "@/config/fonts";
import { Button } from "@heroui/button";
import { Card, CardFooter, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import clsx from "clsx";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { pricingPlans } from "@/config/data";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";

const Services = () => {

    return (
        <section id="services" className="px-4 md:px-24 py-12 bg-secondary">
            <div className="container mx-auto">
                <SectionHeader title={'Services'} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {pricingPlans.map(({ name, desc, price, features, featured, icon: Icon }, index) => (
                        <Card key={index} className={`dark:text-primary-foreground`}>
                            <CardHeader className='pb-0 px-6'>
                                <div className="flex gap-3">
                                    <Icon size={32} />
                                    <p className={clsx(
                                        fontFira.className, 
                                        "text-start text-lg"
                                    )}>
                                        {name}
                                    </p>
                                </div>
                            </CardHeader>

                            <CardBody>
                                <p className={clsx(
                                        fontFira.className, 
                                        "text-start text-4xl lg:text-5xl px-6"
                                    )}>
                                    {price}
                                </p>
                            </CardBody>

                            <CardBody>
                                <ul className="list-disc list-inside text-base px-6">
                                    {features.map((feature, idx) => (
                                        <li key={idx} className="flex gap-2 mb-3">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardBody>

                            <CardFooter>
                                <Button
                                    as={Link}
                                    color='primary'
                                    isExternal
                                    href={siteConfig.company.lead}
                                    variant="solid"
                                    className="font-semibold w-full"
                                >
                                    Get This Layout
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;