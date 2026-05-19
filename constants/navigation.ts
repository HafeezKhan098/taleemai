import type { NavLink, FooterColumn } from "@/types";

export const NAV_LINKS: NavLink[] = [
    { label: "Careers", href: "/careers" },
    { label: "Degrees", href: "/degrees" },
    { label: "Scholarships", href: "/scholarships" },
    { label: "Skills", href: "/skills" },
    { label: "Universities", href: "/universities" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
    {
        title: "Platform",
        links: [
            { label: "Career Explorer", href: "/careers" },
            { label: "Scholarships", href: "/scholarships" },
            { label: "Degree Pathways", href: "/degrees" },
            { label: "Skills to Earn", href: "/skills" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Universities", href: "/universities" },
            { label: "BBISE Guide", href: "/bbise" },
            { label: "HEC Info", href: "/hec" },
            { label: "Student Blog", href: "/blog" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Partner With Us", href: "/partners" },
        ],
    },
];