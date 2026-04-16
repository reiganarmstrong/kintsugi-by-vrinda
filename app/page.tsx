"use client"

import { motion, useScroll } from "motion/react"

export default function Page() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="relative min-h-screen bg-[#eadbcc] font-serif text-[#1A1A1A] selection:bg-[var(--sakura-pink)] selection:text-white">
      <nav className="fixed top-0 z-40 flex w-full items-center justify-between border-b border-black/5 bg-[#eadbcc]/80 p-6 text-[#1A1A1A] shadow-sm backdrop-blur-xl transition-all duration-300 2xl:border-transparent 2xl:bg-transparent 2xl:shadow-none 2xl:backdrop-blur-none">
        <span className="text-sm font-medium tracking-tighter uppercase">
          Kintsugi / Vrinda
        </span>
      </nav>

      {/* Minimal Scroll Tracker Sidebar (Desktop) */}
      <div className="fixed top-1/2 left-12 z-50 hidden -translate-y-1/2 flex-row items-center gap-6 text-white mix-blend-difference lg:flex">
        <div className="relative h-[400px] w-[2px] overflow-hidden bg-white/20">
          <motion.div
            className="absolute top-0 left-0 w-full origin-top bg-white"
            style={{ height: "100%", scaleY: scrollYProgress }}
          />
        </div>
        <div className="relative h-[400px] w-24 font-serif text-[9px] tracking-[0.3em] uppercase opacity-60">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
            className="absolute top-0 cursor-pointer transition-opacity hover:opacity-100"
          >
            Imperfections
          </a>
          <a
            href="#philosophy"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById("philosophy")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
            className="absolute top-[45%] -translate-y-1/2 cursor-pointer transition-opacity hover:opacity-100"
          >
            Philosophy
          </a>
          <a
            href="#workshops"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById("workshops")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
            className="absolute top-[70%] -translate-y-1/2 cursor-pointer transition-opacity hover:opacity-100"
          >
            Workshops
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
            className="absolute bottom-0 cursor-pointer transition-opacity hover:opacity-100"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Horizontal Scroll Tracker (Mobile) */}
      <div className="fixed right-6 bottom-6 left-6 z-50 flex flex-col justify-end gap-3 rounded-xl border border-black/10 bg-[#eadbcc]/85 p-5 text-[#1A1A1A] shadow-2xl backdrop-blur-xl lg:hidden">
        <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-black/10">
          <motion.div
            className="absolute top-0 left-0 h-full origin-left bg-[var(--sakura-pink)]"
            style={{ width: "100%", scaleX: scrollYProgress }}
          />
        </div>
        <div className="relative mt-1 h-[12px] w-full font-serif text-[8px] font-medium tracking-[0.2em] uppercase opacity-80">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
            className="absolute left-0"
          >
            Art
          </a>
          <a
            href="#philosophy"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById("philosophy")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
            className="absolute left-[28%] -translate-x-1/2"
          >
            Phil.
          </a>
          <a
            href="#workshops"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById("workshops")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
            className="absolute left-[50%] -translate-x-1/2"
          >
            Work.
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
            className="absolute right-0"
          >
            About
          </a>
        </div>
      </div>

      <section
        id="hero"
        className="relative flex min-h-[100dvh] flex-col items-center justify-center pt-32 pb-24"
        // className="bg-contain bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(/images/kintsugi-v-pot.png)` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="z-20 max-w-4xl text-center"
        >
          <h1 className="mb-12 text-4xl leading-[0.9] font-light tracking-tight sm:text-5xl">
            The Art of <br />
            <span className="text-[var(--sakura-pink)] italic">
              Embracing
            </span>{" "}
            <br />
            Imperfection
          </h1>
        </motion.div>
        {/* <div className="absolute right-0 bottom-0 left-0 mx-auto w-full max-w-5xl border-b border-black/10" /> */}
        <img
          src="/images/kintsugi-v-pot.jpg"
          alt="Kintsugi ceramic vessel with gold repair lines"
          className="mx-auto -mt-20 h-full min-h-[300px] w-full object-cover object-center sm:w-4/5 md:-mt-30 md:w-2/3 lg:-mt-40 xl:-mt-60 2xl:-mt-80"
        />
      </section>

      <section
        id="philosophy"
        className="relative mx-auto max-w-5xl border-b border-black/10 px-6 py-32 md:px-24"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10 mb-8 text-4xl font-light tracking-tight md:text-5xl"
        >
          Philosophy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-inter max-w-3xl text-xl leading-relaxed font-light text-slate-700 md:text-3xl"
        >
          KINTSUGI is the Japanese art of repairing broken pottery with gold,
          embracing flaws as part of the history of an object. Our workshops and
          sessions focus on the beauty of imperfection and the value of
          embracing flaws as part of the journey.
        </motion.p>
      </section>

      <section
        id="workshops"
        className="mx-auto max-w-5xl border-b border-black/10 px-6 py-32 md:px-24"
      >
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 text-4xl font-light tracking-tight md:text-5xl"
            >
              Workshops
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter mb-8 text-lg leading-relaxed font-light text-slate-700 md:text-xl"
            >
              Join us for our upcoming Kintsugi workshops and sessions to
              experience the art of embracing imperfections. Connect with
              like-minded individuals and discover the beauty of repair and
              restoration.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              disabled
              className="cursor-not-allowed border border-slate-200 bg-slate-100/50 px-8 py-4 font-serif text-xs tracking-widest text-slate-400 uppercase"
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
            <img
              src="/images/kintsugi-3.png"
              alt="Close up Kintsugi details"
              className="h-[50vh] w-full object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-5xl px-6 pt-32 pb-48 md:px-24 lg:pb-32"
      >
        {/* Mobile Title (above image) */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-4xl font-light md:hidden md:text-5xl"
        >
          About Me
        </motion.h2>

        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/images/vrinda.jpg"
              alt="About Vrinda"
              className="h-[60vh] w-full object-cover shadow-xl"
            />
          </motion.div>
          <div className="relative flex flex-col gap-6">
            {/* Desktop Title (in column) */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 hidden text-4xl font-light md:block md:text-5xl"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter text-lg leading-relaxed font-light text-slate-700 md:text-xl"
            >
              Hi, I&apos;m Vrinda Thapliyal! and I aim to build a positive
              community that supports sustainability. I plan on breathing new
              life into thrifted, broken, & forgotten ceramics with free
              kintsugi workshops spreading love, sustainability and connections!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 flex gap-8 border-t border-black/10 pt-6"
            >
              <a
                href="mailto:vrinda.thapliyal@gmail.com"
                className="font-serif text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase transition-colors hover:text-[var(--sakura-pink)]"
              >
                Email
              </a>
              <a
                href="http://instagram.com/kintsugi_by_vrinda"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase transition-colors hover:text-[var(--sakura-pink)]"
              >
                Instagram
              </a>
              <a
                href="http://youtube.com/@vrindathapliyal"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase transition-colors hover:text-[var(--sakura-pink)]"
              >
                YouTube
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
