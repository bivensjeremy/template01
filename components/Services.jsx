import { fontFira } from "@/config/fonts";
import { Button } from "@heroui/button";
import { Card, CardFooter, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";


const Services = () => {

    const serviceData = [
        {
            title: 'Consultation',
            description: 'Use this area to describe your service',
            duration: '45 min',
            cost: 'Free'
        },
        {
            title: 'Sample Service 01',
            description: 'Use this area to describe your service',
            duration: '1 hr',
            cost: '$70'
        },
        {
            title: 'Sample Service 02',
            description: 'Use this area to describe your service',
            duration: '1 hr',
            cost: '$110'
        },
        {
            title: 'Sample Service 03',
            description: 'Use this area to describe your service',
            duration: '1 hr',
            cost: '$180'
        }
    ]

    return (
        <section id="Services" className="px-24 py-12 bg-secondary">
            <div className="container">
                <SectionHeader title={'Services'} />

                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                    {serviceData.map(({ title, description, duration, cost }) => (
                        <div key={title}>
                            <Card radius="none" className="border-8 bg-transparent border-grey">
                                <CardHeader className="flex gap-3">
                                    <p className={clsx(fontFira.className, "text-xl uppercase mx-auto text-grey")}>
                                        {title}
                                    </p>
                                </CardHeader>

                                <hr className="border-2 border-grey" />

                                <CardBody className="mx-auto text-center gap-10">
                                    <p>{description}</p>
                                    <p>{duration}</p>
                                    <p className="italic">{cost}</p>
                                </CardBody>


                                <CardFooter>
                                    <Button className="mx-auto bg-grey text-white" variant="solid" radius="none" >
                                        Book
                                    </Button>
                                </CardFooter>
                            </Card>
                        
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    );
}

export default Services;