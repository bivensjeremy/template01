'use client'
import { FAQData } from "@/config/data";
import { Accordion, AccordionItem } from "@heroui/accordion";
import SectionHeader from "./SectionHeader";

const FAQs = () => {
    return (
        <section className="px-4 md:px-24 py-12 bg-accent">
            <SectionHeader
                title="Frequently Asked Questions"
            />

            <div className="max-w-3xl w-full flex flex-col items-center justify-center m-auto">
                <Accordion>
                    {FAQData.map(({ id, q, a}) => (
                        <AccordionItem key={id} title={q}>
                            {a}
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            

        </section>
    );
}

export default FAQs;