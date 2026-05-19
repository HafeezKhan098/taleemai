export function StatsBar() {
    const ITEMS = [
        { icon: "🎯", value: "Always Free", sub: "No paywalls, ever", color: "#A78BFA" },
        { icon: "🤖", value: "AI-Powered", sub: "Real-time guidance", color: "#22D3EE" },
        { icon: "🇵🇰", value: "Pakistan First", sub: "Built for local context", color: "#10B981" },
        { icon: "📚", value: "50+ Degrees", sub: "Mapped & explained", color: "#F59E0B" },
    ];

    return (
        <div className="sb-outer">
            <div className="sb-top-line" />
            <div className="sb-grid">
                {ITEMS.map((item) => (
                    <div key={item.value} className="sb-item">
                        <div className="sb-icon">{item.icon}</div>
                        <span className="sb-value" style={{ color: item.color }}>
                            {item.value}
                        </span>
                        <span className="sb-label">{item.sub}</span>
                    </div>
                ))}
            </div>
            <div className="sb-bottom-line" />
        </div>
    );
}