import { useEffect, useMemo, useState } from 'react'
import {
  gallery,
  protocols,
  specialties,
  team,
  technologies,
  whatsappUrl,
} from './data'
import './App.css'

const quickMessage =
  'Ola, equipe Nucleo RB. Gostaria de agendar uma consulta e receber orientacoes.'

function whatsappWithMessage(message) {
  return `${whatsappUrl}?text=${encodeURIComponent(message)}`
}

function PlaceholderVisual({ label, variant = 'portrait' }) {
  return (
    <div className={`placeholder-visual ${variant}`} aria-label={label}>
      <div className="placeholder-grain" />
      <div className="placeholder-lines" />
      <span>RB</span>
      <small>{label}</small>
    </div>
  )
}

function BrandLogo() {
  return (
    <img
      className="brand-logo"
      src="/assets/logo.png"
      alt="Nucleo RB - Dra. Renata Bogea"
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
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Nucleo RB">
        <BrandLogo />
        <span>
          Nucleo RB
          <small>Dra. Renata Bogea</small>
        </span>
      </a>
      <nav aria-label="Navegacao principal">
        <a href="#renata">Dra. Renata</a>
        <a href="#tecnologias">Tecnologias</a>
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
            alt=""
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
        <p className="eyebrow">Medicina estetica, hormonal e regenerativa</p>
        <h1>
          Medicina estetica, hormonal e regenerativa para mulheres e homens que
          desejam longevidade, performance e beleza com naturalidade.
        </h1>
        <p className="hero-subtitle">
          Especialistas em harmonizacao glutea, menopausa, rejuvenescimento e
          terapias integrativas avancadas.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#agenda">
            Agendar consulta
          </a>
          <a className="btn secondary" href={whatsappWithMessage(quickMessage)}>
            Falar com a equipe
          </a>
          <a className="btn ghost" href={whatsappWithMessage(quickMessage)}>
            WhatsApp
          </a>
        </div>
        <div className="authority-strip" aria-label="Selos de autoridade">
          <span>Atendimento personalizado</span>
          <span>Tecnologia avancada</span>
          <span>Experiencia premium</span>
        </div>
      </div>
      <div className="hero-note reveal">
        <strong>Naturalidade e o novo luxo.</strong>
        <span>Agenda limitada para atendimento personalizado.</span>
      </div>
    </section>
  )
}

function DoctorSection() {
  return (
    <section id="renata" className="doctor-section section-grid">
      <div className="doctor-copy reveal">
        <span className="eyebrow">Dra. Renata Bogea</span>
        <h2>Ciencia, tecnologia e individualizacao em cada plano.</h2>
        <p>
          A Dra. Renata Bogea atua com foco em medicina estetica, hormonal e
          regenerativa, unindo ciencia, tecnologia e individualizacao para
          promover saude, autoestima e longevidade.
        </p>
        <p>
          Sua melhor versao com ciencia, sofisticacao e equilibrio. Os dados de
          cursos, congressos, CRM e certificacoes devem ser inseridos somente
          apos validacao dos documentos oficiais.
        </p>
        <div className="badge-row">
          <span>Medicina regenerativa</span>
          <span>Estetica premium</span>
          <span>Longevidade</span>
        </div>
      </div>
      <div className="doctor-card reveal">
        <figure className="doctor-photo-frame">
          <img
            src="/assets/renata2.jpeg"
            alt="Dra. Renata Bogea em imagem institucional do Nucleo RB"
            width="853"
            height="1280"
            loading="lazy"
          />
        </figure>
        <div className="certificate-rail">
          {/* TODO: inserir certificados reais, congressos e especializacoes quando os arquivos oficiais forem adicionados. */}
          {['Certificacao oficial', 'Congresso validado', 'Especializacao'].map(
            (item) => (
              <div className="certificate-card" key={item}>
                <span>{item}</span>
                <small>Pendente de documento real</small>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

function TechnologiesSection() {
  return (
    <section id="tecnologias" className="tech-section dark-band">
      <SectionIntro
        dark
        eyebrow="Tecnologias"
        title="Tecnologia avancada com olhar humano."
        text="Recursos medicos, esteticos e integrativos organizados em planos individualizados."
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
        title="Estetica inteligente para mulheres e homens exigentes."
        text="Tratamentos com criterio medico, naturalidade e planejamento realista."
      />
      <div className="specialty-grid">
        {specialties.map((item) => (
          <article className="specialty-card reveal" key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <a
              href={whatsappWithMessage(
                `Ola, equipe Nucleo RB. Gostaria de saber mais sobre ${item.name}.`,
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
        title="Longevidade, performance e autoestima em um so protocolo."
        text="Protocolos proprietarios, personalizados e acompanhados, sem promessas irreais."
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
                `Ola, equipe Nucleo RB. Gostaria de conhecer o protocolo ${item.name}.`,
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
  const values = ['Etica', 'Excelencia', 'Humanizacao', 'Inovacao', 'Seguranca', 'Individualidade']

  return (
    <section id="quem-somos" className="about-section dark-band">
      <SectionIntro
        dark
        eyebrow="Quem somos"
        title="Um nucleo premium para saude, estetica e medicina integrativa."
        text="O Nucleo RB nasceu da uniao entre ciencia, estetica e medicina integrativa, oferecendo tratamentos personalizados voltados a saude, longevidade e autoestima."
      />
      <div className="about-grid">
        <article className="reveal">
          <h3>Missao</h3>
          <p>
            Transformar saude, autoestima e longevidade atraves da medicina
            integrativa, estetica e regenerativa de alta performance.
          </p>
        </article>
        <article className="reveal">
          <h3>Visao</h3>
          <p>Ser referencia nacional em medicina estetica e hormonal premium.</p>
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
    </section>
  )
}

function TeamSection() {
  return (
    <section id="equipe" className="team-section">
      <SectionIntro
        eyebrow="Equipe"
        title="Atendimento multidisciplinar com experiencia reservada."
        text="Fotos e mini bios abaixo estao preparadas para receber os materiais reais da equipe."
      />
      <div className="team-grid">
        {team.map((person) => (
          <article className="team-card reveal" key={person.name}>
            {/* TODO: substituir placeholder por foto profissional real da equipe. */}
            <PlaceholderVisual label={`Foto de ${person.name}`} variant="avatar" />
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
        eyebrow="Experiencia da clinica"
        title="Uma jornada pensada para conforto, privacidade e precisao."
        text="Naturalidade, tecnologia e acolhimento em uma experiencia de boutique clinic."
      />
      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <article className={`gallery-card reveal item-${index}`} key={item.title}>
            {/* TODO: substituir por imagem real horizontal da clinica, consultorios, spa capilar ou equipamentos. */}
            <PlaceholderVisual label={item.title} variant="landscape" />
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
      setError('Preencha nome, telefone, data e horario para solicitar o agendamento.')
      return
    }

    const selected = new Date(`${form.date}T12:00:00`)
    const day = selected.getDay()
    if (day === 0 || day === 6) {
      setError('A agenda online aceita solicitacoes de segunda a sexta.')
      return
    }

    setError('')
    const message = [
      'Ola, equipe Nucleo RB. Gostaria de solicitar agendamento exclusivo com a Dra. Renata Bogea.',
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
      `Tipo: ${form.mode}`,
      `Data: ${form.date}`,
      `Horario: ${form.time}`,
      'Entendo que a equipe entrara em contato posteriormente para confirmacao.',
    ].join('\n')
    window.open(whatsappWithMessage(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="agenda" className="booking-section dark-band">
      <div className="booking-copy reveal">
        <span className="eyebrow">Agendamento online</span>
        <h2>Agenda online exclusiva para Dra. Renata Bogea.</h2>
        <p>
          Para outros profissionais, o agendamento e realizado pela equipe de
          atendimento via WhatsApp. Funcionamento: segunda a sexta, 08h as 20h.
        </p>
        <ul>
          <li>Primeiro horario online: 09h</li>
          <li>Ultimo horario online: 19h</li>
          <li>Disponivel inclusive no horario de almoco</li>
          <li>Confirmacao final feita posteriormente pela equipe</li>
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
            Horario
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
          Preparado para integracao futura com e-mail automatico, confirmacao ao
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
        <h2>Sua melhor versao com ciencia, sofisticacao e equilibrio.</h2>
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
        <a className="brand" href="#top" aria-label="Nucleo RB">
          <BrandLogo />
          <span>
            Nucleo RB
            <small>Dra. Renata Bogea</small>
          </span>
        </a>
        <p>
          Medicina estetica, hormonal e regenerativa com experiencia premium,
          tecnologia avancada e olhar humano.
        </p>
      </div>
      <div>
        <h3>Contato</h3>
        <a href={whatsappWithMessage(quickMessage)}>(98) 99166-3020</a>
        <a href="https://www.instagram.com/renata.bogea">Instagram Dra. Renata</a>
        <a href="https://www.instagram.com/nucleorb">Instagram Nucleo RB</a>
      </div>
      <div>
        <h3>Funcionamento</h3>
        <p>Segunda a sexta, 08h as 20h.</p>
        <p>Endereco pendente de validacao nos materiais oficiais.</p>
        {/* TODO: inserir endereco real e mapa Google somente apos validacao oficial. */}
      </div>
    </footer>
  )
}

function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Acoes rapidas">
      <a href={whatsappWithMessage(quickMessage)}>WhatsApp</a>
      <a href="#agenda">Agendar</a>
      <a href={whatsappWithMessage('Ola, equipe Nucleo RB. Gostaria de saber como chegar a clinica.')}>
        Como chegar
      </a>
    </div>
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
