"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import QuoteModal from "./QuoteModal";

export default function NavbarWrapper() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <QuoteModal onClose={() => setOpen(false)} />}
      <Navbar onBookVisit={() => setOpen(true)} />
    </>
  );
}
