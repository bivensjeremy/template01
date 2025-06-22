'use client'
import { fontFira } from "@/config/fonts";
import { Button } from "@heroui/button";
import {Form} from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaTiktok, FaInstagram, FaXTwitter } from "react-icons/fa6";
import SectionHeader from "./SectionHeader";

const Contact = () => {
    const [action, setAction] = useState(null);

    return (
        <section id="Contact" className="pt-6 rounded-t-lg">
            <div className=" px-24 py-12">
                <div className="container flex flex-col md:flex-row">
                    <div className="w-1/2 flex flex-col">
                        <div className="">
                            <SectionHeader title={'Contact'} />
                            

                            <p className={clsx('pb-12')}>
                                123 Your Business Address <br/>Atlanta, GA 30303<br />
                            </p>

                            <p className={clsx('pb-12')}>
                                Tel: 123-456-7890
                            </p>

                            <p className={clsx('pb-12')}>
                                you@yourawesomebusiness.com
                            </p>

                            <div className={clsx('pb-12 flex flex-row justify-between  max-w-sm')}>
                                <FaFacebook className="w-5 h-5" />
                                <FaInstagram className="w-5 h-5" />
                                <FaXTwitter className="w-5 h-5" />
                                <FaTiktok className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <Form
                            className="gap-4 "
                            onReset={() => setAction("reset")}
                            onSubmit={(e) => {
                                e.preventDefault();
                                let data = Object.fromEntries(new FormData(e.currentTarget));

                                setAction(`submit ${JSON.stringify(data)}`);
                            }}
                        >
                            <div className="grid gap-4 w-full">
                                <Input
                                    isRequired
                                    errorMessage="Please enter a valid first name"
                                    label="First Name"
                                    labelPlacement="outside"
                                    name="fistName"
                                    placeholder="Enter your first name"
                                    type="text"
                                />

                                <Input
                                    isRequired
                                    errorMessage="Please enter a valid last name"
                                    label="Last Name"
                                    labelPlacement="outside"
                                    name="lastName"
                                    placeholder="Enter your last name"
                                    type="text"
                                />

                                <Input
                                    isRequired
                                    errorMessage="Please enter your email"
                                    label="Email"
                                    labelPlacement="outside"
                                    name="emailAddress"
                                    placeholder="Enter your email"
                                    type="email"
                                    className="col-span-2"
                                />

                                <Input
                                    errorMessage="Please enter a valid subject"
                                    label="Subject"
                                    labelPlacement="outside"
                                    name="username"
                                    placeholder="Enter your subject"
                                    type="text"
                                    className="col-span-2"
                                />

                                <Textarea
                                    className="col-span-2"
                                    label="Message"
                                    labelPlacement="outside"
                                    placeholder="Enter your message"
                                />
                            </div>
                            
                            <div className="flex gap-2 w-full flex-row justify-between">
                                <Button type="reset" variant="flat">
                                Reset
                                </Button>

                                <Button color="secondary" type="submit">
                                Submit
                                </Button>
                            </div>
                        </Form> 
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