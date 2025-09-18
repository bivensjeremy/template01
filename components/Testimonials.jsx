import Image from "next/image";
import SectionHeader from "./SectionHeader";


const Testimonials = () => {
    const companyLogo = [
        'logo1',
        'logo2',
        'logo3',
        'logo4',
    ];

    return (
        <section className="px-4 md:px-24 py-12">
            <div className="container mx-auto">
                <SectionHeader title="Our Trusted Partners" />
                <div className="grid grid-cols-2 md:grid-cols-4 justify-around">
                    {companyLogo.map((logo, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                src={'/business_logo_alt.png'}
                                alt={`${logo} logo`}
                                width={150}
                                height={150}
                                radius="none"
                                className="w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
            
        
            
        </section>
    );
}

export default Testimonials;