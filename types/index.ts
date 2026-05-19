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