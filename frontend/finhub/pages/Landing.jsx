import {Link} from "react-router-dom";
import {LuArrowDownRight, LuArrowUpRight, LuChevronDown, LuCircleDashed, LuMoveUpRight, LuPlay, LuScanLine, LuSparkles} from "react-icons/lu";
import "./Landing.css";
import "./LandingTheme.css";

const signalRows = [
    {label: "Mission freelance", date: "Aujourd’hui", amount: "+ 850 000 F CFA", positive: true},
    {label: "Logement & espace", date: "10 juillet", amount: "− 280 000 F CFA", positive: false},
    {label: "Produit numérique", date: "07 juillet", amount: "+ 320 000 F CFA", positive: true},
]

const Landing = () => (
    <main className="landing-page">
        <nav className="landing-nav">
            <Link to="/" className="landing-brand" aria-label="Finhub accueil">
                <span className="landing-brand-mark"><span /></span>
                <span>Finhub<span className="landing-brand-dot">/</span></span>
            </Link>
            <div className="hidden items-center gap-8 text-sm text-[#55534c] md:flex">
                <a href="#approach">L’approche</a>
                <a href="#system">Le système</a>
                <a href="#demo">La démo</a>
            </div>
            <Link to="/?demo=1" className="landing-nav-cta">Ouvrir la démo <LuArrowUpRight /></Link>
        </nav>

        <section className="landing-hero">
            <div className="landing-hero-copy">
                <div className="landing-kicker"><span className="landing-kicker-line" /> Le cockpit de vos décisions financières</div>
                <h1>Regardez votre argent <em>autrement.</em></h1>
                <p className="landing-hero-lede">Finhub transforme les chiffres qui s’accumulent en une vision qui avance. Un espace calme, précis et vivant pour savoir où vous en êtes — et où vous allez.</p>
                <div className="landing-actions">
                    <Link to="/?demo=1" className="landing-primary">Explorer la démo <LuMoveUpRight /></Link>
                    <a href="#approach" className="landing-secondary"><span className="landing-play"><LuPlay /></span> Comprendre l’idée</a>
                </div>
                <div className="landing-proof"><LuCircleDashed /> Données de démonstration · aucune inscription</div>
            </div>

            <div className="landing-hero-art" aria-label="Aperçu du tableau de bord Finhub">
                <div className="landing-art-note landing-art-note-top"><span>signal / 07</span><strong>+ 12,8%</strong></div>
                <div className="landing-board">
                    <div className="landing-board-top"><span className="landing-mini-brand">Finhub<span>/</span></span><span className="landing-board-date">13 — JUL. 2026</span></div>
                    <div className="landing-board-heading"><div><span className="landing-board-eyebrow">VUE D’ENSEMBLE</span><h2>Bonjour, Hermès.</h2></div><span className="landing-board-avatar">H</span></div>
                    <div className="landing-balance"><span>Solde disponible</span><strong>1 879 500 <small>F CFA</small></strong><div className="landing-balance-rule"><i /><span>+ 8,4% ce mois</span></div></div>
                    <div className="landing-chart"><div className="landing-chart-label"><span>FLUX SUR 30 JOURS</span><b>+ 1,42 M</b></div><svg viewBox="0 0 520 140" preserveAspectRatio="none" role="img" aria-label="Courbe de progression financière"><defs><linearGradient id="finhubFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#b8f36b" stopOpacity=".22"/><stop offset="1" stopColor="#b8f36b" stopOpacity="0"/></linearGradient></defs><path className="landing-chart-area" d="M0,122 C32,114 44,82 73,91 C101,100 119,70 146,76 C173,82 184,97 216,66 C244,40 258,62 288,52 C317,42 333,74 357,56 C389,31 403,46 430,32 C461,17 478,27 520,7 L520,140 L0,140 Z"/><path className="landing-chart-line" d="M0,122 C32,114 44,82 73,91 C101,100 119,70 146,76 C173,82 184,97 216,66 C244,40 258,62 288,52 C317,42 333,74 357,56 C389,31 403,46 430,32 C461,17 478,27 520,7"/><circle cx="430" cy="32" r="5"/></svg><div className="landing-chart-axis"><span>15 JUIN</span><span>30 JUIN</span><span>13 JUIL.</span></div></div>
                    <div className="landing-board-grid"><div><span>REVENUS</span><strong>2 350 000</strong><i className="positive"><LuArrowUpRight /></i></div><div><span>DÉPENSES</span><strong>470 500</strong><i className="negative"><LuArrowDownRight /></i></div></div>
                </div>
                <div className="landing-art-note landing-art-note-bottom"><LuScanLine /><span>Votre signal<br/><b>est lisible.</b></span></div>
                <div className="landing-art-sticker">F</div>
            </div>
        </section>

        <div className="landing-ticker"><span>MOINS DE BRUIT</span><b>✳</b><span>PLUS DE SIGNAL</span><b>✳</b><span>DES DÉCISIONS PLUS NETTES</span><b>✳</b><span>FINHUB / 2026</span></div>

        <section id="approach" className="landing-section landing-approach">
            <div className="landing-section-index">01 <span>—</span> L’APPROCHE</div>
            <div className="landing-approach-content"><h2>Les finances personnelles n’ont pas besoin de plus de bruit.</h2><div><p>Vous n’avez pas besoin d’un tableur de plus. Vous avez besoin de comprendre ce qui se passe, pendant que cela se passe.</p><p>Finhub rassemble vos entrées, vos sorties et vos tendances dans une interface qui donne de la perspective avant de donner des chiffres.</p></div></div>
        </section>

        <section id="system" className="landing-section landing-system">
            <div className="landing-section-index">02 <span>—</span> LE SYSTÈME</div>
            <div className="landing-system-grid">
                <article className="landing-feature landing-feature-dark"><span className="landing-feature-no">01</span><LuSparkles /><h3>Voir le mouvement.</h3><p>Chaque revenu et chaque dépense trouve sa place dans une lecture continue de votre mois.</p><a href="#demo">Lire le signal <LuArrowUpRight /></a></article>
                <article className="landing-feature landing-feature-blue"><span className="landing-feature-no">02</span><div className="landing-feature-bars"><i /><i /><i /><i /><i /><i /></div><h3>Comprendre la tendance.</h3><p>Les bons repères apparaissent au bon moment, sans vous noyer sous les détails.</p><a href="#demo">Voir les tendances <LuArrowUpRight /></a></article>
                <article className="landing-feature landing-feature-paper"><span className="landing-feature-no">03</span><LuCircleDashed /><h3>Décider avec calme.</h3><p>Une vue claire pour passer du constat à l’action, avec moins d’hésitation.</p><a href="#demo">Entrer dans l’espace <LuArrowUpRight /></a></article>
            </div>
        </section>

        <section className="landing-section landing-ledger"><div className="landing-section-index">03 <span>—</span> EN UN COUP D’ŒIL</div><div className="landing-ledger-grid"><div><h2>Le détail quand vous le voulez. La clarté tout le temps.</h2><p>Un aperçu vivant, des transactions reconnaissables et une structure qui vous laisse respirer.</p><Link to="/?demo=1" className="landing-primary">Voir Finhub en action <LuMoveUpRight /></Link></div><div className="landing-ledger-card"><div className="landing-ledger-card-head"><span>ACTIVITÉ RÉCENTE</span><span>JUILLET 2026</span></div>{signalRows.map((row) => <div className="landing-ledger-row" key={row.label}><span className="landing-ledger-icon">{row.positive ? <LuArrowUpRight /> : <LuArrowDownRight />}</span><div><strong>{row.label}</strong><small>{row.date}</small></div><b className={row.positive ? "positive-text" : "negative-text"}>{row.amount}</b></div>)}</div></div></section>

        <section id="demo" className="landing-final"><div className="landing-final-orbit" /><div className="landing-section-index">04 <span>—</span> LA DÉMO</div><h2>Votre prochaine bonne décision commence ici.</h2><p>Explorez Finhub avec un espace prérempli, pensé pour vous laisser ressentir le produit en quelques secondes.</p><Link to="/?demo=1" className="landing-final-cta">Lancer la démo <LuMoveUpRight /></Link><span className="landing-final-foot">FINHUB / PERSONAL FINANCE, CLEARLY</span></section>
        <footer className="landing-footer"><span className="landing-brand"><span className="landing-brand-mark"><span /></span><span>Finhub<span className="landing-brand-dot">/</span></span></span><span>Un prototype de portfolio — 2026</span><span>Fait avec ❤️ — KONGO Hermes Eliram</span></footer>
    </main>
)

export default Landing
