import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useState } from "react";
import { usePopper } from "react-popper";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function TwoColumn({ name, children }) {
    let [referenceElement, setReferenceElement] = useState();
    let [popperElement, setPopperElement] = useState();
    let { styles, attributes } = usePopper(referenceElement, popperElement);

    console.log({ styles });
    return (
        <Popover className="relative">
            <PopoverButton
                ref={setReferenceElement}
                className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
                <span>{name}</span>
                {children ? (
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
                ) : (
                    ""
                )}
            </PopoverButton>
            {children ? (
                <PopoverPanel
                    ref={setPopperElement}
                    style={styles.popper}
                    className="absolute mt-2"
                >
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
                            {children.map((item) => (
                                <div
                                    key={item.name}
                                    className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                                >
                                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <item.icon
                                            aria-hidden="true"
                                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                        />
                                    </div>
                                    <div>
                                        <a
                                            href={item.href}
                                            className="font-semibold text-gray-900"
                                        >
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </a>
                                        <p className="mt-1 text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-50 px-8 py-6">
                            <div className="flex items-center gap-x-3">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                                    {name}
                                </h3>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Find out more about how...
                            </p>
                        </div>
                    </div>
                </PopoverPanel>
            ) : (
                ""
            )}
        </Popover>
    );
}

// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

// export default function MyPopover() {
//     return (
//         <Popover className="relative">
//             <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
//                 <span>Solutions</span>
//                 <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
//             </PopoverButton>

//             <PopoverPanel className="absolute z-10">
//                 <div className="grid grid-cols-2">
//                     <a href="/analytics">Analytics</a>
//                     <a href="/engagement">Engagement</a>
//                     <a href="/security">Security</a>
//                     <a href="/integrations">Integrations</a>
//                 </div>

//                 <img src="/solutions.jpg" alt="" />
//             </PopoverPanel>
//         </Popover>
//     );
// }
