"use client";
import { useState, useCallback } from "react";

function fmt(lakhs: number) {
  if (lakhs >= 100) return "₹" + (lakhs / 100).toFixed(2) + " Cr";
  return "₹" + Math.round(lakhs) + "L";
}

export default function EmiCalculator() {
  const [propVal, setPropVal] = useState(75);
  const [dpPct, setDpPct] = useState(20);
  const [tenure, setTenure] = useState(20);
  const [rate, setRate] = useState(8.5);

  const dpAmt = Math.round(propVal * dpPct / 100);
  const loanAmt = propVal - dpAmt;
  const r = rate / 12 / 100;
  const n = tenure * 12;
  const emi = loanAmt * 1e5 * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  const totalInt = emi * n - loanAmt * 1e5;

  const emiDisplay = isFinite(emi) ? "₹" + Math.round(emi / 1000) + "K" : "—";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border border-[var(--border)] mt-10 overflow-hidden">
      {/* Inputs */}
      <div className="p-8 border-b md:border-b-0 md:border-r border-[var(--border)]" style={{ background: "var(--dark3)" }}>
        <div className="mb-1 flex justify-between text-[0.7rem] tracking-wider uppercase">
          <span className="text-[var(--muted)]">Property Value</span>
          <span className="text-[var(--gold)] font-medium">₹{propVal} Lakhs</span>
        </div>
        <input type="range" min={20} max={500} step={5} value={propVal} onChange={(e) => setPropVal(+e.target.value)} className="w-full mb-5 h-1" />

        <div className="mb-1 flex justify-between text-[0.7rem] tracking-wider uppercase">
          <span className="text-[var(--muted)]">Down Payment</span>
          <span className="text-[var(--gold)] font-medium">₹{dpAmt}L ({dpPct}%)</span>
        </div>
        <input type="range" min={10} max={50} step={1} value={dpPct} onChange={(e) => setDpPct(+e.target.value)} className="w-full mb-5 h-1" />

        <div className="mb-1 flex justify-between text-[0.7rem] tracking-wider uppercase">
          <span className="text-[var(--muted)]">Loan Tenure</span>
          <span className="text-[var(--gold)] font-medium">{tenure} Years</span>
        </div>
        <input type="range" min={5} max={30} step={1} value={tenure} onChange={(e) => setTenure(+e.target.value)} className="w-full mb-5 h-1" />

        <div className="mb-1 flex justify-between text-[0.7rem] tracking-wider uppercase">
          <span className="text-[var(--muted)]">Interest Rate</span>
          <span className="text-[var(--gold)] font-medium">{rate.toFixed(1)}%</span>
        </div>
        <input type="range" min={6} max={15} step={0.1} value={rate} onChange={(e) => setRate(+e.target.value)} className="w-full h-1" />
      </div>

      {/* Result */}
      <div className="p-8 flex flex-col justify-center items-center text-center" style={{ background: "linear-gradient(135deg, var(--dark3), rgba(201,168,76,0.04))" }}>
        <p className="text-[0.65rem] tracking-[3px] uppercase text-[var(--muted)] mb-2">Monthly EMI</p>
        <p className="font-serif text-5xl font-bold text-[var(--gold)] mb-1">
          {emiDisplay}
        </p>
        <p className="text-[var(--muted)] text-sm mb-8">per month for {tenure} years</p>

        <div className="grid grid-cols-2 gap-px w-full" style={{ background: "var(--border)" }}>
          <div className="p-4 text-center" style={{ background: "var(--dark2)" }}>
            <div className="font-serif text-xl text-[var(--cream)]">{fmt(loanAmt)}</div>
            <div className="text-[0.65rem] tracking-widest uppercase text-[var(--muted)] mt-1">Loan Amount</div>
          </div>
          <div className="p-4 text-center" style={{ background: "var(--dark2)" }}>
            <div className="font-serif text-xl text-[var(--cream)]">{fmt(Math.round(totalInt / 1e5))}</div>
            <div className="text-[0.65rem] tracking-widest uppercase text-[var(--muted)] mt-1">Total Interest</div>
          </div>
        </div>
      </div>
    </div>
  );
}
