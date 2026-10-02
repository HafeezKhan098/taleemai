import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    ExternalLink,
    ArrowRight,
    GraduationCap,
    MapPin,
    ShieldCheck,
    FileText,
    Bot,
    Mail,
} from 'lucide-react';
import {
    scholarships,
    studyAfterMatric,
    colleges,
    careers,
    skills,
    entranceTests,
    bbiseResults,
    boardResources,
    freeLearningResources,
    universities,
    governmentResources,
} from '@/lib/data';
import UrduMentor from '@/components/UrduMentor';

const names: Record<string, string> = {
    scholarships: 'اسکالرشپس',
    'study-after-matric': 'میٹرک کے بعد',
    colleges: 'کالجز',
    careers: 'کیریئرز',
    universities: 'یونیورسٹیز',
    tests: 'ٹیسٹس اور بورڈز',
    abroad: 'بیرونِ ملک تعلیم',
    skills: 'اسکلز',
    bbise: 'BBISE',
    'get-online': 'ادارے کو آن لائن لائیں',
    contact: 'رابطہ',
    privacy: 'پرائیویسی',
    mentor: 'AI Mentor',
};

const source = (
    href: string,
    label = 'آفیشل سورس'
) => (
    <a
        className="btn btn-secondary"
        href={href}
        target="_blank"
        rel="noreferrer"
    >
        {label} <ExternalLink size={13} />
    </a>
);

function Hero({
    kicker,
    title,
    desc,
}: {
    kicker: string;
    title: string;
    desc: string;
}) {
    return (
        <section className="page-hero rich-hero">
            <div className="container">
                <span className="eyebrow">{kicker}</span>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </section>
    );
}

function Shell({ children }: { children: React.ReactNode }) {
    return <div className="rtl urdu urdu-page">{children}</div>;
}

function SimpleCards({
    items,
}: {
    items: {
        title: string;
        desc: string;
        href: string;
        tag?: string;
    }[];
}) {
    return (
        <div className="grid-3">
            {items.map((x, i) => (
                <article className="card" key={i}>
                    {x.tag && <span className="tag">{x.tag}</span>}
                    <h3>{x.title}</h3>
                    <p>{x.desc}</p>
                    {source(x.href)}
                </article>
            ))}
        </div>
    );
}

export default function UrduSubPage({
    params,
}: {
    params: { slug?: string[] };
}) {
    const slug = params.slug?.[0];

    if (!slug || !names[slug]) notFound();

    if (slug === 'scholarships')
        return (
            <Shell>
                <Hero
                    kicker="🎓 تصدیق شدہ اسکالرشپ ہب"
                    title="اپنے لیے مناسب funding تلاش کریں۔"
                    desc="بلوچستان، پاکستان اور بیرونِ ملک مواقع کو education level کے مطابق دیکھیں۔ درخواست دینے سے پہلے official provider ضرور چیک کریں۔"
                />

                <section className="section">
                    <div className="container">
                        <div className="notice success">
                            <ShieldCheck size={15} /> TaleemAI اندازے کو scholarship fact
                            نہیں سمجھتا۔
                        </div>

                        <div className="scholarship-grid" style={{ marginTop: 18 }}>
                            {scholarships.map((s) => (
                                <article
                                    className="card scholarship-card"
                                    key={s.id}
                                >
                                    <div className="card-top">
                                        <span className="tag">{s.category}</span>
                                        <span className="verified-pill">
                                            ✓ Verified {s.verified}
                                        </span>
                                    </div>

                                    <h3>{s.name}</h3>

                                    <p>
                                        <strong>{s.provider}</strong> · {s.region}
                                    </p>

                                    <p>{s.summary}</p>

                                    <div className="meta">
                                        {s.level.map((x) => (
                                            <span key={x}>{x}</span>
                                        ))}
                                    </div>

                                    <div className="mini-block">
                                        <strong>موجودہ حیثیت</strong>
                                        <p>{s.status}</p>
                                    </div>

                                    <div className="mini-block">
                                        <strong>اہلیت</strong>
                                        <ul>
                                            {s.eligibility.slice(0, 4).map((x) => (
                                                <li key={x}>{x}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="card-actions">
                                        {source(s.source)}

                                        <a
                                            className="btn btn-primary"
                                            href={s.apply}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Apply / Portal <ExternalLink size={13} />
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </Shell>
        );

    if (slug === 'colleges')
        return (
            <Shell>
                <Hero
                    kicker="🏫 بلوچستان کالج ایکسپلورر"
                    title="اپنے اگلے قدم کے لیے مناسب کالج تلاش کریں۔"
                    desc="کوئٹہ کے نمایاں colleges، BRCs، cadet colleges، O/A Level routes، federal colleges اور منتخب public institutions دیکھیں۔"
                />

                <section className="section">
                    <div className="container">
                        <div className="college-guide-banner">
                            <div>
                                <span className="section-kicker">TaleemAI کا طریقہ</span>
                                <h2>صرف نام دیکھ کر کالج منتخب نہ کریں۔</h2>
                                <p>
                                    Location، residential option، gender، admission route اور
                                    official source بھی دیکھیں۔
                                </p>
                            </div>

                            <a
                                className="btn btn-primary"
                                href="https://portal.chte.gob.pk/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CHTE admissions <ExternalLink size={13} />
                            </a>
                        </div>

                        <div className="college-grid">
                            {colleges.map((c) => (
                                <article className="college-card" key={c.id}>
                                    {c.image ? (
                                        <div className="photo-wrap">
                                            <img
                                                src={c.image}
                                                alt={`${c.name} campus`}
                                                loading="lazy"
                                            />
                                        </div>
                                    ) : (
                                        <div className="college-photo-placeholder">
                                            <GraduationCap size={36} />
                                            <span>Campus photo ابھی verify نہیں</span>
                                        </div>
                                    )}

                                    <div className="college-body">
                                        <span className="tag">{c.type}</span>

                                        <h2>{c.name}</h2>

                                        <p className="muted">
                                            <MapPin size={14} /> {c.district}, Balochistan
                                        </p>

                                        <div className="meta">
                                            {c.programs.slice(0, 6).map((p) => (
                                                <span key={p}>{p}</span>
                                            ))}
                                        </div>

                                        <p>{c.note}</p>

                                        {source(c.source)}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </Shell>
        );

    if (slug === 'careers')
        return (
            <Shell>
                <Hero
                    kicker="🧭 Career Explorer · 30+ pathways"
                    title="فیلڈ منتخب کریں، پھر degree، test اور career path سمجھیں۔"
                    desc="MBBS، BDS، CS، Software Engineering، AI، Engineering، Law، Business، Education اور health technologies کے راستے دیکھیں۔"
                />

                <section className="section">
                    <div className="container">
                        <div className="career-grid">
                            {careers.map((c) => (
                                <article
                                    className="card career-card"
                                    key={c.name}
                                >
                                    <div className="career-icon">{c.icon}</div>

                                    <span className="tag">{c.field}</span>

                                    <h2>{c.name}</h2>

                                    <p>{c.fit}</p>

                                    <p>
                                        <b>Degree:</b> {c.degree}
                                    </p>

                                    <p>
                                        <b>Intermediate کے بعد:</b> {c.after}
                                    </p>

                                    <p>
                                        <b>Possible paths:</b> {c.paths}
                                    </p>

                                    <div className="mini-block">
                                        <b>اگلا قدم</b>
                                        <p>{c.next}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section alt">
                    <div className="container">
                        <div className="banner">
                            <div>
                                <h2>
                                    اپنے marks، interests اور budget کے مطابق guidance لیں۔
                                </h2>
                            </div>

                            <Link
                                className="btn btn-primary"
                                href="/ur/mentor"
                            >
                                Mentor سے بات کریں <ArrowRight size={15} />
                            </Link>
                        </div>
                    </div>
                </section>
            </Shell>
        );

    if (slug === 'universities')
        return (
            <Shell>
                <Hero
                    kicker="🎓 University Explorer · بلوچستان → پاکستان"
                    title="پہلے university دیکھیں، پھر exact degree چیک کریں۔"
                    desc="یہ discovery guide ہے، ranking نہیں۔ Program، accreditation، fees، hostel اور admissions کو official source سے verify کریں۔"
                />

                <section className="section">
                    <div className="container">
                        <div className="grid-3">
                            {universities.map((u) => (
                                <article
                                    className="card university-card"
                                    key={u.name}
                                >
                                    <div className="university-photo-wrap">
                                        {u.image ? (
                                            <img
                                                className="university-photo"
                                                src={u.image}
                                                alt={`${u.name} campus`}
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="university-photo-placeholder">
                                                <GraduationCap size={38} />
                                                <span>Verified campus photo pending</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="university-body">
                                        <span className="tag">{u.type}</span>

                                        <h2>{u.name}</h2>

                                        <p>
                                            <b>
                                                <MapPin size={13} /> {u.city}
                                            </b>
                                        </p>

                                        <p>{u.focus}</p>

                                        {source(u.source, 'Official website')}

                                        <p className="image-credit">{u.credit}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </Shell>
        );

    if (slug === 'tests')
        return (
            <Shell>
                <Hero
                    kicker="🧪 Entrance Tests & Admissions"
                    title="Admission سے پہلے required test سمجھیں۔"
                    desc="Directorate tests، HEC USAT/LAT/HAT، MDCAT، NUMS MDCAT، KMU-CAT، ECAT، NUST NET، NTS NAT اور university-specific tests۔"
                />

                <section className="section">
                    <div className="container">
                        <div className="test-grid">
                            {entranceTests.map((t) => (
                                <article
                                    className="card test-card"
                                    key={t.name}
                                >
                                    <span className="tag">{t.stage}</span>

                                    <h2>{t.name}</h2>

                                    <p>
                                        <b>Field:</b> {t.field}
                                    </p>

                                    <p>{t.desc}</p>

                                    <div className="test-source">
                                        <span>{t.source}</span>

                                        <a
                                            href={t.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Portal کھولیں <ExternalLink size={13} />
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section alt">
                    <div className="container">
                        <h2>MDCAT results & merit lists</h2>

                        <div className="result-grid">
                            <a
                                className="result-card"
                                href="https://bmc.edu.pk/?p=5435"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <StethoscopeIcon />
                                <h3>
                                    Balochistan MDCAT 2026 successful candidate lists
                                </h3>
                            </a>

                            <a
                                className="result-card"
                                href="https://www.uhs.edu.pk/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FileText />
                                <h3>Punjab MDCAT 2026 result</h3>
                            </a>

                            <a
                                className="result-card"
                                href="https://www.pmdc.pk/Publication/PressReleases"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ShieldCheck />
                                <h3>PM&DC MDCAT notices</h3>
                            </a>
                        </div>
                    </div>
                </section>
            </Shell>
        );

    if (slug === 'abroad') {
        const items = scholarships.filter((s) =>
            ['BS Abroad', 'Masters Abroad', 'PhD Abroad'].includes(
                s.category
            )
        );

        return (
            <Shell>
                <Hero
                    kicker="🌍 Study Abroad · Pakistan → World"
                    title="12th کے بعد، BS کے بعد یا Masters کے بعد بیرونِ ملک پڑھیں۔"
                    desc="Bachelor/BS، Masters اور PhD کے راستوں کو الگ سمجھیں۔ Current call، requirements اور accreditation official source سے verify کریں۔"
                />

                <section className="section">
                    <div className="container">
                        <div className="abroad-intro">
                            <div>
                                <h2>Pakistan-linked routes</h2>
                                <p>
                                    CSC China، Stipendium Hungaricum، Türkiye Scholarships
                                    اور دیگر verified routes دیکھیں۔
                                </p>
                            </div>

                            {source(
                                'https://www.hec.gov.pk/english/scholarshipsgrants/lao/Pages/default.aspx',
                                'HEC Learning Opportunities'
                            )}
                        </div>

                        <div className="scholarship-grid">
                            {items.map((s) => (
                                <article
                                    className="card scholarship-card"
                                    key={s.id}
                                >
                                    <span className="tag">{s.category}</span>

                                    <h3>{s.name}</h3>

                                    <p>
                                        <strong>{s.provider}</strong> · {s.region}
                                    </p>

                                    <p>{s.summary}</p>

                                    <div className="card-actions">
                                        {source(s.source)}

                                        <a
                                            className="btn btn-primary"
                                            href={s.apply}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Portal <ExternalLink size={13} />
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </Shell>
        );
    }

    if (slug === 'skills')
        return (
            <Shell>
                <Hero
                    kicker="💻 Skills · Free Learning"
                    title="ایک skill، ایک project اور اپنے کام کا proof بنائیں۔"
                    desc="DigiSkills اور NAVTTC free learning/training options دیتے ہیں۔ Current batches official portal پر چیک کریں۔"
                />

                <section className="section">
                    <div className="container">
                        <div className="hero-actions">
                            <a
                                className="btn btn-primary"
                                href="https://www.digiskills.pk/faqs.aspx"
                                target="_blank"
                                rel="noreferrer"
                            >
                                DigiSkills <ExternalLink size={13} />
                            </a>

                            <a
                                className="btn btn-secondary"
                                href="https://navttc.gov.pk/student/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                NAVTTC <ExternalLink size={13} />
                            </a>
                        </div>

                        <div
                            className="grid-3"
                            style={{ marginTop: 22 }}
                        >
                            {skills.map((s, i) => (
                                <article className="card" key={s.name}>
                                    <div className="icon-box">
                                        {[
                                            '💻',
                                            '🤖',
                                            '📊',
                                            '📣',
                                            '🎨',
                                            '🔐',
                                            '🖌️',
                                            '🎬',
                                            '🛒',
                                            '💬',
                                        ][i]}
                                    </div>

                                    <span className="tag">{s.level}</span>

                                    <h3>{s.name}</h3>

                                    <p>{s.outcome}</p>

                                    <div className="skill-links">
                                        {s.links.map((l) => (
                                            <a
                                                key={l[0]}
                                                href={l[1]}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {l[0]} <ExternalLink size={12} />
                                            </a>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div
                            className="grid-3"
                            style={{ marginTop: 22 }}
                        >
                            {freeLearningResources.map((r) => (
                                <article className="card" key={r.name}>
                                    <span className="tag">{r.type}</span>

                                    <h3>{r.name}</h3>

                                    <p>{r.desc}</p>

                                    {source(r.url)}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </Shell>
        );

    if (slug === 'bbise')
        return (
            <Shell>
                <Hero
                    kicker="📝 BBISE Quetta · Results & Services"
                    title="BBISE Result، Matric، Intermediate اور Board services — direct links۔"
                    desc="SSC، HSSC، DMCs، verification، recounting اور official notices کے لیے current links۔"
                />

                <section className="section">
                    <div className="container">
                        <div className="result-grid">
                            {bbiseResults.map((r, i) => (
                                <a
                                    className="result-card"
                                    key={r.name}
                                    href={r.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="result-icon">
                                        {i < 2 ? '📝' : '🎓'}
                                    </div>

                                    <div>
                                        <span>Official BBISE</span>
                                        <h3>{r.name}</h3>
                                        <p>{r.desc}</p>
                                    </div>

                                    <ExternalLink size={18} />
                                </a>
                            ))}
                        </div>

                        <h2 style={{ marginTop: 40 }}>
                            دوسرے اہم boards
                        </h2>

                        <SimpleCards
                            items={boardResources
                                .filter(
                                    (b) =>
                                        b.name !==
                                        'BBISE Quetta — Balochistan Board'
                                )
                                .slice(0, 6)
                                .map((b) => ({
                                    title: b.name,
                                    desc: b.desc,
                                    href: b.url,
                                    tag: 'Official source',
                                }))}
                        />
                    </div>
                </section>
            </Shell>
        );

    if (slug === 'study-after-matric')
        return (
            <Shell>
                <Hero
                    kicker="🎒 Study After Matric"
                    title="پاکستان میں Matric کے بعد کیا پڑھ سکتے ہیں؟"
                    desc="FSc، ICS، FA، I.Com، DAE اور TVET/skills کا موازنہ کریں اور اسے future degrees، tests اور careers سے جوڑیں۔"
                />

                <section className="section">
                    <div className="container">
                        <div className="path-grid">
                            {studyAfterMatric.map((x) => (
                                <article
                                    className="card path-card"
                                    key={x.id}
                                >
                                    <div className="icon-box">{x.icon}</div>

                                    <span className="tag">{x.short}</span>

                                    <h2>{x.name}</h2>

                                    <p>
                                        <b>کس کے لیے؟</b> {x.best}
                                    </p>

                                    <p>{x.what}</p>

                                    <p>
                                        <b>اگلا قدم:</b> {x.next}
                                    </p>

                                    {source(x.source, 'Official resource')}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </Shell>
        );

    if (slug === 'get-online')
        return (
            <Shell>
                <Hero
                    kicker="🌐 اداروں اور local businesses کے لیے"
                    title="اپنے school، college یا business کو online لائیں۔"
                    desc="اپنی حقیقی معلومات، photos اور services کے ساتھ mobile-friendly website بنوائیں۔"
                />

                <section className="section">
                    <div className="container">
                        <div className="grid-3">
                            {[
                                [
                                    'School / College Website',
                                    'Admissions، programs، faculty، notices اور contact information۔',
                                ],
                                [
                                    'Academy / Institute Website',
                                    'Courses، batches، timetable اور contact actions۔',
                                ],
                                [
                                    'Local Business Website',
                                    'Shops، restaurants، clinics اور local services کے لیے professional web presence۔',
                                ],
                            ].map(([t, d]) => (
                                <article className="card" key={t}>
                                    <h3>{t}</h3>
                                    <p>{d}</p>
                                </article>
                            ))}
                        </div>

                        <div
                            className="banner"
                            style={{ marginTop: 22 }}
                        >
                            <div>
                                <h2>Preview پہلے، final website بعد میں۔</h2>
                                <p>
                                    اپنا نام، location، photos، programs/services اور
                                    contact details بھیجیں۔
                                </p>
                            </div>

                            <a
                                className="btn btn-primary"
                                href="mailto:hafeezkaka098@gmail.com?subject=Website%20request"
                            >
                                <Mail size={15} /> Request website
                            </a>
                        </div>
                    </div>
                </section>
            </Shell>
        );

    if (slug === 'contact')
        return (
            <Shell>
                <Hero
                    kicker="✉️ رابطہ"
                    title="TaleemAI کو بہتر بنانے میں مدد کریں۔"
                    desc="غلط link، missing scholarship، outdated information یا useful idea ہو تو ہمیں بتائیں۔"
                />

                <section className="section">
                    <div className="container two-col">
                        <div className="card">
                            <Mail size={25} />

                            <h2>Email</h2>

                            <p>Corrections اور suggestions کے لیے:</p>

                            <a
                                className="contact-email"
                                href="mailto:hafeezkaka098@gmail.com"
                            >
                                hafeezkaka098@gmail.com
                            </a>
                        </div>

                        <div className="card">
                            <h2>Message</h2>

                            <p>
                                اپنی email app کے ذریعے message بھیجیں۔ Passwords، API
                                keys، CNIC یا sensitive information نہ بھیجیں۔
                            </p>

                            <a
                                className="btn btn-primary"
                                href="mailto:hafeezkaka098@gmail.com?subject=TaleemAI%20feedback"
                            >
                                Email TaleemAI
                            </a>
                        </div>
                    </div>
                </section>
            </Shell>
        );

    if (slug === 'privacy')
        return (
            <Shell>
                <Hero
                    kicker="🔒 Privacy"
                    title="TaleemAI Privacy Policy"
                    desc="TaleemAI کیا information رکھتا ہے اور website استعمال کرتے وقت کیا ہوتا ہے۔"
                />

                <section className="section">
                    <div className="container">
                        <div className="privacy-page">
                            <h2>AI Mentor</h2>

                            <p>
                                Mentor profile اور recent conversation browser کے local
                                storage میں رکھی جاتی ہے۔ سوال بھیجنے پر ضروری information
                                server تک جاتی ہے تاکہ AI جواب دے سکے۔
                            </p>

                            <h2>Contact form</h2>

                            <p>
                                Contact message آپ کی اپنی email application کے ذریعے
                                تیار ہوتا ہے۔
                            </p>

                            <h2>Analytics</h2>

                            <p>
                                TaleemAI Vercel Analytics استعمال کرتا ہے تاکہ عمومی
                                website usage سمجھ کر site بہتر کی جا سکے۔
                            </p>

                            <h2>External sources</h2>

                            <p>
                                Scholarships، admissions، tests اور results کے official
                                links اپنی privacy policies رکھتے ہیں۔
                            </p>

                            <h2>Student safety</h2>

                            <p>
                                Password، API key، CNIC یا financial information AI Mentor
                                میں نہ ڈالیں۔
                            </p>

                            <p className="source-note">
                                آخری اپ ڈیٹ: 30 ستمبر 2026 · Website by Hafeez Khan
                            </p>
                        </div>
                    </div>
                </section>
            </Shell>
        );

    if (slug === 'mentor')
        return (
            <Shell>
                <Hero
                    kicker="🤖 TaleemAI Mentor"
                    title="اپنا سوال عام زبان میں پوچھیں۔"
                    desc="Career، scholarship، college، test، skill یا study abroad کے بارے میں اپنی صورتحال بتائیں۔"
                />

                <UrduMentor />
            </Shell>
        );

    return (
        <Shell>
            <Hero
                kicker={names[slug]}
                title={names[slug]}
                desc="TaleemAI کی verified education information، official links اور practical next steps ایک جگہ۔"
            />

            <section className="section">
                <div className="container">
                    <SimpleCards
                        items={governmentResources
                            .slice(0, 9)
                            .map((r) => ({
                                title: r.name,
                                desc: r.desc,
                                href: r.url,
                                tag: r.type,
                            }))}
                    />
                </div>
            </section>
        </Shell>
    );
}

function StethoscopeIcon() {
    return <span style={{ fontSize: 22 }}>🩺</span>;
}