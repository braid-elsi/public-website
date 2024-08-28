"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import TwoColumn from "./TwoColumn";
import NavigationData from "../data/NavigationData";

// const navigation = [
//     {
//         name: "AI & the Brain",
//         children: [
//             {
//                 name: "How Computers Work",
//                 description: "Something about edge computing...",
//                 href: "#",
//                 icon: BsSmartwatch,
//             },
//             {
//                 name: "The Brain",
//                 description: "Something about cybersecurity...",
//                 href: "#",
//                 icon: FingerPrintIcon,
//             },
//             {
//                 name: "AI",
//                 description: "Something about medical devices...",
//                 href: "#",
//                 icon: CiMedicalCase,
//             },
//             {
//                 name: "Neuromorphic Computing",
//                 description: "Something about robotics...",
//                 href: "#",
//                 icon: PiRobotLight,
//             },
//         ],
//     },
//     // { name: "How Computers Work", href: "#" },
//     // { name: "The Brain", href: "#" },
//     // { name: "AI", href: "#" },
//     {
//         name: "Neuromorphic Computing",
//         children: [
//             {
//                 name: "Edge Computing",
//                 description: "Something about edge computing...",
//                 href: "#",
//                 icon: BsSmartwatch,
//             },
//             {
//                 name: "Cybersecurity",
//                 description: "Something about cybersecurity...",
//                 href: "#",
//                 icon: FingerPrintIcon,
//             },
//             {
//                 name: "Medical Devices",
//                 description: "Something about medical devices...",
//                 href: "#",
//                 icon: CiMedicalCase,
//             },
//             {
//                 name: "Robotics",
//                 description: "Something about robotics...",
//                 href: "#",
//                 icon: PiRobotLight,
//             },
//         ],
//     },
//     {
//         name: "Applications",
//         children: [
//             {
//                 name: "Edge Computing",
//                 description: "Something about edge computing...",
//                 href: "#",
//                 icon: BsSmartwatch,
//             },
//             {
//                 name: "Cybersecurity",
//                 description: "Something about cybersecurity...",
//                 href: "#",
//                 icon: FingerPrintIcon,
//             },
//             {
//                 name: "Medical Devices",
//                 description: "Something about medical devices...",
//                 href: "#",
//                 icon: CiMedicalCase,
//             },
//             {
//                 name: "Robotics",
//                 description: "Something about robotics...",
//                 href: "#",
//                 icon: PiRobotLight,
//             },
//         ],
//     },
//     {
//         name: "Impacts",
//         children: [
//             {
//                 name: "Edge Computing",
//                 description: "Something about edge computing...",
//                 href: "#",
//                 icon: BsSmartwatch,
//             },
//             {
//                 name: "Cybersecurity",
//                 description: "Something about cybersecurity...",
//                 href: "#",
//                 icon: FingerPrintIcon,
//             },
//             {
//                 name: "Medical Devices",
//                 description: "Something about medical devices...",
//                 href: "#",
//                 icon: CiMedicalCase,
//             },
//             {
//                 name: "Robotics",
//                 description: "Something about robotics...",
//                 href: "#",
//                 icon: PiRobotLight,
//             },
//         ],
//     },
// ];

export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <nav
                aria-label="Global"
                className="flex items-center justify-between p-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {NavigationData.map((item) => (
                        // <a
                        //     key={item.name}
                        //     href={item.href}
                        //     className="text-sm font-semibold leading-6 text-gray-900"
                        // >
                        //     {item.name}
                        // </a>
                        <TwoColumn name={item.name} children={item.children} />
                    ))}
                    {/* <TwoColumn /> */}
                </div>
            </nav>

            {/* Mobile Naviagtion */}
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {NavigationData.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </>
    );
}
