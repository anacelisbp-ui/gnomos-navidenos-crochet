import {
  ArrowRight,
  Check,
  CheckCircle2,
  Download,
  FileText,
  Gift,
  Heart,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
} from 'lucide-react';

const checkoutUrl = 'https://pay.hotmart.com/J103184850H';

const benefits = [
  {
    icon: Heart,
    title: 'Disfruta cada puntada',
    copy: 'Convierte tus momentos de crochet en una experiencia navideña creativa y gratificante.',
  },
  {
    icon: Gift,
    title: 'Crea regalos memorables',
    copy: 'Entrega algo hecho por ti, con personalidad y mucho más significado que un regalo común.',
  },
  {
    icon: ShoppingBag,
    title: 'Amplía tu catálogo',
    copy: 'Suma cinco diseños de temporada que llaman la atención en ferias, redes sociales y pedidos.',
  },
];

const included = [
  'Cinco patrones digitales en formato PDF',
  'Instrucciones detalladas paso a paso',
  'Cinco diseños navideños diferentes',
  'Proyectos terminados de aproximadamente 25 cm',
  'Acceso inmediato después de confirmar el pago',
  'Garantía de satisfacción de 7 días',
];

const faqs = [
  {
    question: '¿Recibiré un producto físico?',
    answer:
      'No. Esta compra incluye cinco patrones digitales en formato PDF para que puedas tejer los gnomos por tu cuenta.',
  },
  {
    question: '¿Es un curso en video?',
    answer:
      'No. Es una colección de cinco patrones PDF con instrucciones paso a paso. No incluye clases ni módulos en video.',
  },
  {
    question: '¿Necesito ser experta en crochet?',
    answer:
      'No, pero sí es recomendable conocer los puntos básicos de crochet y saber interpretar instrucciones sencillas.',
  },
  {
    question: '¿Cómo recibo los patrones?',
    answer:
      'Hotmart habilitará el acceso digital después de que tu pago sea aprobado. Podrás consultarlos desde el acceso indicado en tu compra.',
  },
  {
    question: '¿Qué ocurre si la colección no es para mí?',
    answer:
      'Tu compra cuenta con una garantía de satisfacción de 7 días, gestionada de acuerdo con las condiciones de Hotmart.',
  },
];

function BuyButton({
  label = 'Quiero los 5 patrones por US$4.99',
  className = '',
}) {
  return (
    <a className={`primary-cta ${className}`} href={checkoutUrl}>
      {label} <ArrowRight aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <Sparkles aria-hidden="true" /> Colección digital · Acceso inmediato ·
        Pago único
      </div>

      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <header className="site-header shell">
          <a
            className="brand"
            href="#inicio"
            aria-label="Manos Punto de Croché, inicio"
          >
            <span className="brand-mark">M</span>
            <span>Manos Punto de Croché</span>
          </a>
          <a className="header-cta" href={checkoutUrl}>
            Obtener los patrones
          </a>
        </header>

        <div className="shell hero-grid" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Colección navideña · 5 patrones PDF</p>
            <h1>Teje 5 gnomos navideños que todos querrán tener</h1>
            <p className="hero-lead">
              Crea una colección encantadora de aproximadamente 25 cm con
              instrucciones paso a paso, incluso si solo conoces los puntos
              básicos de crochet.
            </p>
            <ul className="hero-points" aria-label="Beneficios principales">
              <li>
                <CheckCircle2 aria-hidden="true" /> Descarga inmediata después
                de tu compra
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" /> Cinco diseños diferentes en
                una sola colección
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" /> Garantía de satisfacción de
                7 días
              </li>
            </ul>
            <BuyButton />
            <p className="secure-note">
              <ShieldCheck aria-hidden="true" /> Pago único y seguro mediante
              Hotmart
            </p>
          </div>

          <div className="hero-art">
            <div className="hero-badge">
              <span>5</span>patrones
            </div>
            <img
              src="/gnomos-coleccion.png"
              alt="Colección de cinco gnomos navideños tejidos a crochet"
            />
            <p>Para decorar, regalar o sumar a tu catálogo navideño</p>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Información de compra">
        <div className="shell trust-grid">
          <div>
            <Download aria-hidden="true" />
            <span>
              <strong>Entrega digital</strong>Acceso después de tu compra
            </span>
          </div>
          <div>
            <FileText aria-hidden="true" />
            <span>
              <strong>5 archivos PDF</strong>Una colección completa
            </span>
          </div>
          <div>
            <ShieldCheck aria-hidden="true" />
            <span>
              <strong>Compra protegida</strong>Garantía de 7 días
            </span>
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="shell split-grid">
          <div className="photo-frame">
            <img
              src="/gnomos-bosque.jpg"
              alt="Cinco gnomos navideños tejidos en un entorno natural"
            />
            <div className="photo-note">
              <Star aria-hidden="true" /> Cinco personajes, cinco estilos
            </div>
          </div>
          <div className="section-copy">
            <p className="kicker">Una Navidad hecha por ti</p>
            <h2>
              De un ovillo a una colección que llena cualquier espacio de magia
            </h2>
            <p>
              No necesitas buscar cinco proyectos separados. Esta colección
              reúne diseños diferentes para que puedas disfrutar del proceso y
              terminar piezas con una presencia encantadora.
            </p>
            <ul className="check-list">
              <li>
                <Check aria-hidden="true" /> Un proyecto creativo para disfrutar
                a tu ritmo
              </li>
              <li>
                <Check aria-hidden="true" /> Regalos hechos a mano con
                significado
              </li>
              <li>
                <Check aria-hidden="true" /> Diseños ideales para la temporada
                navideña
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="shell">
          <div className="section-heading centered">
            <p className="kicker">Más que un patrón</p>
            <h2>Elige lo que quieres crear con tus manos</h2>
            <p>
              Una misma colección puede convertirse en decoración, regalos o una
              nueva propuesta para tus clientes.
            </p>
          </div>
          <div className="benefit-grid">
            {benefits.map(({ icon: Icon, title, copy }) => (
              <article className="benefit-card" key={title}>
                <span className="icon-box">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section included-section" id="incluye">
        <div className="shell included-card">
          <div className="included-art" aria-hidden="true">
            <img src="/gnomos-coleccion.png" alt="" />
          </div>
          <div className="included-copy">
            <p className="kicker light">Lo que recibes</p>
            <h2>Todo lo necesario para comenzar tu colección</h2>
            <ul className="included-list">
              {included.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
            <BuyButton
              label="Quiero recibir la colección"
              className="cta-light"
            />
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="shell">
          <div className="section-heading centered">
            <p className="kicker">Resultados de tejedoras</p>
            <h2>Cuando las instrucciones son claras, crear se disfruta más</h2>
          </div>
          <div className="testimonial-grid">
            <figure>
              <img
                src="/testimonio-laura.png"
                alt="Testimonio de Laura Méndez sobre los patrones"
              />
            </figure>
            <figure>
              <img
                src="/testimonio-camila.png"
                alt="Testimonio de Camila Soto sobre los patrones"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section price-section" id="comprar">
        <div className="shell price-card">
          <div className="price-copy">
            <p className="kicker light">Una colección, cinco posibilidades</p>
            <h2>Lleva los 5 patrones hoy</h2>
            <p className="price-description">
              Un único pago. Sin suscripciones. Acceso digital después de
              confirmar la compra.
            </p>
            <div className="price">
              <span>US$</span>4.99
            </div>
            <BuyButton label="Sí, quiero mis 5 patrones" className="cta-gold" />
            <p className="price-secure">
              <ShieldCheck aria-hidden="true" /> Compra procesada de forma
              segura por Hotmart
            </p>
          </div>
          <div className="price-list">
            <h3>Tu compra incluye:</h3>
            <ul>
              {included.slice(0, 5).map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section creator-section">
        <div className="shell creator-grid">
          <div className="creator-photo">
            <img
              src="/sophie-gnomo.png"
              alt="Sophie sosteniendo un gnomo navideño tejido"
            />
          </div>
          <div className="section-copy">
            <p className="kicker">Detrás de cada patrón</p>
            <h2>Hola, creadora. Soy Sophie</h2>
            <p>
              Soy artesana y diseñadora detrás de Manos Punto de Croché. Mi
              propósito es transformar hilos en piezas llenas de encanto y
              ayudarte a crear proyectos que puedas disfrutar, compartir y
              mostrar con orgullo.
            </p>
            <p>
              Esta colección fue pensada para acompañarte puntada a puntada
              mientras das vida a cinco personajes navideños únicos.
            </p>
          </div>
        </div>
      </section>

      <section className="section guarantee-section">
        <div className="shell guarantee-card">
          <img
            src="/garantia-7-dias.png"
            alt="Sello de garantía de siete días"
          />
          <div>
            <p className="kicker">Compra con tranquilidad</p>
            <h2>Tienes 7 días para conocer la colección</h2>
            <p>
              Si después de revisar los patrones sientes que esta colección no
              es para ti, puedes solicitar el reembolso dentro del plazo de
              garantía conforme a las condiciones de Hotmart.
            </p>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-grid">
          <div className="section-heading">
            <p className="kicker">Antes de comenzar</p>
            <h2>Preguntas frecuentes</h2>
            <p>
              Todo lo importante sobre tu compra, explicado sin letras pequeñas.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div>
            <p className="kicker light">Tu próximo proyecto comienza aquí</p>
            <h2>Esta Navidad, la magia puede salir de tus propias manos</h2>
          </div>
          <div className="final-action">
            <div className="mini-price">5 patrones · US$4.99</div>
            <BuyButton label="Quiero empezar a tejer" className="cta-gold" />
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <div className="brand footer-brand">
            <span className="brand-mark">M</span>
            <span>Manos Punto de Croché</span>
          </div>
          <p>© 2026 Manos Punto de Croché. Todos los derechos reservados.</p>
          <p className="footer-note">
            Producto digital. Los resultados dependen de la experiencia y
            dedicación de cada persona.
          </p>
        </div>
      </footer>

      <div className="mobile-buybar">
        <span>
          <strong>5 patrones PDF</strong>US$4.99
        </span>
        <a href={checkoutUrl}>Comprar ahora</a>
      </div>
    </main>
  );
}
