import { fontFira } from "@/config/fonts";
import { Button } from "@heroui/button";
import clsx from "clsx";
import Image from "next/image";
import { FaFacebook, FaTiktok, FaInstagram, FaXTwitter } from "react-icons/fa6";
import SectionHeader from "./SectionHeader";
import HoneyBookWidget from "./HoneyBookWidget";
import { siteConfig } from "@/config/site";
import { footerData } from "@/config/data";
import { Link } from "@heroui/link";

const Contact = () => {

    return (
        <section id="contact" className="pt-6 rounded-t-lg">
            <div className="px-4 md:px-24 pt-12">
                <div className="container">
                    <div className="">
                        <div className="">
                            <SectionHeader title={'Contact'} />

                            <div className="">
                                <HoneyBookWidget />
                            </div>

                            <div className="flex justify-center gap-4 text-2xl text-primary mb-1">
                                {footerData.map(({ id, link, image: Icon, color }) => (
                                    <Link isExternal key={id} href={link}>
                                        <Icon 
                                            size={16}
                                            color={color} 
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>





        // <div className="min-h-screen bg-[#005cb6]">
        //     <div className="container flex flex-row">
        //         <div className="w-1/2 bg-red-200 flex flex-col">
        //             <div className="pt-12">
        //                 <h2 className={clsx(fontFira.className, 'uppercase text-4xl pb-12')}>
        //                     Contact
        //                 </h2>
                        

        //                 <p className={clsx('pb-12')}>
        //                     123 Your Business Address <br/>Atlanta, GA 30303<br />
        //                 </p>

        //                 <p className={clsx('pb-12')}>
        //                     Tel: 123-456-7890
        //                 </p>
            
        //                 <p className={clsx('pb-12')}>
        //                     123 Your Business Address <br/>Atlanta, GA 30303<br />
        //                 </p>

        //                 <div className={clsx('pb-12 flex flex-row justify-evenly')}>
        //                     <FaFacebook />
        //                     <FaInstagram />
        //                     <FaXTwitter />
        //                     <FaTiktok />
        //                 </div>
        //             </div>
        //         </div>
            

        //     <div className="w-1/2 ">
                // <Form
                //         className="w-full gap-4"
                //         onReset={() => setAction("reset")}
                //         onSubmit={(e) => {
                //             e.preventDefault();
                //             let data = Object.fromEntries(new FormData(e.currentTarget));

                //             setAction(`submit ${JSON.stringify(data)}`);
                //         }}
                //     >
                //         <div className="grid grid-cols-2 gap-4">
                //             <Input
                //                 isRequired
                //                 errorMessage="Please enter a valid username"
                //                 label="Username"
                //                 labelPlacement="outside"
                //                 name="username"
                //                 placeholder="Enter your username"
                //                 type="text"
                //             />

                //             <Input
                //                 isRequired
                //                 errorMessage="Please enter a valid email"
                //                 label="Email"
                //                 labelPlacement="outside"
                //                 name="email"
                //                 placeholder="Enter your email"
                //                 type="email"
                //             />

                //             <Input
                //                 isRequired
                //                 errorMessage="Please enter a valid username"
                //                 label="Username"
                //                 labelPlacement="outside"
                //                 name="username"
                //                 placeholder="Enter your username"
                //                 type="text"
                //                 className="col-span-2"
                //             />

                //             <Input
                //                 isRequired
                //                 errorMessage="Please enter a valid username"
                //                 label="Username"
                //                 labelPlacement="outside"
                //                 name="username"
                //                 placeholder="Enter your username"
                //                 type="text"
                //                 className="col-span-2"
                //             />

                //             <Textarea
                //                 isRequired
                //                 className="col-span-2"
                //                 label="Description"
                //                 labelPlacement="outside"
                //                 placeholder="Enter your description"
                //             />
                //         </div>
                        
                //         <div className="flex gap-2">
                //             <Button color="primary" type="submit">
                //             Submit
                //             </Button>
                //             <Button type="reset" variant="flat">
                //             Reset
                //             </Button>
                //         </div>

                //         {action && (
                //             <div className="text-small text-default-500">
                //             Action: <code>{action}</code>
                //             </div>
                //         )}
                //     </Form> 
        //     </div>
        // </div>
        // </div>

        // <div className="bg-red-200">
        //     <div className="container mx-auto flex flex-row">
        //         <div className="w-1/2 flex flex-col bg-blue-200">
        //             <h2 className={clsx(fontFira.className, 'uppercase text-3xl pb-12')}>
        //                 Contact
        //             </h2>

        //             <p className={clsx('pb-12')}>
        //                 123 Your Business Address <br/>Atlanta, GA 30303<br />
        //             </p>

        //             <p className={clsx('pb-12')}>
        //                 Tel: 123-456-7890
        //             </p>

        //             <p className={clsx('pb-12')}>
        //                 123 Your Business Address <br/>Atlanta, GA 30303<br />
        //             </p>

        //             <div className={clsx('pb-12 flex flex-row justify-normal')}>
        //                 <FaFacebook />
        //                 <FaInstagram />
        //                 <FaXTwitter />
        //                 <FaTiktok />
        //             </div>
        //         </div>

        //         <div className="w-1/2 bg-red-200">
                    // <Form
                    //     className="w-full gap-4"
                    //     onReset={() => setAction("reset")}
                    //     onSubmit={(e) => {
                    //         e.preventDefault();
                    //         let data = Object.fromEntries(new FormData(e.currentTarget));

                    //         setAction(`submit ${JSON.stringify(data)}`);
                    //     }}
                    // >
                    //     <div className="grid grid-cols-2 gap-4">
                    //         <Input
                    //             isRequired
                    //             errorMessage="Please enter a valid username"
                    //             label="Username"
                    //             labelPlacement="outside"
                    //             name="username"
                    //             placeholder="Enter your username"
                    //             type="text"
                    //         />

                    //         <Input
                    //             isRequired
                    //             errorMessage="Please enter a valid email"
                    //             label="Email"
                    //             labelPlacement="outside"
                    //             name="email"
                    //             placeholder="Enter your email"
                    //             type="email"
                    //         />

                    //         <Input
                    //             isRequired
                    //             errorMessage="Please enter a valid username"
                    //             label="Username"
                    //             labelPlacement="outside"
                    //             name="username"
                    //             placeholder="Enter your username"
                    //             type="text"
                    //             className="col-span-2"
                    //         />

                    //         <Input
                    //             isRequired
                    //             errorMessage="Please enter a valid username"
                    //             label="Username"
                    //             labelPlacement="outside"
                    //             name="username"
                    //             placeholder="Enter your username"
                    //             type="text"
                    //             className="col-span-2"
                    //         />

                    //         <Textarea
                    //             isRequired
                    //             className="col-span-2"
                    //             label="Description"
                    //             labelPlacement="outside"
                    //             placeholder="Enter your description"
                    //         />
                    //     </div>
                        
                    //     <div className="flex gap-2">
                    //         <Button color="primary" type="submit">
                    //         Submit
                    //         </Button>
                    //         <Button type="reset" variant="flat">
                    //         Reset
                    //         </Button>
                    //     </div>

                    //     {action && (
                    //         <div className="text-small text-default-500">
                    //         Action: <code>{action}</code>
                    //         </div>
                    //     )}
                    // </Form>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Contact;