import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    padding?: string;
    style?: React.CSSProperties;
}

export function GlassCard({
    children,
    className,
    hover = true,
    padding = "p-5",
    style,
}: GlassCardProps) {
    return (
        <div
            className={cn("glass-card", padding, className)}
            style={style}
        >
            {children}
        </div>
    );
}