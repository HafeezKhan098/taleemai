"use client";

import { Search } from "lucide-react";

const FIELDS = ["All","Technology","Medicine","Finance","Design","Marketing","Law"];

interface Props {
  search:        string;
  field:         string;
  onSearch:      (v: string) => void;
  onFieldChange: (v: string) => void;
}

export function DegreeSearch({ search, field, onSearch, onFieldChange }: Props) {
  return (
    <div style={{ marginBottom:44 }}>
      {/* Search input */}
      <div style={{
        position:"relative", maxWidth:560, margin:"0 auto 24px",
      }}>
        <Search
          size={18} color="#6B6B8F"
          style={{ position:"absolute", left:16, top:"50%", transform:"translateY(-50%)", pointerEvents:"none" }}
        />
        <input
          type="text"
          value={search}
          onChange={e => onSearch(e.target.value)}
          placeholder="Search degrees... e.g. BSCS, MBBS, Law"
          style={{
            width:"100%", padding:"14px 16px 14px 46px",
            borderRadius:14, fontSize:14, color:"#EEEEFF",
            background:"rgba(255,255,255,0.04)",
            border:"1px solid rgba(255,255,255,0.1)",
            outline:"none",
            fontFamily:"var(--font-jakarta,'Plus Jakarta Sans',sans-serif)",
            transition:"border-color 0.2s",
          }}
          onFocus={e => (e.target.style.borderColor = "rgba(139,92,246,0.5)")}
          onBlur={e  => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
        />
      </div>

      {/* Field filters */}
      <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:8 }}>
        {FIELDS.map(f => {
          const active = field === f;
          return (
            <button
              key={f}
              onClick={() => onFieldChange(f)}
              style={{
                padding:"7px 18px", borderRadius:100, cursor:"pointer",
                fontSize:13, fontWeight:600,
                border:`1.5px solid ${active ? "rgba(139,92,246,0.6)" : "rgba(255,255,255,0.08)"}`,
                background: active ? "rgba(139,92,246,0.15)" : "rgba(255,255,255,0.03)",
                color:      active ? "#C4B5FD" : "#9898B8",
                transition:"all 0.2s ease",
              }}
            >
              {f}
            </button>
          );
        })}
      </div>
    </div>
  );
}