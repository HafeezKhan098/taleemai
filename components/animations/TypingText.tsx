"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { TypingTextProps } from "@/types";

function useTyping(words: string[], typeSpeed: number, delSpeed: number, pause: number) {
  const [text, setText]         = useState("");
  const [wIdx, setWIdx]         = useState(0);
  const [cIdx, setCIdx]         = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const word = words[wIdx];
    const id = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, cIdx + 1));
        if (cIdx + 1 === word.length) setTimeout(() => setDeleting(true), pause);
        else setCIdx(c => c + 1);
      } else {
        setText(word.slice(0, cIdx - 1));
        if (cIdx <= 1) { setDeleting(false); setWIdx(w => (w + 1) % words.length); setCIdx(0); }
        else setCIdx(c => c - 1);
      }
    }, deleting ? delSpeed : typeSpeed);
    return () => clearTimeout(id);
  }, [cIdx, deleting, wIdx, words, typeSpeed, delSpeed, pause]);

  return text;
}

export function TypingText({ words, typingSpeed = 75, deletingSpeed = 38, pauseTime = 1800, className }: TypingTextProps) {
  const text = useTyping(words, typingSpeed, deletingSpeed, pauseTime);
  return (
    <span className={cn("inline-block", className)}>
      {text}
      <span className="cursor-blink">|</span>
    </span>
  );
}