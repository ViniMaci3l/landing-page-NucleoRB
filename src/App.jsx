import { useEffect, useMemo, useRef, useState } from 'react'
import {
  gallery,
  pillars,
  protocols,
  specialties,
  team,
  technologies,
  whatsappUrl,
} from './data'
import './App.css'

const quickMessage =
  'Olá, equipe Núcleo RB. Gostaria de agendar uma avaliação e receber orientações.'

function whatsappWithMessage(message) {
  return `${whatsappUrl}?text=${encodeURIComponent(message)}`
}

function BrandLogo() {
  return (
    <img
      className="brand-logo"
      src="/assets/logo.png"
      alt="Núcleo RB - Dra. Renata Bogéa"
      width="813"
      height="784"
    />
  )
}

function SectionIntro({ eyebrow, title, text, dark = false }) {
  return (
    <div className={`section-intro reveal ${dark ? 'dark' : ''}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 80 || currentScrollY < lastScrollY.current) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false)
      }

      lastScrollY.current = currentScrollY
    }

    lastScrollY.current = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${isVisible ? 'is-visible' : 'is-hidden'}`}>
      <a className="brand" href="#top" aria-label="Núcleo RB">
        <BrandLogo />
        <span>
          Núcleo RB
          <small>Dra. Renata Bogéa</small>
        </span>
      </a>
      <nav aria-label="Navegação principal">
        <a href="#pilares">Pilares</a>
        <a href="#renata">Dra. Renata</a>
        <a href="#protocolos">Protocolos</a>
        <a href="#agenda">Agenda</a>
      </nav>
      <a className="header-cta" href={whatsappWithMessage(quickMessage)}>
        WhatsApp
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-media" aria-hidden="true">
        <figure className="hero-portrait-frame panel-a">
          <img
            src="/assets/renata1.jpeg"
            alt="Dra. Renata Bogéa, fundadora do Núcleo RB"
            width="853"
            height="1280"
            loading="eager"
          />
        </figure>
        <div className="cinema-panel panel-b" />
        <div className="cinema-panel panel-c" />
        <div className="slow-scan" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content reveal">
        <p className="eyebrow">Saúde hormonal, longevidade e alta performance</p>
        <h1>
          Terapia hormonal, menopausa, longevidade, emagrecimento e estética
          avançada para pessoas que buscam saúde, performance e beleza com
          naturalidade.
        </h1>
        <p className="hero-subtitle">
          No Núcleo RB, ciência, tecnologias avançadas e cuidado individualizado se unem em
          protocolos premium para terapia hormonal, longevidade, medicina
          regenerativa, emagrecimento e estética sofisticada.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#agenda">
            Agendar avaliação
          </a>
          <a className="btn secondary" href={whatsappWithMessage(quickMessage)}>
            Falar com a equipe
          </a>
          <a className="btn ghost" href="#protocolos">
            Conhecer protocolos
          </a>
        </div>
        <div className="authority-strip" aria-label="Selos de autoridade">
          <span>Terapia hormonal personalizada</span>
          <span>Medicina regenerativa avançada</span>
          <span>Longevidade e performance</span>
          <span>Estética com naturalidade</span>
        </div>
      </div>
      <div className="hero-doctor-badge reveal" aria-label="Identificação da Dra. Renata Bogéa">
        <strong>Dra. Renata Bogéa</strong>
        <span>CRM - MA 7768</span>
        <small>Médica e CEO do Núcleo RB</small>
      </div>
      <div className="hero-note reveal">
        <strong>Saúde é a base da transformação.</strong>
        <span>Beleza, performance e autoestima começam com equilíbrio e individualização.</span>
      </div>
    </section>
  )
}

function PillarsSection() {
  return (
    <section id="pilares" className="pillars-section">
      <SectionIntro
        eyebrow="Cuidado integrado"
        title="Pilares de atuação do Núcleo RB"
        text="Uma abordagem médica que começa pelo equilíbrio do organismo e integra prevenção, regeneração e estética com naturalidade."
      />
      <div className="pillars-grid">
        {pillars.map((item, index) => (
          <article className={`pillar-card reveal ${item.tone}`} key={item.name}>
            <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function DoctorSection() {
  return (
    <section id="renata" className="doctor-section section-grid">
      <div className="doctor-copy reveal">
        <span className="eyebrow">Dra. Renata Bogéa</span>
        <h2>Ciência, tecnologias avançadas e individualização em cada plano.</h2>
        <p>
          A Dra. Renata Bogéa atua com foco em saúde hormonal, longevidade e
          medicina regenerativa, unindo avaliação criteriosa, recursos avançados e
          acompanhamento individualizado.
        </p>
        <p>
          A estética integra esse cuidado de forma sofisticada e natural, como
          consequência de saúde, equilíbrio e respeito à individualidade.
        </p>
        <div className="badge-row">
          <span>Terapia hormonal</span>
          <span>Longevidade</span>
          <span>Medicina regenerativa</span>
        </div>
      </div>
      <div className="doctor-card reveal">
        <figure className="doctor-photo-frame">
          <img
            src="/assets/renata2.jpeg"
            alt="Dra. Renata Bogéa em imagem institucional do Núcleo RB"
            width="853"
            height="1280"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}

function TechnologiesSection() {
  return (
    <section id="tecnologias" className="tech-section dark-band">
      <SectionIntro
        dark
        eyebrow="Recursos avançados"
        title="Recursos avançados a serviço de planos individualizados."
        text="Recursos hormonais, regenerativos, metabólicos, capilares e estéticos selecionados conforme avaliação clínica."
      />
      <div className="tech-grid">
        {technologies.map((item, index) => (
          <article className={`tech-card reveal ${item.tone}`} key={item.name}>
            <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SpecialtiesSection() {
  return (
    <section id="especialidades" className="specialties-section">
      <SectionIntro
        eyebrow="Especialidades"
        title="Especialidades para saúde, equilíbrio e performance."
        text="Cuidados organizados a partir dos pilares hormonais, de longevidade e regeneração, com estética natural e criteriosa."
      />
      <div className="specialty-grid">
        {specialties.map((item) => (
          <article className="specialty-card reveal" key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <a
              href={whatsappWithMessage(
                `Olá, equipe Núcleo RB. Gostaria de saber mais sobre ${item.name}.`,
              )}
            >
              Conversar sobre este cuidado
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProtocolsSection() {
  return (
    <section id="protocolos" className="protocols-section">
      <SectionIntro
        eyebrow="Protocolos RB Signature"
        title="Protocolos proprietários com visão integrada e acompanhamento."
        text="Estratégias premium definidas de forma individual, com linguagem médica, objetivos realistas e acompanhamento profissional."
      />
      <div className="protocol-grid">
        {protocols.map((item) => (
          <article className="protocol-card reveal" key={item.name}>
            <span>RB Signature</span>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <small>{item.indication}</small>
            <a
              className="text-cta"
              href={whatsappWithMessage(
                `Olá, equipe Núcleo RB. Gostaria de conhecer o protocolo ${item.name}.`,
              )}
            >
              Conhecer protocolo
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function AboutSection() {
  const values = ['Ética', 'Excelência', 'Humanização', 'Inovação', 'Segurança', 'Individualidade']

  return (
    <section id="quem-somos" className="about-section dark-band">
      <SectionIntro
        dark
        eyebrow="Quem somos"
        title="Um centro premium de medicina hormonal, longevidade e regeneração."
        text="O Núcleo RB integra ciência, soluções avançadas e cuidado humano em protocolos voltados à saúde, prevenção, performance e estética sofisticada."
      />
      <div className="about-layout">
        <figure className="about-photo reveal">
          <img
            src="/assets/renata3.jpeg"
            alt="Dra. Renata Bogéa no ambiente institucional do Núcleo RB"
            width="853"
            height="1280"
            loading="lazy"
          />
        </figure>
        <div className="about-grid">
          <article className="reveal">
            <h3>Missão</h3>
            <p>
              Promover saúde, equilíbrio e longevidade por meio de cuidado
              individualizado, medicina hormonal e terapias regenerativas.
            </p>
          </article>
          <article className="reveal">
            <h3>Visão</h3>
            <p>Ser referência em medicina hormonal, longevidade e regeneração premium.</p>
          </article>
          <article className="values-card reveal">
            <h3>Valores</h3>
            <div>
              {values.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section id="equipe" className="team-section">
      <SectionIntro
        eyebrow="Equipe"
        title="Atendimento integrado com experiência reservada."
        text="Uma equipe dedicada ao cuidado individualizado, à segurança e à excelência em cada etapa da jornada."
      />
      <div className="team-grid">
        {team.map((person) => (
          <article className="team-card reveal" key={person.name}>
            <figure className="team-photo">
              {person.image ? (
                <img src={person.image} alt={person.name} loading="lazy" />
              ) : (
                <div className="team-photo-placeholder" aria-label={`Foto pendente de ${person.name}`}>
                  {person.name
                    .replace(/^Dr\w*\.?\s+/, '')
                    .split(' ')
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join('')}
                </div>
              )}
            </figure>
            <h3>{person.name}</h3>
            <span>{person.role}</span>
            <p>{person.bio}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section id="clinica" className="experience-section">
      <SectionIntro
        eyebrow="Experiência da clínica"
        title="Uma jornada pensada para conforto, privacidade e precisão."
        text="Recursos avançados, acolhimento e discrição em uma experiência premium de cuidado."
      />
      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <article className={`gallery-card reveal item-${index}`} key={item.title}>
            <figure className="gallery-photo">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                style={{ objectPosition: item.imagePosition }}
              />
            </figure>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function BookingSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    mode: 'Consulta presencial',
    date: '',
    time: '09:00',
  })
  const [error, setError] = useState('')
  const times = useMemo(
    () =>
      Array.from({ length: 21 }, (_, index) => {
        const total = 9 * 60 + index * 30
        const hour = String(Math.floor(total / 60)).padStart(2, '0')
        const minute = String(total % 60).padStart(2, '0')
        return `${hour}:${minute}`
      }),
    [],
  )

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function submit(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !form.date || !form.time) {
      setError('Preencha nome, telefone, data e horário para solicitar o agendamento.')
      return
    }

    const selected = new Date(`${form.date}T12:00:00`)
    const day = selected.getDay()
    if (day === 0 || day === 6) {
      setError('A agenda online aceita solicitações de segunda a sexta.')
      return
    }

    setError('')
    const message = [
      'Olá, equipe Núcleo RB. Gostaria de solicitar agendamento exclusivo com a Dra. Renata Bogéa.',
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
      `Tipo: ${form.mode}`,
      `Data: ${form.date}`,
      `Horário: ${form.time}`,
      'Entendo que a equipe entrará em contato posteriormente para confirmação.',
    ].join('\n')
    window.open(whatsappWithMessage(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="agenda" className="booking-section dark-band">
      <div className="booking-copy reveal">
        <span className="eyebrow">Agendamento online</span>
        <h2>Agenda online exclusiva para Dra. Renata Bogéa.</h2>
        <p>
          Para outros profissionais, o agendamento é realizado pela equipe de
          atendimento via WhatsApp. Funcionamento: segunda a sexta, 08h às 20h.
        </p>
        <ul>
          <li>Primeiro horário online: 09h</li>
          <li>Último horário online: 19h</li>
          <li>Disponível inclusive no horário de almoço</li>
          <li>Confirmação final feita posteriormente pela equipe</li>
        </ul>
      </div>
      <form className="booking-form reveal" onSubmit={submit}>
        <label>
          Nome
          <input name="name" value={form.name} onChange={updateField} placeholder="Seu nome" />
        </label>
        <label>
          Telefone
          <input
            name="phone"
            value={form.phone}
            onChange={updateField}
            placeholder="(98) 99999-9999"
          />
        </label>
        <div className="segmented" aria-label="Tipo de consulta">
          {['Consulta presencial', 'Telemedicina'].map((mode) => (
            <label key={mode}>
              <input
                type="radio"
                name="mode"
                value={mode}
                checked={form.mode === mode}
                onChange={updateField}
              />
              <span>{mode}</span>
            </label>
          ))}
        </div>
        <div className="form-row">
          <label>
            Data
            <input type="date" name="date" value={form.date} onChange={updateField} />
          </label>
          <label>
            Horário
            <select name="time" value={form.time} onChange={updateField}>
              {times.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>
        </div>
        {error && <p className="form-error">{error}</p>}
        <button className="btn primary full" type="submit">
          Solicitar pelo WhatsApp
        </button>
        <small>
          Preparado para integração futura com e-mail automático, confirmação ao
          paciente, Meta Pixel, Google Analytics e Google Tag Manager sem IDs falsos.
        </small>
      </form>
    </section>
  )
}

function QuickForm() {
  return (
    <section className="quick-form-section">
      <div className="quick-form reveal">
        <span>Agenda limitada para atendimento personalizado.</span>
        <h2>Beleza, performance e autoestima começam com equilíbrio e saúde.</h2>
        <a className="btn primary" href={whatsappWithMessage(quickMessage)}>
          Falar com a equipe
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand" href="#top" aria-label="Núcleo RB">
          <BrandLogo />
          <span>
            Núcleo RB
            <small>Dra. Renata Bogéa</small>
          </span>
        </a>
        <p>
          Terapia hormonal, longevidade e medicina regenerativa com experiência
          premium, recursos avançados e olhar humano.
        </p>
      </div>
      <div>
        <h3>Contato</h3>
        <a href={whatsappWithMessage(quickMessage)}>(98) 99166-3020</a>
        <a href="https://www.instagram.com/renata.bogea">Instagram Dra. Renata</a>
        <a href="https://www.instagram.com/nucleorb">Instagram Núcleo RB</a>
      </div>
      <div>
        <h3>Funcionamento</h3>
        <p>Segunda a sexta, 08h as 20h.</p>
        <p>Atendimento mediante agendamento pela equipe.</p>
      </div>
    </footer>
  )
}

function FloatingActions() {
  return (
    <nav className="floating-actions" aria-label="Ações rápidas">
      <a
        className="floating-action primary-action"
        href={whatsappWithMessage(quickMessage)}
        aria-label="Falar com a equipe do Núcleo RB pelo WhatsApp"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M20 11.5a7.5 7.5 0 0 1-11.1 6.58L4 19.5l1.42-4.87A7.5 7.5 0 1 1 20 11.5Z" />
          <path d="M9.2 8.5c.3 2.25 2.05 4 4.3 4.3" />
        </svg>
        <span>WhatsApp</span>
      </a>
      <a className="floating-action" href="#agenda" aria-label="Ir para a seção de agendamento">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <rect x="4" y="6" width="16" height="14" rx="2" />
          <path d="M8 3v6M16 3v6M4 10h16M8 14h3M13 14h3M8 17h3" />
        </svg>
        <span>Agendar</span>
      </a>
      <a
        className="floating-action"
        href={whatsappWithMessage('Olá, equipe Núcleo RB. Gostaria de saber como chegar à clínica.')}
        aria-label="Solicitar informações de como chegar ao Núcleo RB"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
          <circle cx="12" cy="10" r="2.25" />
        </svg>
        <span>Como chegar</span>
      </a>
    </nav>
  )
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 },
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <PillarsSection />
        <DoctorSection />
        <TechnologiesSection />
        <SpecialtiesSection />
        <ProtocolsSection />
        <AboutSection />
        <TeamSection />
        <ExperienceSection />
        <BookingSection />
        <QuickForm />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default App
