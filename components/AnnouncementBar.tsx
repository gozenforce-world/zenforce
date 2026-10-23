"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const targetDate = new Date("2027-05-13T00:00:00Z").getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff > 0) {
      setDaysLeft(Math.ceil(diff / (1000 * 60 * 60 * 24)));
    } else {
      setDaysLeft(0);
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-950 via-slate-900 to-red-950 border-b border-red-900/40 text-xs sm:text-sm py-2 px-4 text-center text-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span>
          <strong className="text-white font-semibold">DPDP Act:</strong>{" "}
          <span className="text-red-400 font-bold" suppressHydrationWarning>
            {daysLeft !== null ? `${daysLeft} days` : "Enforcement incoming"}
          </span>{" "}
          until full enforcement on 13 May 2027. Penalties go up to ₹250 crore per breach.
        </span>
        <Link
          href="/compliance/dpdp-act/"
          className="text-red-400 hover:text-red-300 underline font-medium ml-1 transition-colors"
        >
          Check if you&apos;re ready →
        </Link>
      </div>
    </div>
  );
}
