"use client";

import { motion, useScroll } from "motion/react";

export default function Page() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] font-cormorant selection:bg-[var(--sakura-pink)] selection:text-white relative">
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-40 bg-[#FAFAFA]/80 backdrop-blur-xl border-b border-black/5 shadow-sm 2xl:bg-transparent 2xl:backdrop-blur-none 2xl:border-transparent 2xl:shadow-none text-[#1A1A1A] transition-all duration-300">
        <span className="font-sans font-medium tracking-tighter text-sm uppercase">Kintsugi / Vrinda</span>
      </nav>

      {/* Minimal Scroll Tracker Sidebar (Desktop) */}
      <div className="hidden lg:flex fixed left-12 top-1/2 -translate-y-1/2 z-50 flex-row items-center gap-6 mix-blend-difference text-white">
        <div className="w-[2px] h-[400px] bg-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-white origin-top" 
            style={{ height: "100%", scaleY: scrollYProgress }} 
          />
        </div>
        <div className="relative h-[400px] w-24 font-sans text-[9px] uppercase tracking-[0.3em] opacity-60">
           <a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }} className="absolute top-0 hover:opacity-100 transition-opacity cursor-pointer">Imperfections</a>
           <a href="#philosophy" onClick={(e) => { e.preventDefault(); document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' }); }} className="absolute top-[45%] -translate-y-1/2 hover:opacity-100 transition-opacity cursor-pointer">Philosophy</a>
           <a href="#workshops" onClick={(e) => { e.preventDefault(); document.getElementById('workshops')?.scrollIntoView({ behavior: 'smooth' }); }} className="absolute top-[70%] -translate-y-1/2 hover:opacity-100 transition-opacity cursor-pointer">Workshops</a>
           <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="absolute bottom-0 hover:opacity-100 transition-opacity cursor-pointer">About Me</a>
        </div>
      </div>

      {/* Horizontal Scroll Tracker (Mobile) */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50 flex flex-col justify-end gap-3 backdrop-blur-xl bg-[#FAFAFA]/85 p-5 rounded-xl border border-black/10 shadow-2xl text-[#1A1A1A]">
        <div className="w-full h-[2px] bg-black/10 relative overflow-hidden rounded-full">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[var(--sakura-pink)] origin-left" 
            style={{ width: "100%", scaleX: scrollYProgress }} 
          />
        </div>
        <div className="relative w-full h-[12px] font-sans text-[8px] uppercase tracking-[0.2em] font-medium opacity-80 mt-1">
           <a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }} className="absolute left-0">Art</a>
           <a href="#philosophy" onClick={(e) => { e.preventDefault(); document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' }); }} className="absolute left-[45%] -translate-x-1/2">Phil.</a>
           <a href="#workshops" onClick={(e) => { e.preventDefault(); document.getElementById('workshops')?.scrollIntoView({ behavior: 'smooth' }); }} className="absolute left-[70%] -translate-x-1/2">Work.</a>
           <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="absolute right-0">About</a>
        </div>
      </div>

      <section id="hero" className="min-h-[100dvh] flex flex-col justify-center items-center px-6 pt-32 pb-24 relative">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center max-w-4xl z-20"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.9] mb-12">
            The Art of <br />
            <span className="italic text-[var(--sakura-pink)]">Embracing</span> <br />
            Imperfection
          </h1>
          <img
            src="/images/kintsugi-hero.jpg"
            alt="Kintsugi ceramic vessel with gold repair lines"
            className="w-[80vw] md:w-[400px] h-[420px] object-cover object-center shadow-xl mx-auto"
          />
        </motion.div>
        <div className="absolute bottom-0 w-full max-w-5xl mx-auto left-0 right-0 border-b border-black/10" />
      </section>

      <section id="philosophy" className="py-32 px-6 md:px-24 max-w-5xl mx-auto border-b border-black/10 relative">
        <motion.h2 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-4xl md:text-5xl mb-8 tracking-tight font-light relative z-10"
        >
          Philosophy
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-inter font-light text-xl md:text-3xl leading-relaxed text-slate-700 max-w-3xl"
        >
          KINTSUGI is the Japanese art of repairing broken pottery with gold, embracing flaws as part of the history of an object. Our workshops and sessions focus on the beauty of imperfection and the value of embracing flaws as part of the journey.
        </motion.p>
      </section>

      <section id="workshops" className="py-32 px-6 md:px-24 max-w-5xl mx-auto border-b border-black/10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-4xl md:text-5xl mb-8 tracking-tight font-light"
            >
              Workshops
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-inter font-light text-lg md:text-xl leading-relaxed text-slate-700 mb-8"
            >
              Join us for our upcoming Kintsugi workshops and sessions to experience the art of embracing imperfections. Connect with like-minded individuals and discover the beauty of repair and restoration.
            </motion.p>

            <motion.button 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              disabled
              className="px-8 py-4 bg-slate-100/50 text-slate-400 font-sans text-xs tracking-widest uppercase cursor-not-allowed border border-slate-200"
            >
              Workshops Coming Soon
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img src="/images/kintsugi-3.png" alt="Close up Kintsugi details" className="w-full h-[50vh] object-cover shadow-xl" />
          </motion.div>
        </div>
      </section>

      <section id="about" className="pt-32 pb-48 lg:pb-32 px-6 md:px-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative">
            <img src="/images/vrinda.jpg" alt="About Vrinda" className="w-full h-[60vh] object-cover shadow-xl" />
          </motion.div>
          <div className="flex flex-col gap-6 relative">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light mb-4"
            >
              About Me
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-inter font-light text-lg md:text-xl leading-relaxed text-slate-700"
            >
              Hi, I&apos;m Vrinda Thapliyal! and I aim to build a positive community that supports sustainability. I plan on breathing new life into thrifted, broken, & forgotten ceramics with free kintsugi workshops spreading love, sustainability and connections!
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="flex gap-8 mt-6 pt-6 border-t border-black/10"
            >
              <a href="mailto:vrinda.thapliyal@gmail.com" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 hover:text-[var(--sakura-pink)] transition-colors">Email</a>
              <a href="http://instagram.com/kintsugi_by_vrinda" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 hover:text-[var(--sakura-pink)] transition-colors">Instagram</a>
              <a href="http://youtube.com/@vrindathapliyal" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 hover:text-[var(--sakura-pink)] transition-colors">YouTube</a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
