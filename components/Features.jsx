import { Card, CardBody, CardHeader } from "@heroui/card";
import { FaCalendarAlt, FaPuzzlePiece, FaHashtag, FaMobileAlt } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { featuresData } from "@/config/data";

const Features = () => {
    return (
        <section className="flex flex-col items-center justify-center bg-accent py-12 px-4 md:px-24">
            <div className="container">
                <SectionHeader title='Features' />
                <p className="text-lg mb-6 max-w-4xl">What do you offer that makes you different from others? <br />Ask yourself how can I bring value to my clients?</p>

                <div className="grid w-full md:w-[600px] grid-cols-1 md:grid-cols-2 place-content-center gap-4 m-auto">
                    {featuresData.map(({ id, title, desc, icon: Icon }) => (
                        <Card key={id} className="p-6 dark:text-background">
                            <CardHeader className="flex flex-col">
                                <Icon size={64} />
                            </CardHeader>

                            <CardBody className="max-w-sm m-auto">
                                <p className="text-center">{desc}</p>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;