import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import exampleImage from 'figma:asset/8612abf24941998004b1982e52ef3ce3e1d7c96e.png';
import demisGroupLogo from 'figma:asset/9ef30cbbb36527171096a315b3d8fa3debe92fe4.png';
import megafonLogo from 'figma:asset/269f6b59f11e8bb3a5566c861daffd93baa7e9ae.png';
import theBellLogo from 'figma:asset/9b3f214898bd9890e0e5854501049e49ad84aa39.png';
import neskuchneyeFinansyLogo from 'figma:asset/1ee2e27e5d21d3c0bfa9314f47977ff5ffe322da.png';
import skolkovoLogo from 'figma:asset/024f36a5c23e2b4ce7df59ca3d3251989ba210cf.png';
import eyLogo from 'figma:asset/e76d0c1ea3033767a2d59a6b843dbb5914eb89ff.png';
import sfEducationLogo from 'figma:asset/0b7359de5dbfcb418ff31a8646408125910ca23b.png';
import sberUniversityLogo from 'figma:asset/bc12fdebb14eab04e45c9cd6ab5beebdff5f8cf1.png';
import masterclassPreviewImage from 'figma:asset/c783b88172a6ef5b9e24bfe795eec3320576a965.png';
import club500Logo from 'figma:asset/b64ac9b61926f3af31f8a20a2b8ed589c6757f9a.png';
import atlantyLogo from 'figma:asset/0c6d975376dd2fcf6ac4126fa20ec4c68863b1de.png';
import mriyaLogo from 'figma:asset/89224f476f5813596b79c3c105a4993a29d56895.png';
import skillzLogo from 'figma:asset/8649dd195d31a49276e49b6172bded115d4ffd24.png';
import globalUniversityLogo from 'figma:asset/73c1cf792d714cbac139bf4f9584b126df71ca0f.png';
import tochnoLogo from 'figma:asset/de6a3151e9036305e43c49f5860347cdfd00462e.png';
import rybakovPlayschoolLogo from 'figma:asset/a4a1d670e6ab4fa2c84630f483f433169a181972.png';
import cvetuikiLogo from 'figma:asset/40f174320cb80cf4bde3c6f050bb79fab9a44f26.png';
import barkinwoodLogo from 'figma:asset/63e60a11170b79d10e84bd8d5d108cb152f24247.png';

const telegramLink = "https://t.me/eugendrky?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3%D1%83!";
const strategicLink = "https://t.me/eugendrky?text=%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B5%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80";

/* Единая ширина контента и отступы для всех секций */
const WRAP = "max-w-7xl mx-auto";
const SECTION_PAD = "py-20 sm:py-28 px-6 sm:px-10 lg:px-16";

function BtnLime({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-300 text-black font-semibold rounded-full transition-all duration-200 hover:scale-105 shadow-lg ${className}`}
    >
      {children}
    </a>
  );
}

/* Надзаголовок — светлый фон */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-0.5 bg-lime-400 flex-shrink-0"></div>
      <span className="text-sm sm:text-base font-semibold uppercase tracking-[0.14em] text-gray-500">{children}</span>
    </div>
  );
}

/* Надзаголовок — тёмный фон */
function EyebrowDark({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-0.5 bg-lime-400 flex-shrink-0"></div>
      <span className="text-sm sm:text-base font-semibold uppercase tracking-[0.14em] text-lime-400">{children}</span>
    </div>
  );
}

const journeySteps = [
  { label: "Первый контакт", sub: "реклама, рекомендация, контент" },
  { label: "Прогрев", sub: "вебинары, статьи, email" },
  { label: "Заявка", sub: "лид, запрос, встреча" },
  { label: "Продажа", sub: "закрытие, договор, оплата" },
  { label: "Удержание", sub: "LTV, повторные продажи" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-end justify-start px-6 sm:px-10 lg:px-16 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-50 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-100 rounded-full blur-[100px] opacity-80"></div>
        </div>

        <div className={`relative z-10 ${WRAP} w-full pt-40 pb-24`}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-0.5 bg-lime-400 flex-shrink-0"></div>
            <span className="text-sm sm:text-base font-semibold uppercase tracking-[0.14em] text-gray-500">
              Внешний директор по маркетингу для бизнеса, которому нужен рост, а не эксперименты
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-black mb-0">
            <span className="block">Помогаю продавать</span>
            <span className="block">сложные продукты</span>
            <span className="block text-lime-400">через системный</span>
            <span className="block">маркетинг</span>
          </h1>

          <div className="my-10 sm:my-12 border-t border-gray-200 w-full"></div>

          <div className="flex flex-col sm:flex-row sm:items-end gap-10 sm:gap-20">
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-lg">
              Работал с бизнес-клубами, программами MBA и магистратуры, авторскими программами стоимостью до 5 млн ₽, маркетинговым консалтингом и частным образованием.
            </p>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <BtnLime href={telegramLink} className="px-8 py-4 text-base sm:text-lg">
                Записаться на консультацию
              </BtnLime>
              <p className="text-sm text-gray-400 text-center">Встреча-знакомство - 30 минут</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM / SOLUTION ─── */}
      <section className={`${SECTION_PAD} bg-white`}>
        <div className={WRAP}>
          <Eyebrow>Зачем это нужно</Eyebrow>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-14 sm:mb-20">
            Ваш маркетинг не управляется -<br className="hidden sm:block" /> и вы за это платите
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-black p-8 sm:p-10 lg:p-12 rounded-3xl">
              <p className="text-base font-semibold uppercase tracking-[0.12em] text-gray-400 mb-8">Что происходит сейчас</p>
              <div className="space-y-5">
                {[
                  "Подрядчики что-то делают, но никто не отвечает за результат",
                  "Непонятно, какие каналы реально приносят прибыль",
                  "Нет системы, которая стабильно даёт заявки",
                  "Вы постоянно вникаете в маркетинг вместо управления бизнесом",
                  "Заявки приходят случайно и не прогнозируются",
                  "Нет человека, который отвечает за маркетинг как за функцию",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-gray-500 text-sm font-mono mt-0.5 flex-shrink-0 w-5">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-gray-300 text-base sm:text-lg leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-lime-400 p-8 sm:p-10 lg:p-12 rounded-3xl">
              <p className="text-base font-semibold uppercase tracking-[0.12em] text-black/50 mb-8">Что вы получите</p>
              <div className="space-y-5">
                {[
                  "Один ответственный за результат маркетинга",
                  "Понимание, откуда приходят деньги и какие каналы работают",
                  "Систему привлечения заявок, а не разовые всплески",
                  "Освобождение от операционки - фокус на бизнесе",
                  "Прогнозируемый поток заявок и управляемую воронку",
                  "Маркетинг как понятную и контролируемую функцию",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-black flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-black text-base sm:text-lg leading-snug font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <BtnLime href={telegramLink} className="px-8 py-4 text-base sm:text-lg">
              Хочу управляемый маркетинг
            </BtnLime>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className={`${SECTION_PAD} bg-gray-50`}>
        <div className={WRAP}>
          <Eyebrow>Обо мне</Eyebrow>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-14 sm:mb-20">
            С вами работает человек, а не обезличенное агентство
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <ImageWithFallback
                src={exampleImage}
                alt="Евгений Дроздовский"
                className="w-full max-w-sm sm:max-w-full mx-auto aspect-[4/5] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <div className="inline-block bg-lime-400 text-black text-sm font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-6">
                Евгений Дроздовский
              </div>

              <div className="space-y-5 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>Более 10 лет практического опыта в управлении маркетингом.</p>
                <p>С 2024 г. - Директор по маркетингу Глобального университета Рыбакова.</p>
                <p>С 2019 по 2023 г. - Руководил маркетингом премиальных бизнес-клубов «Атланты» и Club500.</p>
                <p>Опыт в EdTech, медицине, B2B, бизнес-клубах, рекламных агентствах.</p>
                <p>Управлял кросс-функциональными командами от 15 человек.</p>
                <p>Выстраивал маркетинговые бизнес-процессы с нуля до масштабирования системы.</p>
                <p>Выпускник экономического университета ASEM, специальность - Маркетинг. Членство в EUA.</p>

                <div className="bg-black text-white p-6 rounded-2xl border-l-4 border-lime-400 mt-6">
                  <p className="text-base sm:text-lg font-medium">
                    Мой подход: опыт + AI = результат быстрее и дешевле, чем у классических агентств.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <BtnLime href={telegramLink} className="px-8 py-4 text-base sm:text-lg w-full sm:w-auto">
                  Записаться на консультацию
                </BtnLime>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section className={`${SECTION_PAD} bg-white`}>
        <div className={WRAP}>
          <Eyebrow>Специализация</Eyebrow>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-14 sm:mb-20">
            С какими проектами работаю
          </h2>

          <div className="divide-y divide-gray-100">
            {[
              { n: "01", title: "Бизнес-клубы", note: "членство, мероприятия, комьюнити" },
              { n: "02", title: "MBA, EMBA, магистратура", note: "образовательные программы с высоким чеком" },
              { n: "03", title: "Авторские образовательные программы", note: "до 5 млн ₽ за программу" },
              { n: "04", title: "Маркетинговый консалтинг", note: "B2B, проектные продажи" },
              { n: "05", title: "Частные школы и детские сады", note: "длинный цикл, эмоциональная продажа" },
              { n: "06", title: "Программы высокого среднего чека", note: "сложный продукт, требующий доверия" },
            ].map((item) => (
              <div
                key={item.n}
                className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-6 sm:py-7 hover:pl-2 transition-all duration-200"
              >
                <span className="text-sm text-gray-300 font-mono flex-shrink-0 w-8">{item.n}</span>
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-black group-hover:text-lime-500 transition-colors duration-200 flex-1">
                  {item.title}
                </span>
                <span className="text-base text-gray-400 sm:text-right">{item.note}</span>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-gray-100 max-w-3xl">
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
              Несмотря на разные рынки, все эти проекты объединяет одно - сложный продукт, длинный цикл сделки и необходимость выстраивать доверие клиента до покупки.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT UNITES MY EXPERIENCE + CUSTOMER JOURNEY ─── */}
      <section className={`${SECTION_PAD} bg-black text-white`}>
        <div className={WRAP}>
          <EyebrowDark>Что объединяет мой опыт</EyebrowDark>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Не просто привожу лидов -<br className="hidden sm:block" /> строю маркетинговую систему
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-xl mb-14 sm:mb-20">
            Моя работа редко ограничивается рекламой. Обычно я отвечаю за весь путь клиента:
          </p>

          {/* Customer Journey */}
          <div className="mb-16 sm:mb-20 overflow-x-auto pb-4">
            <div className="flex items-start gap-0 min-w-max">
              {journeySteps.map((step, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center" style={{ width: 148 }}>
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-base flex-shrink-0 mb-4 ${
                      i === 0
                        ? "bg-white text-black"
                        : i === journeySteps.length - 1
                        ? "bg-lime-400 text-black"
                        : "bg-gray-800 text-white border border-gray-600"
                    }`}>
                      {i === 0 ? "A" : i === journeySteps.length - 1 ? "B" : String(i)}
                    </div>
                    <p className="text-base font-semibold text-white text-center leading-tight mb-1">{step.label}</p>
                    <p className="text-sm text-gray-400 text-center leading-snug px-1">{step.sub}</p>
                  </div>
                  {i < journeySteps.length - 1 && (
                    <div className="flex items-center flex-shrink-0 relative" style={{ width: 52, marginTop: -50 }}>
                      <div className="h-px bg-gradient-to-r from-gray-600 to-gray-500 w-full"></div>
                      <svg className="w-4 h-4 text-gray-500 absolute right-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-8">
              Я отвечаю за каждую точку этого пути - от первого касания до повторной продажи
            </p>
          </div>

          {/* Zones */}
          <div className="border border-gray-800 rounded-3xl p-8 sm:p-10 lg:p-12">
            <p className="text-base font-semibold uppercase tracking-[0.12em] text-gray-400 mb-8">Зоны ответственности</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "Позиционирование",
                "Стратегия",
                "Сайты",
                "Аналитика",
                "Контент",
                "Мероприятия",
                "CRM",
                "Маркетинг и продажи",
                "Команда",
                "Подрядчики",
              ].map((item, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 hover:border-lime-400/40 hover:bg-gray-800 transition-all duration-200">
                  <span className="text-base text-gray-300 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className={`${SECTION_PAD} bg-white`}>
        <div className={WRAP}>
          <Eyebrow>Что я делаю</Eyebrow>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-14 sm:mb-20">Услуги</h2>

          <div className="max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-0 mb-10">
              {[
                "Разработка маркетинговой стратегии",
                "Воронка прогрева по пути клиента",
                "Коммуникационная стратегия",
                "Контент-маркетинг стратегия",
                "Привлечение новых заявок",
                "Вывод нового продукта на рынок",
                "Работа с воронкой продаж",
                "Менторство",
                "Личное наставничество",
                "Консультации по маркетингу и бизнесу",
                "Разработка сайта",
                "Разработка SEO-блога",
                "Брендбук, дизайн, презентации, визуал",
                "Аналитика рекламных источников",
              ].map((service, i) => (
                <div key={i} className="flex items-center gap-3 py-4 border-b border-gray-100">
                  <div className="w-1.5 h-1.5 bg-lime-400 rounded-full flex-shrink-0"></div>
                  <span className="text-base sm:text-lg text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <BtnLime href={telegramLink} className="px-8 py-4 text-base sm:text-lg">
              Обсудить сотрудничество
            </BtnLime>
          </div>
        </div>
      </section>

      {/* ─── COMPANIES ─── */}
      <section className={`${SECTION_PAD} bg-gray-50`}>
        <div className={WRAP}>
          <Eyebrow>Опыт</Eyebrow>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-14 sm:mb-20">Компании, где я работал</h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
            {[
              { logo: globalUniversityLogo, alt: "Global University by Rybakov" },
              { logo: club500Logo, alt: "Club 500" },
              { logo: atlantyLogo, alt: "Атланты" },
              { logo: mriyaLogo, alt: "MRIYA Resort & Spa" },
              { logo: skillzLogo, alt: "SKILLZ" },
              { logo: tochnoLogo, alt: "Точно" },
              { logo: rybakovPlayschoolLogo, alt: "Rybakov Playschool" },
              { logo: cvetuikiLogo, alt: "Цветники.ру" },
              { logo: barkinwoodLogo, alt: "Barkinwood" },
            ].map((company, i) => (
              <div key={i} className="group flex items-center justify-center">
                <ImageWithFallback
                  src={company.logo}
                  alt={company.alt}
                  className="max-w-full max-h-48 sm:max-h-64 lg:max-h-80 w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASES ─── */}
      <section className={`${SECTION_PAD} bg-white`}>
        <div className={WRAP}>
          <Eyebrow>Портфолио</Eyebrow>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-14 sm:mb-20">Кейсы</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Глобальный университет Рыбакова: запустить университет и его программы с нуля",
                link: "https://buildin.ai/share/b59d8770-ae59-453e-89bf-4acbd566d4e2?code=ETH9QT",
              },
              {
                title: "Антикризисный перезапуск маркетинга бизнес-клуба «Атланты»",
                link: "https://buildin.ai/share/d1fa95f1-2576-4ffa-983d-f13c7a616ba5?code=ETH9QT",
              },
              {
                title: "Бизнес-выезд в Карелию с Игорем Стояновым и клубом «Эквиум»",
                link: "https://buildin.ai/share/998a3afb-c8bf-48a6-a574-c4730e8798ce",
              },
              {
                title: "Построение комплексной маркетинговой системы для b2b-компании",
                link: "https://buildin.ai/share/6a7ff3b0-3a67-4964-8774-d4305fa43acf?code=ETH9QT",
              },
              {
                title: "MRIYA LIFE - Международный Форум Активного Долголетия",
                link: "https://buildin.ai/share/dfc29daa-c73e-4f07-a1f4-29f9be275445?code=ETH9QT",
              },
            ].map((item, i) => (
              <div key={i} className="group border border-gray-200 rounded-3xl p-8 sm:p-10 hover:border-lime-400/50 hover:shadow-xl transition-all duration-300">
                <span className="text-sm text-gray-300 font-mono">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mt-3 mb-6">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold text-black border-b-2 border-lime-400 pb-0.5 hover:text-lime-600 transition-colors duration-200"
                >
                  Изучить кейс
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <section className={`${SECTION_PAD} bg-black text-white`}>
        <div className={WRAP}>
          <EyebrowDark>Партнерство</EyebrowDark>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-14 sm:mb-20">
            Совместные вебинары и мероприятия
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { logo: demisGroupLogo, alt: "Demis Group" },
              { logo: megafonLogo, alt: "МегаФон" },
              { logo: theBellLogo, alt: "The Bell" },
              { logo: neskuchneyeFinansyLogo, alt: "Нескучные финансы" },
              { logo: skolkovoLogo, alt: "SKOLKOVO" },
              { logo: eyLogo, alt: "EY" },
              { logo: sfEducationLogo, alt: "SF EDUCATION" },
              { logo: sberUniversityLogo, alt: "СБЕР УНИВЕРСИТЕТ" },
            ].map((partner, i) => (
              <div key={i} className="group">
                <div className="bg-white p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center min-h-[100px] sm:min-h-[120px]">
                  <ImageWithFallback
                    src={partner.logo}
                    alt={partner.alt}
                    className="max-w-full max-h-10 sm:max-h-14 w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SYSTEM BUILDING ─── */}
      <section className={`${SECTION_PAD} bg-white`}>
        <div className={WRAP}>
          <Eyebrow>Формат работы</Eyebrow>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Собираю маркетинг в систему <span className="text-lime-400">за 3 месяца</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 mb-14 sm:mb-20">
            Дальше вы можете вести его сами внутри команды
          </p>

          <div className="bg-black rounded-3xl p-8 sm:p-10 lg:p-12">
            <p className="text-lg sm:text-xl text-gray-300 mb-10">
              Мы с командой заходим, наводим порядок и выстраиваем всё, что должно работать в маркетинге:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {[
                "Стратегия и экономика",
                "Воронка и аналитика",
                "Команда и зоны ответственности",
                "Подрядчики и контроль",
                "Инструменты и автоматизация",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-lime-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-sm">{i + 1}</span>
                  </div>
                  <span className="text-white text-base sm:text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-lime-400 p-6 sm:p-8 rounded-2xl">
              <p className="text-black text-base sm:text-lg font-medium leading-relaxed">
                В итоге вы получаете не «маркетинг на аутсорсе», а готовую систему, которую можно передать команде и масштабировать дальше.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <BtnLime href={telegramLink} className="px-10 py-4 text-lg font-bold">
              Хочу систему, а не хаос
            </BtnLime>
          </div>
        </div>
      </section>

      {/* ─── RESULTS ─── */}
      <section className={`${SECTION_PAD} bg-gray-50`}>
        <div className={WRAP}>
          <Eyebrow>Кейсы</Eyebrow>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-14 sm:mb-20">Результаты для бизнеса</h2>

          <div className="grid gap-6 sm:gap-8">
            {[
              {
                title: "От хаоса к прозрачности",
                problem: "Не было аналитики - бюджет распределялся хаотично. Заявки шли из разных источников, но данные не сходились. Руководство принимало решения «на глаз».",
                actions: [
                  "Внедрил сквозную аналитику",
                  "Настроил корректный сбор данных по UTM-меткам",
                  "Синхронизировал CRM с рекламными кабинетами и коллтрекингом",
                  "Свёл всё в единый BI-дашборд - от расходов до LTV клиента",
                ],
                result: "Управленцы видят CAC, ROI и точки утечки бюджета в реальном времени. Маркетинг перестал быть «чёрным ящиком».",
              },
              {
                title: "От мусорного трафика к покупателям",
                problem: "Лиды были, но клиенты не покупали. Конверсия в продажи была минимальной - бюджет фактически приводил нецелевой трафик.",
                actions: [
                  "Провёл когортный анализ лидов",
                  "Прослушал звонки и встречи менеджеров",
                  "Составил поведенческий профиль идеального клиента",
                  "Перестроил медиамикс: убрал неэффективные каналы, усилил рабочие",
                ],
                result: "CPL сохранился, но конверсия в продажи выросла кратно. Заявки стали реальными клиентами.",
              },
              {
                title: "От долгих сделок к предсказуемой системе",
                problem: "Стоимость привлечения клиента была слишком высокой, а цикл сделки растягивался на недели.",
                actions: [
                  "Построил CJM (customer journey map)",
                  "Нашёл узкие места и точки отвала клиентов",
                  "Выстроил систему касаний: email-прогрев, вебинары, контент, ретаргетинг",
                  "Оптимизировал CRM-воронку, отключил неэффективные каналы",
                ],
                result: "Цикл сделки сократился, CAC снизился, ROMI вырос. Маркетинг и продажи работают как единый механизм.",
              },
            ].map((cs, i) => (
              <div key={i} className="bg-white border border-gray-200 hover:border-lime-400/40 rounded-3xl p-8 lg:p-12 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-lime-400 rounded-xl flex items-center justify-center text-black font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{cs.title}</h3>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-red-400 mb-3">Проблема</p>
                    <p className="text-base text-gray-600 leading-relaxed">{cs.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gray-400 mb-3">Что я сделал</p>
                    <ul className="space-y-2">
                      {cs.actions.map((a, ai) => (
                        <li key={ai} className="flex items-start gap-2 text-base text-gray-600">
                          <div className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-lime-50 rounded-2xl p-5 border-l-4 border-lime-400">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-lime-700 mb-3">Результат</p>
                    <p className="text-base text-lime-800 leading-relaxed">{cs.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <BtnLime href={telegramLink} className="px-8 py-4 text-base sm:text-lg">
              Хочу такие изменения у себя
            </BtnLime>
          </div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className={`${SECTION_PAD} bg-white`}>
        <div className={WRAP}>
          <Eyebrow>Контент</Eyebrow>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-14 sm:mb-20">Эфиры и мастер-классы</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Использование искусственного интеллекта для ускорения бизнес-процессов",
                type: "Эфир",
                link: "https://vkvideo.ru/video-226857484_456239054",
                preview: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTc5MjA2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: "Как собрать сильную маркетинговую команду: роли, найм и зоны ответственности",
                type: "Мастер-класс",
                link: "https://vkvideo.ru/video-226857484_456239044",
                preview: masterclassPreviewImage,
              },
              {
                title: "Личный бренд в 2025 году - это не аватарка и не логотип",
                type: "Эфир",
                link: "https://t.me/shirmasters/1361",
                preview: "https://images.unsplash.com/photo-1723106775073-adf0cda2acbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGJyYW5kaW5nJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU3OTIzMTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: "Marketing 360: контент-завод и воронки. Особенности маркетинга бизнес-клуба «Атланты»",
                type: "Статья",
                link: "https://vc.ru/marketing/671375-marketing-360-kontent-zavod-i-voronki-osobennosti-marketinga-biznes-kluba-atlanty?comments",
                preview: "https://images.unsplash.com/photo-1709715357549-f2d587846ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzdHJhdGVneSUyMGJ1c2luZXNzfGVufDF8fHx8MTc1ODE4NTIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: "Маркетинг сообществ: инструменты и особенности продвижения",
                type: "Статья",
                link: "https://atlanty.ru/media/marketing-soobshchestv-instrumenty-i-osobennosti-prodvizheniya/",
                preview: "https://images.unsplash.com/photo-1696041757950-62e2c030283b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtYXJrZXRpbmclMjBkaWdpdGFsfGVufDF8fHx8MTc1ODE4NTI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
            ].map((content, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-3xl border border-gray-200 hover:border-lime-400/50 transition-all duration-300 hover:shadow-xl overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={content.preview}
                      alt={content.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {content.type !== "Статья" && (
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center group-hover:bg-black/35 transition-colors duration-300">
                        <div className="w-14 h-14 bg-lime-400 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {content.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 leading-snug flex-1">
                      {content.title}
                    </h3>
                    <a
                      href={content.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-black px-5 py-2.5 rounded-full font-semibold transition-all duration-200 hover:scale-105 text-sm w-full justify-center"
                    >
                      <span>{content.type === "Статья" ? "Читать" : "Смотреть"}</span>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <BtnLime href={telegramLink} className="px-8 py-4 text-base sm:text-lg">
              Обсудить сотрудничество
            </BtnLime>
          </div>
        </div>
      </section>

      {/* ─── STRATEGIC SESSION ─── */}
      <section className={`${SECTION_PAD} bg-black text-white`}>
        <div className={WRAP}>
          <EyebrowDark>Первый шаг</EyebrowDark>
          <p className="text-xl sm:text-2xl text-gray-400 mb-4">Не обязательно сразу передавать маркетинг целиком.</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-14 sm:mb-20">
            Можно начать с одной стратегической встречи
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-14">
            <div>
              <p className="text-base sm:text-lg text-gray-400 mb-6">За 1,5 часа мы:</p>
              <div className="space-y-4">
                {[
                  "Разберём текущий маркетинг",
                  "Найдём точки роста",
                  "Посмотрим, где теряются потенциальные клиенты",
                  "Определим, какие действия дадут максимальный эффект",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white text-base sm:text-lg leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-gray-800 rounded-2xl p-8">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                После встречи вы получите понятный план дальнейших шагов - независимо от того, продолжим ли сотрудничество.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div>
              <p className="text-base text-gray-500 uppercase tracking-[0.12em] font-medium mb-1">Стоимость</p>
              <p className="text-lime-400 text-4xl font-bold">15 000 ₽</p>
            </div>
            <BtnLime href={strategicLink} className="px-8 py-4 text-base sm:text-lg font-bold w-full sm:w-auto">
              Записаться на стратегический разбор
            </BtnLime>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className={`py-14 px-6 sm:px-10 lg:px-16 bg-black border-t border-gray-900 text-white`}>
        <div className={`${WRAP} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6`}>
          <div>
            <p className="font-bold text-xl">Евгений Дроздовский</p>
            <p className="text-gray-400 text-base mt-1">Маркетинг + AI для вашего лидерства на рынке</p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-3">
            <BtnLime href={telegramLink} className="px-6 py-3 text-base">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Написать в Telegram
            </BtnLime>
            <p className="text-gray-500 text-sm">&copy; 2024 Евгений Дроздовский</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
