export const isDemoMode = () => localStorage.getItem("accessToken") === "demo-token"

export const DEMO_INCOMES = [
    { _id: "income-1", source: "Mission freelance — Studio Noma", amount: 1250000, date: "2026-07-08", icon: "◒" },
    { _id: "income-2", source: "Abonnement conseil — Atelier 17", amount: 480000, date: "2026-07-03", icon: "✦" },
    { _id: "income-3", source: "Vente de template UI", amount: 120000, date: "2026-06-27", icon: "◈" },
    { _id: "income-4", source: "Remboursement professionnel", amount: 95000, date: "2026-06-18", icon: "↗" },
    { _id: "income-5", source: "Mission maintenance — Kora", amount: 285000, date: "2026-06-11", icon: "⌁" },
    { _id: "income-6", source: "Dividendes portfolio", amount: 120000, date: "2026-06-02", icon: "◆" },
]

export const DEMO_EXPENSES = [
    { _id: "expense-1", category: "Loyer & espace de travail", amount: 210000, date: "2026-07-05", icon: "⌂" },
    { _id: "expense-2", category: "Outils logiciels", amount: 85000, date: "2026-07-02", icon: "⌘" },
    { _id: "expense-3", category: "Transport & déplacements", amount: 62000, date: "2026-06-29", icon: "↝" },
    { _id: "expense-4", category: "Alimentation", amount: 98000, date: "2026-06-25", icon: "✣" },
    { _id: "expense-5", category: "Téléphone & internet", amount: 45000, date: "2026-06-20", icon: "⌁" },
    { _id: "expense-6", category: "Formation design produit", amount: 74000, date: "2026-06-14", icon: "◇" },
    { _id: "expense-7", category: "Santé & bien-être", amount: 38000, date: "2026-06-09", icon: "＋" },
    { _id: "expense-8", category: "Abonnements média", amount: 28500, date: "2026-06-01", icon: "◌" },
]
