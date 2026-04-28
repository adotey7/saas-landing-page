import {
  InvoiceIcon,
  ReceiptIcon,
  ReminderIcon,
  AnalyticsIcon,
  PaymentsIcon,
  ExportIcon,
  GoogleIcon,
  FacebookIcon,
  AppleIcon,
} from "@/components/icons";

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "API docs"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Help center", "Community", "Templates", "Partners"],
  Legal: ["Privacy", "Terms", "Security", "GDPR"],
};

export const features = [
  {
    icon: InvoiceIcon,
    title: "Invoice Generator",
    description:
      "Create polished, branded invoices in seconds with our drag-and-drop builder. Templates for every industry.",
    accent: "from-orange-600/10 via-orange-500/5",
  },
  {
    icon: ReceiptIcon,
    title: "Receipt Scanner",
    description:
      "Snap a photo of any receipt and our AI extracts line items, totals, and categories instantly.",
    accent: "from-amber-600/10 via-amber-500/5",
  },
  {
    icon: ReminderIcon,
    title: "Smart Reminders",
    description:
      "Automated payment reminders that adapt to client behavior. Reduce late payments without lifting a finger.",
    accent: "from-yellow-600/10 via-yellow-500/5",
  },
  {
    icon: AnalyticsIcon,
    title: "Real-time Analytics",
    description:
      "Track revenue, outstanding balances, and client payment patterns from a single dashboard.",
    accent: "from-amber-700/10 via-amber-600/5",
  },
  {
    icon: PaymentsIcon,
    title: "Instant Payments",
    description:
      "Accept credit cards, ACH, and digital wallets directly on your invoices. Funds settle in 1-2 business days.",
    accent: "from-orange-500/10 via-orange-400/5",
  },
  {
    icon: ExportIcon,
    title: "Export & Integrate",
    description:
      "Export to PDF, CSV, or integrate with QuickBooks, Xero, and your favorite accounting tools.",
    accent: "from-stone-600/8 via-stone-500/4",
  },
];

export const steps = [
  {
    step: "01",
    title: "Create your invoice",
    description:
      "Choose from dozens of professional templates or build your own. Add your logo, line items, taxes, and payment terms in minutes.",
  },
  {
    step: "02",
    title: "Send & track",
    description:
      "Send invoices via email or share a secure link. Get notified when clients view, approve, and pay — all in real time.",
  },
  {
    step: "03",
    title: "Get paid faster",
    description:
      "Clients pay with credit card, ACH, or digital wallet right from the invoice. Automatic reminders chase overdue payments for you.",
  },
  {
    step: "04",
    title: "Reconcile & report",
    description:
      "Export to your accounting software or use our built-in reports. Tax time is a breeze with categorized income and expense tracking.",
  },
];

export const tiers = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for freelancers just getting started.",
    features: [
      "Up to 5 invoices/month",
      "Basic templates",
      "Email delivery",
      "PDF export",
      "Mobile app access",
    ],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Professional",
    price: "$19",
    period: "/month",
    description: "For growing businesses that send invoices regularly.",
    features: [
      "Unlimited invoices",
      "All premium templates",
      "Custom branding & logo",
      "Payment reminders",
      "Client portal",
      "Receipt scanning",
      "Priority support",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Business",
    price: "$49",
    period: "/month",
    description: "For teams and agencies with advanced needs.",
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Advanced analytics",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "SSO & audit logs",
    ],
    cta: "Contact sales",
    featured: false,
  },
];

export const testimonials = [
  {
    quote:
      "InvoiceFlow cut our billing time from 3 hours a week to 15 minutes. The automatic reminders alone have reduced our overdue invoices by 60%.",
    author: "Sarah Chen",
    role: "Founder, Studio Nine Design",
  },
  {
    quote:
      "The receipt scanner is incredible. I just snap a photo and everything gets categorized automatically. Tax season used to be my nightmare — not anymore.",
    author: "Marcus Rodriguez",
    role: "Freelance Photographer",
  },
  {
    quote:
      "We switched from a competitor that cost 3x more. InvoiceFlow is faster, prettier, and the client portal feature has been a game-changer for our agency.",
    author: "Priya Patel",
    role: "COO, Launchpad Agency",
  },
];

export const integrationBrands = ["Stripe", "Gusto", "Shopify", "QuickBooks", "Vercel", "Xero"];

export const oauthProviders = [
  { id: "google", name: "Google", icon: GoogleIcon },
  { id: "facebook", name: "Facebook", icon: FacebookIcon },
  { id: "apple", name: "Apple", icon: AppleIcon },
];

export const dashboardInvoices = [
  { client: "Acme Corp", amount: "$2,400", status: "Paid" as const },
  { client: "Globex Inc", amount: "$1,850", status: "Pending" as const },
  { client: "Stark Industries", amount: "$5,200", status: "Overdue" as const },
];

export const dashboardStats = [
  { title: "Total Revenue", value: "$48,290", change: "+12.5%", trend: "up" as const },
  { title: "Pending Invoices", value: "8", change: "$4,200", trend: "neutral" as const },
  { title: "Paid This Month", value: "24", change: "+8.2%", trend: "up" as const },
];
