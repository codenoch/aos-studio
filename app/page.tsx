'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Plus, ChevronDown, Compass, FileSearch, Navigation, PenTool, Edit3, LayoutTemplate, Eye, Archive, Palette, Phone, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

// Data placeholders aligned with images
const services = [
  {
    title: "Art Conservation:\nPreserving the Past.",
    desc: "Commemmorary designed on and and trarlais with ims restoration processs showing the past.",
    icon: FileSearch
  },
  {
    title: "Curatorial Selection:\nDefining the Dialogue.",
    desc: "Curators a okoics an elegant choptatmas and eapeas and viewing characters Dialogue.",
    icon: Compass
  },
  {
    title: "Art Consultation:\nExpert Guidance.",
    desc: "Expert consatlalumd eaest ancient cotapets compass as wih as an ancient cans and comeos.",
    icon: Navigation
  },
  {
    title: "Calligraphy Workshops:\nMastering the Pen.",
    desc: "Join our intensive sessions to master the art of script, from foundational strokes to flourished lettering.",
    icon: PenTool
  },
  {
    title: "Custom Script Designs:\nTailored Elegance.",
    desc: "Bespoke calligraphy pieces created exclusively for your events, branding, or personal collections.",
    icon: Edit3
  },
  {
    title: "Branding & Identity:\nVisual Poetry.",
    desc: "Elevate your brand's presence with handcrafted logos and typographical identities.",
    icon: LayoutTemplate
  },
  {
    title: "Event Calligraphy:\nLive Artistry.",
    desc: "Engage your guests with live calligraphy performances, personalizing keepsakes in real-time.",
    icon: Eye
  },
  {
    title: "Manuscript Restoration:\nReviving History.",
    desc: "Delicate restoration of antique manuscripts and documents holding historical significance.",
    icon: Archive
  },
  {
    title: "Exhibition Design:\nCurated Spaces.",
    desc: "Strategic spatial design and installation tailored for showcasing calligraphic art and manuscripts.",
    icon: Palette
  }
];

const clients = [
  {
    author: "Julian Vance, Collector",
    quote: "Kam provides a profound insight into art.",
    img: "https://picsum.photos/seed/client1/200/200"
  },
  {
    author: "Eleanor Croft, Art Historian",
    quote: "An unparalleled eye for curatorial narrative.",
    img: "https://picsum.photos/seed/client2/200/200"
  },
  {
    author: "Aisha Singh, Patron",
    quote: "Transformative service. True art.",
    img: "https://picsum.photos/seed/client3/200/200"
  },
  {
    author: "Marcus Wright, Gallery Owner",
    quote: "The precision of every stroke speaks volumes.",
    img: "https://picsum.photos/seed/client4/200/200"
  },
  {
    author: "Chloe Dubois, Event Manager",
    quote: "AOS Studio brought unimaginable elegance to our gala.",
    img: "https://picsum.photos/seed/client5/200/200"
  },
  {
    author: "Rohan Patel, Private Collector",
    quote: "Their manuscript restoration is nothing short of miraculous.",
    img: "https://picsum.photos/seed/client6/200/200"
  },
  {
    author: "Sophia Laurent, Art Critic",
    quote: "Redefining the modern landscape of traditional script.",
    img: "https://picsum.photos/seed/client7/200/200"
  }
];

const plans = [
  {
    name: "PLAN 1: FOUNDATION",
    price: "$150 per Session",
    features: ["Precurio Conservation", "Preserace Cetuctiory Post", "Preserving the Past"],
  },
  {
    name: "PLAN 2: CURATED VAULT",
    price: "$450 Quarterly",
    features: ["Coeocome Cursted Vault", "Featoror Goortody", "Caemnes concocrtie Coodt"],
  },
  {
    name: "PLAN 3: PATRONAGE",
    price: "$1200 Annually",
    features: ["Featorere", "Poroeolin Patronage", "Featwee lliociscortnerlafire Fcom", "Pcenrres Pohnnago"],
  }
];

const faqs = [
  { q: "HOW DO I CONSIGN MY PIECE?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et magna." },
  { q: "WHAT IS THE CONSULTATION PROCESS?", a: "What is the consultation onl an coneotsar eooseoptont. In buolt an laiverese dndawaatiaden aidaiooo nirrdossa." },
  { q: "ARE YOUR SERVICES CERTIFIED?", a: "Arreaent seri-tinartiao caomed form at dauinrias. Hauc cnai, aloen as sameseaorcrtiasanitiooaicon poneotlarans." },
  { q: "DO YOU OFFER INTERNATIONAL SHIPPING?", a: "Yes, we ship globally using specialized fine-art couriers to ensure the pristine condition of your pieces upon arrival." },
  { q: "HOW LONG DOES A CUSTOM PIECE TAKE?", a: "Timelines vary depending on the complexity, but standard commissions generally take between 4 to 6 weeks from consultation." },
  { q: "CAN I COMMISSION A PORTRAIT WITH SCRIPT?", a: "Absolutely. We specialize in mixed-media portraits incorporating bespoke calligraphy elements." },
  { q: "DO YOU PROVIDE CERTIFICATES OF AUTHENTICITY?", a: "Every original piece and high-value restoration comes with a signed and sealed Certificate of Authenticity." },
  { q: "WHAT MATERIALS DO YOU USE?", a: "We exclusively use archival-quality inks, 100% cotton rag papers, and historically accurate pigments for restorations." },
  { q: "CAN I BOOK LIVE CALLIGRAPHY FOR AN EVENT?", a: "Yes, our live event calligraphy services are available for corporate events, weddings, and brand activations." },
  { q: "DO YOU OFFER GROUP WORKSHOPS?", a: "We host quarterly masterclasses and can arrange private workshops for groups of 5 or more upon request." }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Container to restrict maximum width and hold content */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-20 relative pt-10">
        
        {/* HEADER */}
        <header className="flex justify-between items-start w-full pb-8 z-50 relative">
          <button suppressHydrationWarning className="hover:rotate-90 transition-transform duration-300">
            <Plus className="w-6 h-6 font-light" strokeWidth={1}/>
          </button>
          <div className="font-serif text-3xl md:text-4xl tracking-widest flex flex-col items-center leading-none mt-2">
            <span className="font-script text-5xl md:text-6xl -ml-12 mb-[-25px] z-10 lowercase">AOS</span>
            STUDIO
          </div>
          <button suppressHydrationWarning className="text-xs font-medium tracking-widest uppercase hover:text-brand-red transition-colors pt-2">
            Bookings
          </button>
        </header>

        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex flex-col border-b border-ink/20 pb-8 mt-12 mb-20 lg:mb-32 overflow-hidden">
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[25vw] sm:text-[22vw] leading-[0.75] font-serif text-brand-red select-none absolute -left-8 md:top-0 top-12 z-0 tracking-tighter"
          >
            AOS
          </motion.h1>

          <div className="flex-1 flex flex-col lg:flex-row items-center justify-center relative mt-16 md:mt-0 z-10">
            
            {/* Left Box (Discover ticket) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="hidden lg:flex absolute left-0 bottom-[10%] w-56 bg-ink text-cream p-6 ticket-shape flex-col items-center"
            >
              <p className="text-[10px] tracking-[0.25em] uppercase mb-6 mt-2">Discover AK</p>
              <div className="w-full aspect-[4/3] bg-cream/5 p-2 border border-cream/20">
                <div className="w-full h-full relative border border-cream/20">
                  <Image src="https://picsum.photos/seed/frames/500/400" fill alt="Frames" className="object-cover grayscale mx-auto mix-blend-lighten opacity-80" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>

            {/* Center Header Portrait */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="w-full max-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-lg z-10 relative"
            >
              <div className="relative pt-[120%] w-full filter sepia-[0.3] hover:sepia-0 transition-all duration-700">
                <Image 
                  src="https://picsum.photos/seed/portrait/800/1000" 
                  fill
                  alt="Portrait of an artist" 
                  className="w-full h-full object-cover object-center shadow-2xl shadow-black/20" 
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Right Quote */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hidden lg:block absolute right-0 top-[10%] w-60 text-right"
            >
              <div className="w-full h-32 mb-6 flex flex-col items-end justify-center relative">
                {/* Simulated drawing */}
                <Image src="https://picsum.photos/seed/texture/300/300" width={120} height={120} className="object-contain opacity-70 grayscale mix-blend-multiply" alt="texture" referrerPolicy="no-referrer"/>
              </div>
              <p className="font-serif text-sm leading-relaxed text-justify opacity-90 mx-auto">
                "Ink flows where the spirit leads. Based in India, AK transforms traditional script into modern movement. A relentless pursuit of the perfect stroke, redefining the boundary between paper and soul."
              </p>
            </motion.div>
          </div>

          {/* Bottom Right Title */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute right-0 bottom-[-5%] sm:bottom-[-2%] z-20 text-right flex flex-col items-end w-full px-6 md:px-0 pointer-events-none"
          >
            <div className="flex gap-12 text-[9px] sm:text-[10px] uppercase tracking-widest mb-2 sm:mb-4 pr-2 font-medium opacity-80 mix-blend-difference text-cream">
              <div className="text-right">Open Daily<br/>Bengaluru / Mumbai / Delhi</div>
              <div className="text-right flex items-end">24 / 7</div>
            </div>
            <h2 className="text-[18vw] sm:text-[14vw] lg:text-[10vw] leading-[0.8] font-serif text-brand-red text-right pointer-events-auto mix-blend-multiply flex flex-col items-end mt-2 tracking-tight">
              <span>AK THE</span>
              <span>CALLGRAPHER</span>
            </h2>
          </motion.div>
        </section>

        {/* STATS SECTION */}
        <section className="py-12 md:py-20 border-b border-ink/20 mb-20 lg:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-ink/20">
            <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} className="pt-8 md:pt-0 md:pl-8 first:pt-0 first:pl-0">
              <div className="font-script text-6xl lg:text-7xl text-brand-red mb-[-10px]">50+</div>
              <div className="font-serif text-4xl lg:text-5xl mb-4">Projects</div>
              <div className="text-[10px] tracking-[0.2em] uppercase opacity-70 leading-relaxed">Completed & Delivered<br/>to Global Clients</div>
            </motion.div>
            <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: 0.1}} className="pt-8 md:pt-0 md:pl-8">
              <div className="font-script text-6xl lg:text-7xl text-brand-red mb-[-10px]">4+</div>
              <div className="font-serif text-4xl lg:text-5xl mb-4">Years</div>
              <div className="text-[10px] tracking-[0.2em] uppercase opacity-70 leading-relaxed">Of Dedicated Mastery<br/>in Traditional Calligraphy</div>
            </motion.div>
            <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: 0.2}} className="pt-8 md:pt-0 md:pl-8">
              <div className="font-script text-6xl lg:text-7xl text-brand-red mb-[-10px]">3</div>
              <div className="font-serif text-4xl lg:text-5xl mb-4">Studios</div>
              <div className="text-[10px] tracking-[0.2em] uppercase opacity-70 leading-relaxed">Major Hubs Active<br/>(Bengaluru, Mumbai, Delhi)</div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="pb-24 border-t border-ink/20 pt-20">
          <motion.h3 
            initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
            className="text-brand-red font-serif text-5xl sm:text-6xl lg:text-[5rem] xl:text-[6rem] leading-[0.85] tracking-tight mb-12 uppercase flex flex-col items-center text-center"
          >
            <span>THE</span>
            <span>SERVICES</span>
            <span className="font-script text-6xl sm:text-7xl lg:text-8xl xl:text-9xl capitalize lowercase text-brand-red font-light -my-2 xl:-my-4">A Story</span>
            <span>TELLS</span>
          </motion.h3>

          <div className="border border-ink flex flex-col sm:flex-row relative mb-12 group h-auto lg:h-[300px] bg-cream cursor-pointer hover:shadow-xl transition-shadow duration-500 max-w-4xl mx-auto">
             <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center border-b sm:border-b-0 sm:border-r border-ink/20">
               <div className="text-[10px] tracking-[0.25em] uppercase mb-6 opacity-70">Service Ticket</div>
               <button suppressHydrationWarning className="border border-ink px-6 py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-brand-red hover:border-brand-red hover:text-cream w-max transition-colors">
                 Enroll
               </button>
             </div>
             <div className="w-full sm:w-[55%] h-[250px] sm:h-full relative overflow-hidden bg-ink">
               <Image src="https://picsum.photos/seed/service/800/500" fill alt="Service" className="object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 opacity-90" referrerPolicy="no-referrer"/>
             </div>
          </div>

          <motion.div 
             initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}}
             className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border-t border-l border-ink bg-cream/50"
          >
            {services.map((s, i) => (
              <div key={i} className="p-6 border-b border-r border-ink flex flex-col justify-between aspect-square hover:bg-white transition-colors duration-300 group">
                <s.icon className="w-8 h-8 mb-6 opacity-50 group-hover:opacity-100 group-hover:text-brand-red transition-all" strokeWidth={1} />
                <div>
                  <h4 className="text-brand-red font-serif text-lg leading-tight mb-2 whitespace-pre-line group-hover:scale-[1.02] origin-left transition-transform duration-300">{s.title}</h4>
                  <p className="text-[10px] sm:text-xs leading-relaxed opacity-70 mt-3 mix-blend-multiply">{s.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* PRICING SECTION */}
        <section className="pb-24 border-t border-ink/20 pt-20">
          <motion.h3 
            initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
            className="text-brand-red font-serif text-5xl sm:text-6xl lg:text-[5rem] xl:text-[6rem] leading-[0.85] tracking-tight mb-12 uppercase flex flex-col items-center text-center"
          >
            <span>THE</span>
            <span>PRICING</span>
            <span className="font-script text-6xl sm:text-7xl lg:text-8xl xl:text-9xl capitalize lowercase text-brand-red font-light -my-2 xl:-my-4">A Story</span>
            <span>TELLS</span>
          </motion.h3>
          
          <p className="text-[11px] sm:text-xs opacity-70 leading-relaxed max-w-lg mx-auto text-center mb-12 mix-blend-multiply">
             Each work is an encounter—an encounter where you don't just see art, but experience it. A living dialogue between the mind and the viewer.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((p, i) => (
              <motion.div 
                initial={{opacity: 0, scale: 0.95}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: i * 0.1}}
                key={i} className="bg-ink text-cream p-6 flex flex-col gap-6 ticket-shape relative group overflow-hidden cursor-pointer hover:bg-brand-red transition-colors duration-500"
              >
                <div className="w-full h-40 bg-cream/5 p-2 shrink-0 border border-cream/10 group-hover:border-cream/30 transition-colors">
                  <div className="w-full h-full relative">
                     <Image src={`https://picsum.photos/seed/plan${i}/400/300`} fill alt="Plan" className="object-cover grayscale opacity-70 mix-blend-lighten" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center pb-4 text-center group-hover:text-cream">
                  <h4 className="uppercase tracking-[0.2em] text-[10px] mb-2 text-cream/70 group-hover:text-cream/90">{p.name}</h4>
                  <div className="font-serif text-3xl mb-6 font-light">{p.price}</div>
                  <ul className="text-[10px] space-y-2 text-cream/60 group-hover:text-cream/90 text-left w-max mx-auto">
                    {p.features.map((f, j) => <li key={j} className="flex items-center gap-2"><span>•</span> {f}</li>)}
                  </ul>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[8px] uppercase tracking-[0.4em] opacity-30 group-hover:opacity-100 transition-opacity hidden sm:block">
                  Ticket
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CLIENTS SECTION */}
        <section className="pb-24 border-t border-ink/20 pt-20">
          <motion.h3 
            initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
            className="text-brand-red font-serif text-5xl sm:text-6xl lg:text-[5rem] xl:text-[6rem] leading-[0.85] tracking-tight mb-16 uppercase flex flex-col items-center text-center"
          >
            <span>THE</span>
            <span>CLIENTS</span>
            <span className="font-script text-6xl sm:text-7xl lg:text-8xl xl:text-9xl capitalize lowercase text-brand-red font-light -my-2 xl:-my-4">A Story</span>
            <span>TELLS</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {clients.map((c, i) => (
              <motion.div 
                initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: i * 0.1}}
                key={i} className="flex flex-col items-center text-center gap-6 group cursor-default"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden border border-ink/20 group-hover:border-brand-red transition-colors bg-ink/5">
                  <Image src={c.img} fill alt={c.author} className="object-cover grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="font-serif text-xl border-t border-brand-red/30 group-hover:border-brand-red pt-6 transition-colors text-ink/90 italic">
                  "{c.quote}" <br/><span className="text-[10px] mt-4 block not-italic font-sans opacity-70 tracking-[0.1em] uppercase">— {c.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="pb-24 border-t border-ink/20 pt-20">
          <motion.h3 
            initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
            className="text-brand-red font-serif text-5xl sm:text-6xl lg:text-[5rem] xl:text-[6rem] leading-[0.85] tracking-tight mb-12 uppercase flex flex-col items-center text-center"
          >
            <span>THE</span>
            <span>QUESTIONS</span>
            <span className="font-script text-6xl sm:text-7xl lg:text-8xl xl:text-9xl capitalize lowercase text-brand-red font-light -my-2 xl:-my-4">A Story</span>
            <span>TELLS</span>
          </motion.h3>

          <div className="border-t border-ink/40 flex flex-col mt-4 max-w-4xl mx-auto">
            <div>
              {faqs.map((f, i) => (
                <div key={i} className="border-b border-ink/20">
                  <button 
                    suppressHydrationWarning
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full py-6 flex justify-between items-center text-left hover:text-brand-red transition-colors group"
                  >
                    <div className="font-serif text-brand-red text-lg sm:text-xl uppercase tracking-wider pr-4">{f.q}</div>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 opacity-50 group-hover:opacity-100 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs sm:text-sm opacity-70 leading-relaxed pb-8 pr-12 mix-blend-multiply">{f.a}</p>
                  </motion.div>
                </div>
              ))}
            </div>
            
            {/* Bottom Info text inside FAQ area representing footer */}
            <div className="mt-20 flex justify-between items-end pb-8">
               <div className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80 border-b border-ink/20 pb-1 w-24">
                 Open Daily
               </div>
               <div className="font-script text-6xl opacity-90 lowercase mb-[-10px] text-brand-red">Aos</div>
               <div className="text-right text-[10px] uppercase tracking-[0.2em] font-medium opacity-80 border-b border-ink/20 pb-1 w-24">
                 10:00 AM<br/>— 06:00 PM
               </div>
            </div>
          </div>
        </section>

        {/* FULL WIDTH PROCESS SECTION */}
        <section className="py-20 border-t border-ink/20 relative">
          <motion.h3 
            initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
            className="text-brand-red font-serif text-5xl sm:text-6xl lg:text-[5rem] xl:text-[6rem] leading-[0.85] tracking-tight mb-16 uppercase flex flex-col items-center text-center"
          >
            <span>THE</span>
            <span className="font-script text-6xl sm:text-7xl lg:text-8xl xl:text-9xl capitalize lowercase text-brand-red font-light -my-2 xl:-my-4">Creative</span>
            <span>PROCESS</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-ink/20 text-center relative border-y border-ink/20 bg-cream/30">
            {[
              { t: '1. Discovery', d: 'An initial consultation to uncover the narrative and vision behind your prospective piece.' },
              { t: '2. Concept', d: 'Developing preliminary strokes, drafts, and layout choices using authentic materials.' },
              { t: '3. Creation', d: 'Meticulous execution, where ink flows and the artwork takes its definitive form.' },
              { t: '4. Delivery', d: 'Careful curation, archival framing, and final delivery of the finished masterpiece.' }
            ].map((step, i) => (
               <div key={i} className="p-10 group hover:bg-brand-red hover:text-cream transition-colors duration-500 cursor-default">
                  <h4 className="font-serif text-2xl mb-4 italic">{step.t}</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-70 leading-relaxed group-hover:opacity-100 transition-opacity">
                    {step.d}
                  </p>
               </div>
            ))}
          </div>
        </section>

        {/* BOOK A CALL / CONTACT FORM */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center border-t border-ink/20">
            <div>
              <motion.h3 
                initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
                className="text-brand-red font-serif text-5xl sm:text-6xl lg:text-[5rem] leading-[0.85] tracking-tight mb-8 uppercase flex flex-col"
              >
                <span>BOOK</span>
                <span className="font-script text-6xl sm:text-7xl lg:text-8xl capitalize ml-12 lowercase text-brand-red font-light -my-2">A Consultation</span>
                <span>CALL</span>
              </motion.h3>
              <p className="text-sm opacity-70 mb-10 max-w-md leading-relaxed mix-blend-multiply">
                Connect with our studio to discuss custom calligraphy, manuscript restoration, or bespoke branding. Share your vision, and we will bring it to life in ink.
              </p>
              
              <div className="space-y-6 text-sm font-serif">
                <div className="flex items-center gap-6 border-b border-ink/20 pb-4 group">
                  <div className="w-10 h-10 border border-ink/40 rounded-full flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-cream transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href="tel:+919625654137" className="hover:text-brand-red transition-colors text-lg tracking-wide">+91 96256 54137</a>
                </div>
                <div className="flex items-center gap-6 border-b border-ink/20 pb-4 group">
                   <div className="w-10 h-10 border border-ink/40 rounded-full flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] group-hover:text-cream transition-all">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <a href="https://wa.me/918448207449" className="hover:text-[#25D366] transition-colors text-lg tracking-wide">+91 84482 07449 <span className="opacity-50 text-xs italic tracking-normal ml-2 font-sans">(WhatsApp)</span></a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-cream p-8 sm:p-12 border border-ink/20 relative shadow-xl shadow-black/5">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-red"></div>
               <form suppressHydrationWarning className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80 block mb-2">Your Name</label>
                    <input suppressHydrationWarning type="text" className="w-full bg-transparent border-b border-ink/40 pb-2 focus:border-brand-red transition-colors font-serif outline-none placeholder:italic placeholder:opacity-40" placeholder="e.g. Eleanor Croft" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80 block mb-2">Email Address</label>
                    <input suppressHydrationWarning type="email" className="w-full bg-transparent border-b border-ink/40 pb-2 focus:border-brand-red transition-colors font-serif outline-none placeholder:italic placeholder:opacity-40" placeholder="e.croft@example.com" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80 block mb-2">Service Required</label>
                    <select suppressHydrationWarning className="w-full bg-transparent border-b border-ink/40 pb-2 focus:border-brand-red transition-colors font-serif appearance-none outline-none">
                      <option>Select a service...</option>
                      <option>Art Conservation</option>
                      <option>Custom Commission</option>
                      <option>Live Calligraphy Event</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80 block mb-2">Message detailing your vision</label>
                    <textarea suppressHydrationWarning rows={3} className="w-full bg-transparent border-b border-ink/40 pb-2 focus:border-brand-red transition-colors font-serif resize-none outline-none placeholder:italic placeholder:opacity-40" placeholder="Ponder carefully, then write..."></textarea>
                  </div>
                  <button suppressHydrationWarning className="w-full border border-ink py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-brand-red hover:border-brand-red hover:text-cream transition-all flex items-center justify-center gap-3 group mt-4">
                    Send Enquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
               </form>
            </div>
        </section>

      </div>

      {/* FIXED FLOATING BUTTONS */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-[100]">
        <a href="https://wa.me/918448207449" target="_blank" rel="noreferrer" className="w-14 h-14 bg-ink text-cream rounded-full flex items-center justify-center shadow-xl shadow-black/10 hover:bg-[#25D366] hover:-translate-y-1 transition-all duration-300">
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
        <a href="tel:+919625654137" className="w-14 h-14 bg-brand-red text-cream rounded-full flex items-center justify-center shadow-xl shadow-brand-red/20 hover:bg-opacity-90 hover:-translate-y-1 transition-all duration-300 relative group">
          <Phone className="w-6 h-6 fill-current" />
          <div className="absolute absolute -inset-2 rounded-full border border-brand-red/50 animate-ping opacity-0 group-hover:opacity-100"></div>
        </a>
      </div>
    </main>
  );
}
