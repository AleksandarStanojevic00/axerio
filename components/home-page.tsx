"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Footer } from "@/components/footer";
import { FeaturedWork } from "@/components/featured-work";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Process } from "@/components/process";
import { ScheduleCallModal } from "@/components/schedule-call-modal";
import { ScheduleCta } from "@/components/schedule-cta";
import { Services } from "@/components/services";
import { SocialProof } from "@/components/social-proof";

const Testimonials = dynamic(() => import("@/components/testimonials"));
const Pricing = dynamic(() => import("@/components/pricing"));
const FAQ = dynamic(() => import("@/components/faq"));
const ContactForm = dynamic(() => import("@/components/contact-form"));

export function HomePage() {
  const { dictionary } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  const openCallModal = () => setModalOpen(true);
  const closeCallModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar onBookCall={openCallModal} />
      <main>
        <Hero dictionary={dictionary} onBookCall={openCallModal} />
        <SocialProof dictionary={dictionary} />
        <Services dictionary={dictionary} />
        <FeaturedWork dictionary={dictionary} />
        <Process dictionary={dictionary} />
        <Testimonials dictionary={dictionary} />
        <Pricing dictionary={dictionary} onBookCall={openCallModal} />
        <FAQ dictionary={dictionary} />
        <ScheduleCta dictionary={dictionary} onBookCall={openCallModal} />
        <ContactForm dictionary={dictionary} />
      </main>
      <Footer dictionary={dictionary} />
      <ScheduleCallModal
        open={modalOpen}
        onClose={closeCallModal}
        title={dictionary.schedule.modalTitle}
        description={dictionary.schedule.modalDescription}
        cta={dictionary.schedule.modalCta}
        closeLabel={dictionary.schedule.modalClose}
      />
      <button
        className="fixed bottom-5 right-5 z-40 rounded-full bg-[var(--accent-primary)] px-4 py-3 text-sm font-semibold text-white shadow-[var(--shadow-hover)] transition hover:-translate-y-0.5"
        onClick={openCallModal}
      >
        {dictionary.nav.bookCall}
      </button>
    </div>
  );
}
