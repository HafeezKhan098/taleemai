import type { Feature, Stat } from "@/types";

export const FEATURES: Feature[] = [
    {
        title: "AI Career Counselor",
        description: "Tell us your education and interests. Get a personalized career roadmap built just for you — in seconds.",
        color: "#8B5CF6",
        bgColor: "rgba(139,92,246,0.1)",
        borderColor: "rgba(139,92,246,0.25)",
        href: "/careers",
        iconName: "Bot",
    },
    {
        title: "Degree Explorer",
        description: "Browse 50+ degrees with salary ranges, required skills, job demand, and the best Pakistani universities.",
        color: "#22D3EE",
        bgColor: "rgba(34,211,238,0.08)",
        borderColor: "rgba(34,211,238,0.2)",
        href: "/degrees",
        iconName: "GraduationCap",
    },
    {
        title: "Scholarship Hub",
        description: "Local, international, HEC, and Balochistan-specific scholarships — filtered, clear, and always up to date.",
        color: "#10B981",
        bgColor: "rgba(16,185,129,0.1)",
        borderColor: "rgba(16,185,129,0.25)",
        href: "/scholarships",
        iconName: "Award",
    },
    {
        title: "Skills to Earn Online",
        description: "Freelancing, AI tools, coding, design — learn what actually pays and start earning before you even graduate.",
        color: "#F59E0B",
        bgColor: "rgba(245,158,11,0.1)",
        borderColor: "rgba(245,158,11,0.25)",
        href: "/skills",
        iconName: "Code2",
    },
    {
        title: "Balochistan Assistant",
        description: "BBISE results, roll number slips, rechecking, and migrations — everything local, explained simply.",
        color: "#EC4899",
        bgColor: "rgba(236,72,153,0.1)",
        borderColor: "rgba(236,72,153,0.25)",
        href: "/bbise",
        iconName: "MapPin",
    },
    {
        title: "Study Abroad Guide",
        description: "Scholarships to Turkey, China, Europe and beyond. Visa guides, application tips, and deadlines.",
        color: "#6366F1",
        bgColor: "rgba(99,102,241,0.1)",
        borderColor: "rgba(99,102,241,0.25)",
        href: "/abroad",
        iconName: "Globe",
    },
];

export const STATS: Stat[] = [
    { value: "15,000+", label: "Students Guided" },
    { value: "500+", label: "Scholarships Listed" },
    { value: "50+", label: "Degree Pathways" },
    { value: "30+", label: "Top Universities" },
];

export const TYPING_WORDS: string[] = [
    "Career Counseling",
    "Scholarship Discovery",
    "Degree Planning",
    "Online Earning Skills",
    "University Guidance",
];