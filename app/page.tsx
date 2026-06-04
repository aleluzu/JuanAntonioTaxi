import Image from "next/image";
import {
  AirplaneTakeoff,
  Buildings,
  CalendarCheck,
  CarProfile,
  Clock,
  FirstAidKit,
  GraduationCap,
  Handshake,
  MapPin,
  PhoneCall,
  ShieldCheck,
  UsersThree,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

const phone = "689 281 042";
const whatsappUrl = "https://wa.me/34689281042";
const phoneUrl = "tel:+34689281042";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const services = [
  {
    name: "Aeropuertos",
    description: "Traslados al aeropuerto de Granada y otros",
    icon: AirplaneTakeoff,
  },
  {
    name: "Mutuas y centros médicos",
    description: "Traslados a consultas y tratamientos",
    icon: FirstAidKit,
  },
  {
    name: "Empresas",
    description: "Servicio regular para trabajadores y directivos",
    icon: Buildings,
  },
  {
    name: "Particulares",
    description: "Trayectos locales e interurbanos",
    icon: UsersThree,
  },
  {
    name: "Servicios escolares",
    description: "Transporte seguro para estudiantes",
    icon: GraduationCap,
  },
];

const reasons = [
  {
    title: "Más de 30 años de experiencia al volante",
    icon: CalendarCheck,
  },
  {
    title: "Puntualidad garantizada en cada servicio",
    icon: Clock,
  },
  {
    title: "Fiabilidad y trato cercano en cada trayecto",
    icon: Handshake,
  },
  {
    title: "Toyota RAV4 blanco, amplio y cómodo para viajar con equipaje",
    icon: CarProfile,
  },
];

const areas = [
  "Guadix",
  "Baños de Graena",
  "Comarca de Guadix",
  "Aeropuerto de Granada",
  "Provincia de Granada",
];

export default function Home() {
  return (
    <main>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Juan Antonio Requena</p>
          <h1 id="hero-title">30 años llevándote a donde necesitas</h1>
          <p className="hero-subtext">
            Taxi nº 10 de Guadix y taxi nº 2 de Baños de Graena.
          </p>
          <div className="cta-row" aria-label="Acciones de contacto">
            <a className="button button-primary" href={phoneUrl}>
              <PhoneCall size={20} weight="bold" aria-hidden="true" />
              <span>Llamar ahora - {phone}</span>
            </a>
            <a className="button button-secondary" href={whatsappUrl}>
              <WhatsappLogo size={20} weight="bold" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
        <div className="hero-media" aria-label="Toyota RAV4 blanco de taxi">
          <Image
            src={`${basePath}/images/rav4.webp`}
            alt="Toyota RAV4 blanco de Juan Antonio Requena"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
        </div>
      </section>

      <section className="services-section" aria-labelledby="services-title">
        <div className="section-shell services-shell">
          <div className="section-heading">
            <p className="section-label">Servicios</p>
            <h2 id="services-title">Trayectos para cada necesidad</h2>
          </div>
          <div className="service-list">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="service-item" key={service.name}>
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="service-icon" aria-hidden="true">
                    <Icon size={30} weight="duotone" />
                  </div>
                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="why-section" aria-labelledby="why-title">
        <div className="section-shell why-shell">
          <div className="why-media">
            <Image
              src={`${basePath}/images/taxista-con-coche.webp`}
              alt="Juan Antonio Requena junto a su Toyota RAV4 blanco"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className="why-image"
            />
          </div>
          <div className="why-copy">
            <p className="section-label">Por qué elegirme</p>
            <h2 id="why-title">Un servicio local, puntual y cercano</h2>
            <div className="reason-list">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <article className="reason-item" key={reason.title}>
                    <span aria-hidden="true">
                      <Icon size={26} weight="duotone" />
                    </span>
                    <h3>{reason.title}</h3>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="zone-section" aria-labelledby="zone-title">
        <Image
          src={`${basePath}/images/guadix.webp`}
          alt="Vista de Guadix y su entorno"
          fill
          sizes="100vw"
          className="zone-image"
        />
        <div className="zone-overlay" />
        <div className="section-shell zone-content">
          <p className="section-label section-label-light">Zona de servicio</p>
          <h2 id="zone-title">Cobertura local y provincial</h2>
          <ul className="area-list">
            {areas.map((area) => (
              <li key={area}>
                <MapPin size={22} weight="bold" aria-hidden="true" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="contact-title">
        <div className="section-shell contact-shell">
          <div>
            <p className="section-label">Contacto</p>
            <h2 id="contact-title">Reserva tu taxi</h2>
          </div>
          <div className="contact-panel">
            <a className="contact-phone" href={phoneUrl}>
              {phone}
            </a>
            <div className="contact-actions">
              <a className="button button-primary" href={phoneUrl}>
                <PhoneCall size={20} weight="bold" aria-hidden="true" />
                <span>Llamar</span>
              </a>
              <a className="button button-secondary" href={whatsappUrl}>
                <WhatsappLogo size={20} weight="bold" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
            <div className="taxi-lines" aria-label="Licencias de taxi">
              <p>Taxi nº 10 - Guadix</p>
              <p>Taxi nº 2 - Baños de Graena</p>
            </div>
            <div className="trust-line">
              <ShieldCheck size={24} weight="duotone" aria-hidden="true" />
              <p>Más de 30 años de experiencia al volante</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mobile-contact-bar" aria-label="Contacto rápido">
        <a href={phoneUrl}>
          <PhoneCall size={18} weight="bold" aria-hidden="true" />
          <span>Llamar</span>
        </a>
        <a href={whatsappUrl}>
          <WhatsappLogo size={18} weight="bold" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </div>
    </main>
  );
}
