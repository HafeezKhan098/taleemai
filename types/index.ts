export interface NavLink {
    label: string;
    href: string;
}

export interface FooterColumn {
    title: string;
    links: { label: string; href: string }[];
}

export interface Feature {
    title: string;
    description: string;
    color: string;
    bgColor: string;
    borderColor: string;
    href: string;
    iconName: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface TypingTextProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
    className?: string;
}

export type ButtonVariant = "primary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;
    className?: string;
}

export interface BadgeProps {
    children: React.ReactNode;
    color?: "purple" | "cyan" | "green" | "amber";
    dot?: boolean;
    className?: string;
}

export interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    padding?: string;
    style?: React.CSSProperties;
}
// ══════════════════════════════════════
// PHASE 2 — AI COUNSELOR TYPES
// ══════════════════════════════════════

export type EducationLevel =
    | "matric"
    | "fsc-pre-medical"
    | "fsc-pre-engineering"
    | "ics"
    | "fa"
    | "icom"
    | "bachelor"
    | "other";

export type CityOption =
    | "Karachi" | "Lahore" | "Islamabad" | "Rawalpindi"
    | "Peshawar" | "Quetta" | "Multan" | "Faisalabad"
    | "Hyderabad" | "Gwadar" | "Other";

export type BudgetRange =
    | "very-low"   // under 50k/year
    | "low"        // 50k–150k/year
    | "medium"     // 150k–400k/year
    | "high";      // 400k+/year

export type EnglishLevel =
    | "basic" | "intermediate" | "fluent";

// Student profile submitted to AI
export interface StudentProfile {
    education: EducationLevel;
    interests: string[];
    goals: string;
    city: CityOption;
    budget: BudgetRange;
    englishLevel: EnglishLevel;
    skills: string[];
    workPreference: string[];   // ← changed from string to string[]
}

// AI response structure
export interface CareerRecommendation {
    title: string;
    field: string;
    matchScore: number;       // 0-100
    salaryPKR: string;       // e.g. "80,000 – 200,000/month"
    salaryRemote: string;       // e.g. "$500–$2000/month"
    timeToJob: string;       // e.g. "4 years"
    aiRisk: "low" | "medium" | "high";
    description: string;
    whyMatch: string;
    topDegrees: string[];
    topUniversities: string[];
}

export interface RoadmapStep {
    phase: string;
    duration: string;
    title: string;
    description: string;
    actions: string[];
}

export interface ScholarshipResult {
    title: string;
    provider: string;
    amount: string;
    country: string;
    type: string;
    description: string;
    link: string;
    isOpen: boolean;
    tags: string[];
    color: string;
}

export interface AIReportResult {
    personalMessage: string;
    careers: CareerRecommendation[];
    localScholarships: ScholarshipResult[];
    intlScholarships: ScholarshipResult[];
    roadmap: RoadmapStep[];
    quickWins: string[];
}

// Degree types
export interface Degree {
    slug: string;
    title: string;
    shortTitle: string;
    field: string;
    duration: string;
    description: string;
    scopePakistan: string;
    scopeAbroad: string;
    salaryEntry: string;
    salaryMid: string;
    salaryRemote: string;
    aiRisk: "low" | "medium" | "high";
    aiRiskReason: string;
    demand: "very high" | "high" | "medium" | "low";
    skills: string[];
    universities: string[];
    feeRange: string;
    meritRange: string;
    careers: string[];
    icon: string;
    color: string;
    eligibility: string[];
}



// University type
export interface University {
    name: string;
    city: string;
    type: "public" | "private";
    ranking: string;
    known: string[];
}