export type Athlete = {
  id: string;
  name: string;
  sport: string;
  location: string;
  age: number;
  level: "District" | "State" | "National";
  verified: boolean;
  best: string;
  bestLabel: string;
  achievement: string;
  trend: string;
  rank: string;
  improvement: string;
  initials: string;
  progress: { year: string; value: number }[];
  match: number;
  funding: { goal: number; raised: number; purpose: string[]; title: string };
};

export const athletes: Athlete[] = [
  {
    id: "aarav-sharma",
    name: "Aarav Sharma",
    sport: "400m Athletics",
    location: "Pune, Maharashtra",
    age: 19,
    level: "State",
    verified: true,
    best: "48.92 sec",
    bestLabel: "Personal Best",
    achievement: "State Champion",
    trend: "Improving",
    rank: "#12 Maharashtra",
    improvement: "+4.2%",
    initials: "AS",
    progress: [
      { year: "2024", value: 51.4 },
      { year: "2025", value: 50.1 },
      { year: "2026", value: 48.92 },
    ],
    match: 92,
    funding: {
      goal: 75000,
      raised: 42000,
      purpose: ["Travel", "Equipment", "Competition Fees", "Training"],
      title: "Support Aarav's road to Nationals",
    },
  },
  {
    id: "meera-iyer",
    name: "Meera Iyer",
    sport: "Long Jump",
    location: "Coimbatore, Tamil Nadu",
    age: 17,
    level: "National",
    verified: true,
    best: "6.14 m",
    bestLabel: "Personal Best",
    achievement: "National Finalist",
    trend: "Improving",
    rank: "#5 Tamil Nadu",
    improvement: "+6.1%",
    initials: "MI",
    progress: [
      { year: "2024", value: 5.62 },
      { year: "2025", value: 5.88 },
      { year: "2026", value: 6.14 },
    ],
    match: 88,
    funding: {
      goal: 120000,
      raised: 39000,
      purpose: ["Coaching", "Travel", "Nutrition"],
      title: "Back Meera's national circuit season",
    },
  },
  {
    id: "rohit-deshmukh",
    name: "Rohit Deshmukh",
    sport: "Freestyle Swimming",
    location: "Nagpur, Maharashtra",
    age: 18,
    level: "State",
    verified: false,
    best: "53.40 sec",
    bestLabel: "100m Freestyle",
    achievement: "District Gold",
    trend: "Steady",
    rank: "#21 Maharashtra",
    improvement: "+1.8%",
    initials: "RD",
    progress: [
      { year: "2024", value: 55.2 },
      { year: "2025", value: 54.1 },
      { year: "2026", value: 53.4 },
    ],
    match: 74,
    funding: {
      goal: 60000,
      raised: 12000,
      purpose: ["Pool Access", "Equipment"],
      title: "Fund Rohit's state training block",
    },
  },
  {
    id: "sanya-kaur",
    name: "Sanya Kaur",
    sport: "Badminton Singles",
    location: "Ludhiana, Punjab",
    age: 16,
    level: "State",
    verified: true,
    best: "1420 pts",
    bestLabel: "Ranking Points",
    achievement: "State Runner-up",
    trend: "Improving",
    rank: "#9 Punjab",
    improvement: "+9.4%",
    initials: "SK",
    progress: [
      { year: "2024", value: 1080 },
      { year: "2025", value: 1265 },
      { year: "2026", value: 1420 },
    ],
    match: 81,
    funding: {
      goal: 90000,
      raised: 67000,
      purpose: ["Tournaments", "Racquets", "Physio"],
      title: "Send Sanya to the junior nationals",
    },
  },
  {
    id: "kabir-nair",
    name: "Kabir Nair",
    sport: "Boxing 60kg",
    location: "Kochi, Kerala",
    age: 20,
    level: "National",
    verified: true,
    best: "24-3",
    bestLabel: "Bout Record",
    achievement: "National Bronze",
    trend: "Improving",
    rank: "#4 Kerala",
    improvement: "+3.6%",
    initials: "KN",
    progress: [
      { year: "2024", value: 62 },
      { year: "2025", value: 71 },
      { year: "2026", value: 79 },
    ],
    match: 86,
    funding: {
      goal: 150000,
      raised: 88000,
      purpose: ["Camp", "Travel", "Recovery"],
      title: "Power Kabir's international debut",
    },
  },
  {
    id: "isha-patel",
    name: "Isha Patel",
    sport: "800m Athletics",
    location: "Surat, Gujarat",
    age: 18,
    level: "District",
    verified: false,
    best: "2:14.6",
    bestLabel: "Personal Best",
    achievement: "District Champion",
    trend: "Improving",
    rank: "#33 Gujarat",
    improvement: "+2.9%",
    initials: "IP",
    progress: [
      { year: "2024", value: 138 },
      { year: "2025", value: 137 },
      { year: "2026", value: 134.6 },
    ],
    match: 69,
    funding: {
      goal: 45000,
      raised: 9000,
      purpose: ["Shoes", "Travel"],
      title: "Help Isha reach the state meet",
    },
  },
];

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const matchReasons = [
  "Strong performance trajectory",
  "Verified achievements",
  "Relevant competition level",
  "Location match",
];

export const filterGroups = [
  { label: "Sport", options: ["Athletics", "Swimming", "Badminton", "Boxing"] },
  { label: "Location", options: ["Maharashtra", "Tamil Nadu", "Punjab", "Kerala", "Gujarat"] },
  { label: "Age", options: ["Under 17", "17–19", "20+"] },
  { label: "Level", options: ["District", "State", "National"] },
];
