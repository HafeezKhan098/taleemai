import { cn } from "@/lib/utils";
import type { BadgeProps } from "@/types";

const colorClass = {
    purple: "badge-purple",
    cyan: "badge-cyan",
    green: "badge-green",
    amber: "badge-purple",
};

const dotColor = {
    purple: "#A78BFA",
    cyan: "#22D3EE",
    green: "#10B981",
    amber: "#F59E0B",
};

export function Badge({ children, color = "purple", dot = false, className }: BadgeProps) {
    return (
        <div className={cn("badge", colorClass[color], className)}>
            {dot && (
                <span
                    className="dot-live"
                    style={{ background: dotColor[color] }}
                />
            )}
            {children}
        </div>
    );
}