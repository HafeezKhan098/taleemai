"use client";

import { useState } from "react";
import { DEGREES }      from "@/data/degrees";
import { DegreeCard }   from "./DegreeCard";
import { DegreeSearch } from "./DegreeSearch";

export function DegreeGrid() {
  const [search, setSearch] = useState("");
  const [field,  setField]  = useState("All");

  const filtered = DEGREES.filter(d => {
    const matchSearch =
      d.title.toLowerCase().includes(search.toLowerCase())       ||
      d.shortTitle.toLowerCase().includes(search.toLowerCase())  ||
      d.field.toLowerCase().includes(search.toLowerCase())       ||
      d.careers.some(c => c.toLowerCase().includes(search.toLowerCase()));

    const matchField = field === "All" || d.field === field;

    return matchSearch && matchField;
  });

  return (
    <div>
      <DegreeSearch
        search={search}
        field={field}
        onSearch={setSearch}
        onFieldChange={setField}
      />

      {/* Result count */}
      <p style={{ textAlign:"center", fontSize:13, color:"#6B6B8F", marginBottom:28 }}>
        Showing <strong style={{ color:"#EEEEFF" }}>{filtered.length}</strong> degrees
        {field !== "All" && ` in ${field}`}
        {search && ` matching "${search}"`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",
          gap:18,
        }}>
          {filtered.map(degree => (
            <DegreeCard key={degree.slug} degree={degree} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign:"center", padding:"60px 24px" }}>
          <p style={{ fontSize:32, marginBottom:12 }}>🔍</p>
          <p style={{ fontSize:16, color:"#6B6B8F" }}>
            No degrees found for &quot;{search}&quot;
          </p>
          <button
            onClick={() => { setSearch(""); setField("All"); }}
            style={{
              marginTop:16, padding:"8px 20px", borderRadius:10,
              background:"rgba(139,92,246,0.12)",
              border:"1px solid rgba(139,92,246,0.3)",
              color:"#C4B5FD", fontSize:13, fontWeight:600, cursor:"pointer",
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}