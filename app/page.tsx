import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Reveal, { SplitHeading } from "@/components/Reveal";
import { ArrowRight, ArrowUpRight, Instagram, Mail, Phone, Pin, WhatsApp } from "@/components/Icons";
import { instaPosts, nav, process, services, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />

        {/* ───────────── INTRO ───────────── */}
        <section id="intro" className="section intro" aria-label="About the studio">
          <div className="container intro__grid">
            <div className="intro__copy">
              <p className="eyebrow">The Studio</p>
              <SplitHeading lines={["Design with", "*Intention*"]} className="display-l" />
              <Reveal as="p" className="lead" delay={150}>
                At House of Interio, we believe a beautiful room is only half the job. It also has
                to feel right to live in. Each project is a careful mix of light, texture and
                proportion, shaped around the people who will call it home.
              </Reveal>
              <Reveal as="p" className="body" delay={250}>
                Our Jaipur studio takes projects from the first sketch to the final cushion. We
                pair modern planning with the craftsmanship Rajasthan is known for: carved
                timber, natural stone and hand-finished detail.
              </Reveal>
              <Reveal delay={350}>
                <a href="#story" className="link-arrow">Meet the founder <ArrowRight size={18} /></a>
              </Reveal>
            </div>

            <div className="intro__images">
              <Reveal className="img-reveal intro__img-a">
                <Image src="/images/kanak-bedroom.jpg" alt="Serene master bedroom with timber feature panel and sheer drapes" fill sizes="(max-width: 900px) 70vw, 30vw" />
              </Reveal>
              <Reveal className="img-reveal intro__img-b" delay={200}>
                <Image src="/images/arc-arch.jpg" alt="Arched timber doorway framing a softly lit living room" fill sizes="(max-width: 900px) 45vw, 18vw" />
              </Reveal>
              <Reveal as="p" className="intro__caption" delay={400}>
                Kanakshree Residence, Jaipur
              </Reveal>
            </div>
          </div>

          <div className="container">
            <ul className="pillars">
              {[
                ["Concept", "Mood, layouts & materials"],
                ["3D", "See it before it's built"],
                ["Turnkey", "One team, start to finish"],
                ["Bespoke", "Furniture made for you"],
              ].map(([t, s], idx) => (
                <Reveal as="li" key={t} delay={idx * 90}>
                  <span className="pillars__t">{t}</span>
                  <span className="pillars__s">{s}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────────── MY STORY ───────────── */}
        <section id="story" className="section story" aria-labelledby="story-title">
          <div className="story__bgword" aria-hidden="true">Anjali</div>
          <div className="container story__grid">
            <div className="story__images">
              <Reveal className="img-reveal story__img-main">
                <Image src="/images/anjali-studio.jpg" alt="Anjali Goyal sketching a design on a tablet in the studio" fill sizes="(max-width: 900px) 80vw, 34vw" />
              </Reveal>
              <Reveal className="img-reveal story__img-small" delay={250}>
                <Image src="/images/anjali-portrait.jpg" alt="Portrait of Anjali Goyal, founder of House of Interio" fill sizes="(max-width: 900px) 45vw, 16vw" />
              </Reveal>
              <Reveal className="story__badge" delay={450}>
                <Image src="/brand/mark-color.png" alt="" width={745} height={395} />
                <span>Founder &amp;<br />Principal Designer</span>
              </Reveal>
            </div>

            <div className="story__copy">
              <p className="eyebrow">My Story · By Anjali Goyal</p>
              <SplitHeading id="story-title" lines={["Every home", "holds a *story*"]} className="display-l" />

              <Reveal as="p" className="lead" delay={120}>
                I grew up in Jaipur, surrounded by carved jharokhas, sunlit courtyards and the warm
                pink stone of the old city. Those spaces taught me early that a home can hold a
                feeling, a memory and a whole way of life.
              </Reveal>
              <Reveal as="p" className="body" delay={200}>
                I started House of Interio to design spaces that feel personal, not just
                impressive. Every project begins with listening: how you start your mornings,
                where the family gathers, what you want to feel when you open the door. Only then
                do I reach for the sketchbook.
              </Reveal>
              <Reveal as="p" className="body" delay={260}>
                Today my team and I design homes, villas, boutiques and restaurants across
                Rajasthan. We handle every step ourselves, from 3D visualisation to the final
                styling, so the space you imagined is the space you live in.
              </Reveal>

              <Reveal as="blockquote" className="story__quote" delay={320}>
                &ldquo;I am not just designing a house. I am designing the way you will live in it.&rdquo;
              </Reveal>

              <Reveal className="story__sign" delay={380}>
                <span className="story__signature">Anjali Goyal</span>
                <span className="story__role">Founder, House of Interio</span>
              </Reveal>

              <Reveal className="story__contact" delay={440}>
                <a href={site.phoneHref}><Phone size={18} /> {site.phone}</a>
                <a href={`mailto:${site.email}`}><Mail size={18} /> {site.email}</a>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer"><WhatsApp size={18} /> WhatsApp</a>
              </Reveal>
            </div>
          </div>

          <div className="container">
            <Reveal className="story__award">
              <div className="story__award-img img-reveal">
                <Image src="/images/anjali-award.jpg" alt="Anjali Goyal receiving an award at ACE Reflect" fill sizes="(max-width: 900px) 40vw, 14vw" />
              </div>
              <p>
                <span className="eyebrow">Recognition</span>
                Honoured at <em>ACE Reflect</em> for work in interior design. Recognition we
                share with every client who trusted us with their home.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ───────────── SERVICES ───────────── */}
        <section id="services" className="section services" aria-label="Services">
          <div className="services__bg" aria-hidden="true">
            <Image src="/images/villa-corridor.jpg" alt="" fill sizes="100vw" />
          </div>
          <div className="container services__grid">
            <div className="services__intro">
              <p className="eyebrow eyebrow--light">Services</p>
              <SplitHeading lines={["Design that", "*Resonates*"]} className="display-l" />
              <Reveal as="p" className="body body--light" delay={150}>
                We offer more than design. Each space is planned for clarity, texture and a
                calm sense of presence, and built with the same care.
              </Reveal>
              <Reveal delay={250}>
                <a href="#contact" className="link-arrow link-arrow--light">Get in touch <ArrowRight size={18} /></a>
              </Reveal>
            </div>

            <ol className="services__cards">
              {services.map((s, idx) => (
                <Reveal as="li" key={s.no} className="svc" delay={(idx % 3) * 110}>
                  <span className="svc__no">{s.no}</span>
                  <div className="svc__img">
                    <Image src={s.img} alt="" fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 40vw, 20vw" />
                  </div>
                  <h3 className="svc__title">{s.title}</h3>
                  <p className="svc__text">{s.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <Portfolio />

        {/* ───────────── PROCESS ───────────── */}
        <section id="process" className="section process" aria-label="Design process">
          <div className="container process__grid">
            <div className="process__head">
              <p className="eyebrow">Our Process</p>
              <SplitHeading lines={["From first sketch", "to final *reveal*"]} className="display-l" />
              <Reveal as="p" className="body" delay={150}>
                A clear, collaborative journey with no guesswork. At every stage you know
                what comes next and how it will look.
              </Reveal>
              <div className="process__mood" aria-hidden="true">
                <Reveal className="img-reveal pm pm--a"><Image src="/images/mat-wood.jpg" alt="" fill sizes="14vw" /></Reveal>
                <Reveal className="img-reveal pm pm--b" delay={150}><Image src="/images/mat-embroidery.jpg" alt="" fill sizes="12vw" /></Reveal>
                <Reveal className="img-reveal pm pm--c" delay={300}><Image src="/images/mat-leaf.jpg" alt="" fill sizes="12vw" /></Reveal>
              </div>
            </div>

            <ol className="steps">
              {process.map((p, idx) => (
                <Reveal as="li" key={p.no} className="step" delay={idx * 80}>
                  <span className="step__no">{p.no}</span>
                  <div>
                    <h3 className="step__title">{p.title}</h3>
                    <p className="step__text">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <Testimonials />

        {/* ───────────── INSTAGRAM ───────────── */}
        <section className="section insta" aria-labelledby="insta-title">
          <div className="container">
            <div className="insta__head">
              <div>
                <p className="eyebrow">On Instagram</p>
                <SplitHeading id="insta-title" lines={["Follow the", "*journey*"]} className="display-l" />
              </div>
              <Reveal className="insta__meta" delay={150}>
                <p className="body">Site visits, works in progress and finished reveals from the studio.</p>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  <Instagram size={18} /> {site.instagramHandle}
                </a>
              </Reveal>
            </div>

            <ul className="insta__grid">
              {instaPosts.map((p, idx) => (
                <Reveal as="li" key={p.src} delay={(idx % 6) * 70}>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="insta__tile" aria-label={`${p.alt}. View on Instagram`}>
                    <Image src={p.src} alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 960px) 33vw, 16vw" />
                    <span className="insta__hover" aria-hidden="true"><Instagram size={26} /></span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────────── CONTACT ───────────── */}
        <section id="contact" className="section contact" aria-label="Contact">
          <div className="container contact__grid">
            <div className="contact__info">
              <p className="eyebrow">Contact</p>
              <SplitHeading lines={["Let’s begin a", "*Conversation*"]} className="display-l" />
              <Reveal as="p" className="body" delay={150}>
                Tell us about your space and what you have in mind. Anjali will personally get
                back to you to plan a consultation.
              </Reveal>

              <Reveal as="ul" className="contact__list" delay={250}>
                <li>
                  <Phone size={20} />
                  <div><span className="contact__label">Call</span><a href={site.phoneHref}>{site.phone}</a></div>
                </li>
                <li>
                  <Mail size={20} />
                  <div><span className="contact__label">Email</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
                </li>
                <li>
                  <Instagram size={20} />
                  <div><span className="contact__label">Instagram</span><a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a></div>
                </li>
                <li>
                  <Pin size={20} />
                  <div><span className="contact__label">Studio</span><span>{site.city}</span></div>
                </li>
              </Reveal>
            </div>

            <Reveal className="contact__form" delay={200}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div>
              <Image src="/brand/logo-light.png" alt="House of Interio" width={790} height={730} className="footer__logo" />
              <p className="footer__tag">Spaces that reflect you.<br /><em>Designs that elevate you.</em></p>
            </div>
            <div className="footer__cols">
              <div>
                <p className="footer__h">Explore</p>
                {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
              </div>
              <div>
                <p className="footer__h">Studio</p>
                <span>{site.city}</span>
                <a href={site.phoneHref}>{site.phone}</a>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div>
                <p className="footer__h">Follow</p>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={14} /></a>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14} /></a>
              </div>
            </div>
          </div>
          <p className="footer__big" aria-hidden="true">House of <em>Interio</em></p>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} House of Interio. All rights reserved.</span>
            <span>Designed with love by Milind</span>
          </div>
        </div>
      </footer>

      <div className="fabs">
        <a href={site.instagram} className="fab fab--insta" target="_blank" rel="noopener noreferrer" aria-label="Follow House of Interio on Instagram">
          <Instagram size={22} />
        </a>
        <a href={`https://wa.me/${site.whatsapp}`} className="fab" target="_blank" rel="noopener noreferrer" aria-label="Chat with House of Interio on WhatsApp">
          <WhatsApp size={24} />
        </a>
      </div>
    </>
  );
}
