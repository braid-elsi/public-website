import { CiMedicalCase } from "react-icons/ci";
import { PiRobotLight } from "react-icons/pi";
import { BsSmartwatch } from "react-icons/bs";
import { FingerPrintIcon } from "@heroicons/react/24/outline";
const NavigationData = [
    {
        name: "About",
        href: "#",
    },
    {
        name: "Technical Overview",
        children: [
            {
                name: "How Computers Work",
                description: "TBD...",
                href: "#",
                icon: BsSmartwatch,
            },
            {
                name: "Introduction to AI",
                description: "TBD...",
                href: "#",
                icon: CiMedicalCase,
            },
            {
                name: "How is AI different from human cognition?",
                description: "TBD...",
                href: "#",
                icon: FingerPrintIcon,
            },
            {
                name: "Neuromorphic Computing",
                description: "TBD...",
                href: "#",
                icon: PiRobotLight,
            },
        ],
    },
    {
        name: "Potential Applications",
        children: [
            {
                name: "Edge Computing",
                description: "Something about edge computing...",
                href: "#",
                icon: BsSmartwatch,
            },
            {
                name: "Cybersecurity",
                description: "Something about cybersecurity...",
                href: "#",
                icon: FingerPrintIcon,
            },
            {
                name: "Medical Devices",
                description: "Something about medical devices...",
                href: "#",
                icon: CiMedicalCase,
            },
            {
                name: "Robotics",
                description: "Something about robotics...",
                href: "#",
                icon: PiRobotLight,
            },
        ],
    },
    {
        name: "Potential Benefits",
        children: [
            {
                name: "Environmental",
                description: "Something about edge computing...",
                href: "#",
                icon: BsSmartwatch,
            },
            {
                name: "Anomaly Detection",
                description: "Something about cybersecurity...",
                href: "#",
                icon: FingerPrintIcon,
            },
            {
                name: "Data Privacy",
                description: "Something about medical devices...",
                href: "#",
                icon: CiMedicalCase,
            },
            {
                name: "Accessibility",
                description: "Something about robotics...",
                href: "#",
                icon: PiRobotLight,
            },
        ],
    },
    {
        name: "Potential Risks",
        children: [
            {
                name: "Anomalies Response Risks",
                description: "TBD...",
                href: "#",
                icon: BsSmartwatch,
            },
            {
                name: "Security Risks",
                description: "TBD...",
                href: "#",
                icon: FingerPrintIcon,
            },
            {
                name: "Privacy Risks",
                description: "TBD...",
                href: "#",
                icon: CiMedicalCase,
            },
            {
                name: "Environmental Risks",
                description: "TBD...",
                href: "#",
                icon: PiRobotLight,
            },
            {
                name: "Governance Questions",
                description: "TBD...",
                href: "#",
                icon: PiRobotLight,
            },
            {
                name: "Future of Work",
                description: "TBD...",
                href: "#",
                icon: PiRobotLight,
            },
        ],
    },
];
export default NavigationData;
