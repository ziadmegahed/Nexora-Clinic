import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Bone,
  HeartPulse,
  Scissors,
  Smile,
  Sparkles,
  Stethoscope,
  Weight,
} from "lucide-react";

import hair from "@/assets/treatment-hair.jpg";
import dental from "@/assets/treatment-dental.jpg";
import smile from "@/assets/treatment-smile.jpg";
import plastic from "@/assets/treatment-plastic.jpg";
import bariatric from "@/assets/treatment-bariatric.jpg";
import ivf from "@/assets/treatment-ivf.jpg";
import ortho from "@/assets/treatment-ortho.jpg";
import derm from "@/assets/treatment-derm.jpg";

import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import doc4 from "@/assets/doctor-4.jpg";

import baHairBefore from "@/assets/ba-hair-before.jpg";
import baHairAfter from "@/assets/ba-hair-after.jpg";
import baDentalBefore from "@/assets/ba-dental-before.jpg";
import baDentalAfter from "@/assets/ba-dental-after.jpg";
import baWeightBefore from "@/assets/ba-weight-before.jpg";
import baWeightAfter from "@/assets/ba-weight-after.jpg";

export const brand = {
  name: "Nexora Clinic",
  tagline: "Health • Beauty • Confidence",
  email: "ziadmegahed074@gmail.com",
  phone: "+20 101 249 6224",
  whatsapp: "+20 101 249 6224",
  whatsappUrl: "https://wa.me/201012496224",
  address: "Levent Business Towers, Büyükdere Caddesi, Istanbul, Turkey",
  hours: "Mon – Sat, 9:00 – 19:00 (TRT) • Patient line open 24/7",
};

export const treatmentCategories = [
  "Hair",
  "Dental",
  "Plastic Surgery",
  "Bariatric",
  "Dermatology",
  "IVF",
  "Orthopedics",
] as const;

export type TreatmentCategory = (typeof treatmentCategories)[number];

export type Treatment = {
  slug: string;
  name: string;
  category: TreatmentCategory;
  icon: LucideIcon;
  image: string;
  short: string;
  priceFrom: string;
  duration: string;
  stay: string;
  overview: string;
  whoFor: string[];
  benefits: string[];
  steps: { title: string; text: string }[];
  recovery: string;
  risks: string[];
  results: string;
  faqs: { q: string; a: string }[];
  doctorSlugs: string[];
};

export const treatments: Treatment[] = [
  {
    slug: "hair-transplant",
    name: "Hair Transplant",
    category: "Hair",
    icon: Sparkles,
    image: hair,
    short: "Sapphire FUE and DHI techniques for natural, permanent density.",
    priceFrom: "$1,450",
    duration: "6–8 hours",
    stay: "4 nights in Turkey",
    overview:
      "Our surgeons use Sapphire FUE and DHI techniques to relocate your own resistant follicles to thinning areas, rebuilding a hairline designed around your facial proportions. Grafts are placed one by one for a density and direction that look entirely natural.",
    whoFor: [
      "Men and women with androgenetic hair loss",
      "Receding hairlines, crown thinning or scarred areas",
      "Patients with sufficient donor density at the back of the scalp",
    ],
    benefits: [
      "Permanent, own-hair result",
      "No linear scar with FUE",
      "Up to 4,500 grafts in one session",
      "Natural hairline design",
    ],
    steps: [
      { title: "Analysis & design", text: "Donor mapping and hairline drawing agreed with you before we start." },
      { title: "Local anaesthesia", text: "Painless sedation-supported numbing of donor and recipient areas." },
      { title: "Extraction", text: "Follicular units harvested one by one with micro-punches." },
      { title: "Implantation", text: "Grafts implanted at the correct angle and depth for natural flow." },
    ],
    recovery: "Back to daily life in 3 days. Crusts fall within 10 days, first new growth at month 3–4, final result at month 12.",
    risks: ["Temporary shock loss", "Swelling for 2–3 days", "Small risk of folliculitis", "Rare uneven density needing a touch-up"],
    results: "Between 85% and 95% graft survival with visible density from month six and full maturity at twelve months.",
    faqs: [
      { q: "Is it painful?", a: "The procedure is done under local anaesthesia; most patients describe mild pressure only." },
      { q: "How many grafts will I need?", a: "Typically 2,000–4,000. Send us photos and we return an exact estimate within 24 hours." },
    ],
    doctorSlugs: ["emre-yilmaz"],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Dental",
    icon: Smile,
    image: dental,
    short: "Titanium implants with lifetime-grade crowns, placed by prosthodontists.",
    priceFrom: "$480 / implant",
    duration: "1–2 hours per implant",
    stay: "5 nights, second visit for crowns",
    overview:
      "Swiss and German titanium implant systems replace missing roots and restore full chewing function. 3D CBCT planning and guided surgery keep placement precise and recovery short.",
    whoFor: ["Single or multiple missing teeth", "Loose dentures", "Full-arch rehabilitation (All-on-4 / All-on-6)"],
    benefits: ["Permanent tooth replacement", "Preserves jawbone", "Guided, minimally invasive surgery", "5–10 year warranty"],
    steps: [
      { title: "3D scan", text: "CBCT imaging and digital planning of implant position." },
      { title: "Placement", text: "Guided insertion of the titanium fixture under local anaesthesia." },
      { title: "Healing", text: "Osseointegration over 8–12 weeks with a temporary crown." },
      { title: "Final crown", text: "Zirconia crown fitted and shade-matched on your second visit." },
    ],
    recovery: "Soft diet for one week, normal activity next day.",
    risks: ["Temporary swelling", "Rare implant failure", "Sinus involvement in upper jaw cases"],
    results: "Over 97% long-term implant survival with proper care.",
    faqs: [{ q: "Can it be done in one trip?", a: "Immediate loading is possible in selected cases; otherwise two visits are needed." }],
    doctorSlugs: ["elif-demir"],
  },
  {
    slug: "hollywood-smile",
    name: "Hollywood Smile",
    category: "Dental",
    icon: Sparkles,
    image: smile,
    short: "E-max veneers and digital smile design in as little as five days.",
    priceFrom: "$210 / veneer",
    duration: "3 appointments",
    stay: "6 nights in Turkey",
    overview:
      "A complete aesthetic makeover using digital smile design, E-max or zirconia veneers and minimal enamel reduction. You approve a mock-up of your new smile before anything is bonded.",
    whoFor: ["Discoloured or worn teeth", "Gaps, chips and irregular shapes", "Patients wanting a full aesthetic makeover"],
    benefits: ["Preview before treatment", "Stain resistant ceramics", "Completed in one trip", "Natural translucency"],
    steps: [
      { title: "Digital design", text: "Photos, scans and a simulation of your future smile." },
      { title: "Mock-up", text: "Trial smile placed in your mouth for approval." },
      { title: "Preparation", text: "Minimal shaping and precise impressions." },
      { title: "Bonding", text: "Final veneers bonded and polished." },
    ],
    recovery: "No downtime; mild sensitivity for a few days.",
    risks: ["Sensitivity to hot and cold", "Irreversible minimal enamel reduction", "Veneer chipping under heavy bite forces"],
    results: "A uniform, bright and proportionate smile lasting 10–15 years.",
    faqs: [{ q: "How many veneers do I need?", a: "Most patients choose 16–20 upper and lower visible teeth." }],
    doctorSlugs: ["elif-demir"],
  },
  {
    slug: "plastic-surgery",
    name: "Plastic Surgery",
    category: "Plastic Surgery",
    icon: Scissors,
    image: plastic,
    short: "Rhinoplasty, liposuction, tummy tuck and body contouring.",
    priceFrom: "$1,900",
    duration: "2–5 hours",
    stay: "7–10 nights in Turkey",
    overview:
      "Board-certified plastic surgeons operating in JCI-accredited hospitals, covering rhinoplasty, breast surgery, liposuction, abdominoplasty and mommy makeovers with a single coordinated plan.",
    whoFor: ["Adults in good general health", "Stable weight for at least 6 months", "Realistic aesthetic goals"],
    benefits: ["Accredited hospital theatres", "Personal nurse coordinator", "Compression garments included", "Video follow-up for 12 months"],
    steps: [
      { title: "Virtual consult", text: "Photo assessment and surgical plan before you fly." },
      { title: "Pre-op tests", text: "Bloodwork, ECG and anaesthesia clearance on arrival." },
      { title: "Surgery", text: "Performed under general anaesthesia with overnight monitoring." },
      { title: "Aftercare", text: "Dressings, drains and clearance-to-fly check before departure." },
    ],
    recovery: "Most patients fly home after 7–10 days; full results at 3–6 months.",
    risks: ["Bruising and swelling", "Scarring", "Seroma or haematoma", "Anaesthesia-related risks"],
    results: "Long-lasting contour improvements maintained with stable weight.",
    faqs: [{ q: "Can I combine procedures?", a: "Yes, combinations are common and reduce total cost and recovery time." }],
    doctorSlugs: ["mehmet-kaya"],
  },
  {
    slug: "bariatric-surgery",
    name: "Bariatric Surgery",
    category: "Bariatric",
    icon: Weight,
    image: bariatric,
    short: "Gastric sleeve and bypass with a full 12-month nutrition programme.",
    priceFrom: "$3,400",
    duration: "60–90 minutes",
    stay: "7 nights in Turkey",
    overview:
      "Laparoscopic sleeve gastrectomy and gastric bypass performed by high-volume bariatric teams, with dietitian support, psychological screening and a structured 12-month follow-up.",
    whoFor: ["BMI above 35, or above 30 with comorbidities", "Failed long-term diet attempts", "Type 2 diabetes or sleep apnoea"],
    benefits: ["Keyhole surgery", "60–70% excess weight loss", "Diabetes remission in many cases", "12 months of dietitian follow-up"],
    steps: [
      { title: "Medical review", text: "Blood panel, endoscopy and anaesthesia assessment." },
      { title: "Surgery", text: "Laparoscopic procedure with 4–5 small incisions." },
      { title: "Hospital stay", text: "2–3 nights with mobilisation from day one." },
      { title: "Nutrition plan", text: "Staged diet plan and monthly online reviews." },
    ],
    recovery: "Light activity within a week, full recovery in 4 weeks.",
    risks: ["Leak or bleeding (rare)", "Nutritional deficiency without supplements", "Reflux after sleeve"],
    results: "Average 60–70% excess weight loss within 12–18 months.",
    faqs: [{ q: "Sleeve or bypass?", a: "Your surgeon recommends the right option after reviewing BMI, reflux and metabolic history." }],
    doctorSlugs: ["mehmet-kaya"],
  },
  {
    slug: "ivf-fertility",
    name: "IVF & Fertility",
    category: "IVF",
    icon: Baby,
    image: ivf,
    short: "ICSI, PGT-A testing and embryo freezing in top-tier laboratories.",
    priceFrom: "$2,700 / cycle",
    duration: "18–21 days on site",
    stay: "3 weeks in Turkey",
    overview:
      "Full IVF and ICSI cycles supported by time-lapse incubation, genetic screening and personalised stimulation protocols in ISO-certified embryology labs.",
    whoFor: ["Couples with 12+ months of unexplained infertility", "Male factor infertility", "Previous failed cycles elsewhere"],
    benefits: ["Time-lapse embryo monitoring", "PGT-A genetic screening", "Embryo and egg freezing", "Coordinated remote monitoring"],
    steps: [
      { title: "Assessment", text: "Hormone panel, ultrasound and semen analysis." },
      { title: "Stimulation", text: "10–12 days of monitored ovarian stimulation." },
      { title: "Retrieval & ICSI", text: "Egg collection under sedation and fertilisation in the lab." },
      { title: "Transfer", text: "Fresh or frozen embryo transfer and pregnancy test." },
    ],
    recovery: "Rest for 24 hours after retrieval; no downtime after transfer.",
    risks: ["Ovarian hyperstimulation", "Multiple pregnancy", "Cycle cancellation"],
    results: "Success rates vary by age; our clinics report 45–55% per transfer under 35.",
    faqs: [{ q: "How long must we stay?", a: "Plan around three weeks, or split into two shorter visits with a frozen transfer." }],
    doctorSlugs: ["zeynep-arslan"],
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    category: "Orthopedics",
    icon: Bone,
    image: ortho,
    short: "Knee and hip replacement, arthroscopy and spine procedures.",
    priceFrom: "$5,200",
    duration: "1–3 hours",
    stay: "10–14 nights in Turkey",
    overview:
      "Joint replacement and sports-injury surgery using implants from leading global manufacturers, combined with an in-house physiotherapy programme from day one after surgery.",
    whoFor: ["Advanced osteoarthritis", "Sports injuries such as ACL or meniscus tears", "Chronic back and disc pain"],
    benefits: ["Premium implants", "Daily physiotherapy included", "Rapid mobilisation protocols", "Remote rehab plan after you fly home"],
    steps: [
      { title: "Imaging review", text: "X-ray and MRI assessment before travel." },
      { title: "Surgery", text: "Joint replacement or arthroscopic repair." },
      { title: "Physiotherapy", text: "Structured rehabilitation starting within 24 hours." },
      { title: "Discharge plan", text: "Home exercise programme and remote reviews." },
    ],
    recovery: "Walking with support in 1–2 days, full recovery in 8–12 weeks.",
    risks: ["Blood clots", "Infection", "Implant loosening over time"],
    results: "Implants typically last 15–20 years with excellent pain relief.",
    faqs: [{ q: "Do you help with mobility support?", a: "Yes — wheelchair transfers, accessible hotels and airport assistance are arranged." }],
    doctorSlugs: ["emre-yilmaz"],
  },
  {
    slug: "dermatology",
    name: "Dermatology & Skin",
    category: "Dermatology",
    icon: HeartPulse,
    image: derm,
    short: "Laser resurfacing, fillers, PRP and medical skin programmes.",
    priceFrom: "$180",
    duration: "30–60 minutes",
    stay: "Same day",
    overview:
      "Medical and aesthetic dermatology: fractional laser, chemical peels, PRP, mesotherapy, botulinum toxin and dermal fillers delivered by consultant dermatologists.",
    whoFor: ["Acne scars and pigmentation", "Fine lines and volume loss", "Hair thinning suited to PRP"],
    benefits: ["Non-surgical", "Little to no downtime", "Combinable with other treatments", "Medical-grade aftercare kit"],
    steps: [
      { title: "Skin analysis", text: "Consultant assessment and photo documentation." },
      { title: "Plan", text: "Session count and product selection agreed with you." },
      { title: "Treatment", text: "Performed with topical anaesthesia where needed." },
      { title: "Aftercare", text: "Home routine and sun-protection protocol." },
    ],
    recovery: "Redness for 24–72 hours depending on the modality.",
    risks: ["Temporary redness or swelling", "Pigment changes", "Rare bruising after injectables"],
    results: "Progressive improvement over 3–6 sessions with maintenance twice a year.",
    faqs: [{ q: "Can I fly the same day?", a: "Yes, most non-surgical skin treatments allow same-day travel." }],
    doctorSlugs: ["zeynep-arslan"],
  },
];

export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  category: TreatmentCategory;
  years: number;
  rating: number;
  reviews: number;
  languages: string[];
  photo: string;
  hospital: string;
  bio: string;
  specialties: string[];
  education: string[];
  experience: string[];
  certificates: string[];
};

export const doctors: Doctor[] = [
  {
    slug: "emre-yilmaz",
    name: "Dr. Emre Yılmaz",
    specialty: "Hair Restoration & Orthopedic Surgery",
    category: "Hair",
    years: 16,
    rating: 4.9,
    reviews: 412,
    languages: ["English", "Turkish", "German"],
    photo: doc1,
    hospital: "Marmara Specialised Hospital, Istanbul",
    bio: "Dr. Emre Yılmaz has performed more than 4,000 Sapphire FUE and DHI procedures and leads Nexora's hair restoration unit. He is known for conservative, age-appropriate hairline design and meticulous graft handling.",
    specialties: ["Sapphire FUE", "DHI implantation", "Beard & eyebrow transplant", "Joint preservation surgery"],
    education: ["MD, Istanbul University", "MSc Surgery, Hacettepe University", "ISHRS Fellowship, Istanbul"],
    experience: ["Head of Hair Restoration, Nexora Clinic (2018–now)", "Consultant Surgeon, Marmara Specialised Hospital", "Visiting surgeon, Berlin Aesthetic Institute"],
    certificates: ["ISHRS Member", "Turkish Medical Association", "Advanced Trauma Life Support"],
  },
  {
    slug: "elif-demir",
    name: "Dr. Elif Demir",
    specialty: "Prosthodontics & Cosmetic Dentistry",
    category: "Dental",
    years: 13,
    rating: 5.0,
    reviews: 356,
    languages: ["English", "Turkish", "Italian"],
    photo: doc2,
    hospital: "Nexora Dental Centre, Istanbul",
    bio: "Dr. Elif Demir specialises in digital smile design, full-mouth rehabilitation and guided implantology, combining scanner-based planning with a strongly conservative approach to tooth structure.",
    specialties: ["Digital smile design", "E-max & zirconia veneers", "Guided implant surgery", "Full-arch rehabilitation"],
    education: ["DDS, Ege University", "MSc Prosthodontics, Istanbul University", "Certificate in Digital Dentistry, Milan"],
    experience: ["Clinical Director, Nexora Dental Centre", "Lecturer in Prosthodontics, Istanbul University", "8,000+ veneers placed"],
    certificates: ["ICOI Diplomate", "Invisalign Certified", "Turkish Dental Association"],
  },
  {
    slug: "mehmet-kaya",
    name: "Dr. Mehmet Kaya",
    specialty: "Plastic & Bariatric Surgery",
    category: "Plastic Surgery",
    years: 21,
    rating: 4.8,
    reviews: 528,
    languages: ["English", "Turkish", "French"],
    photo: doc3,
    hospital: "Istanbul International Hospital (JCI)",
    bio: "With over two decades in aesthetic and metabolic surgery, Dr. Mehmet Kaya performs rhinoplasty, body contouring and laparoscopic bariatric procedures, with a strong focus on safety protocols for travelling patients.",
    specialties: ["Rhinoplasty", "Liposuction & tummy tuck", "Mommy makeover", "Sleeve gastrectomy & bypass"],
    education: ["MD, Hacettepe University", "MD Plastic Surgery, Hacettepe University", "Fellowship in Bariatric Surgery, Lyon"],
    experience: ["Chief of Aesthetic Surgery, Istanbul International Hospital", "6,000+ surgical procedures", "Speaker, ISAPS regional congress"],
    certificates: ["ISAPS Member", "IFSO Member", "JCI Safety Protocol Lead"],
  },
  {
    slug: "zeynep-arslan",
    name: "Dr. Zeynep Arslan",
    specialty: "Reproductive Medicine & Dermatology",
    category: "IVF",
    years: 15,
    rating: 4.9,
    reviews: 289,
    languages: ["English", "Turkish", "German"],
    photo: doc4,
    hospital: "Nexora Fertility & Skin Institute",
    bio: "Dr. Zeynep Arslan leads our fertility programme and aesthetic dermatology unit, combining individualised stimulation protocols with a calm, information-first approach for international couples.",
    specialties: ["IVF & ICSI", "PGT-A screening", "Fertility preservation", "Laser & injectable dermatology"],
    education: ["MD, Istanbul University", "MD Obstetrics & Gynaecology", "ESHRE Certification in Reproductive Medicine"],
    experience: ["Director, Nexora Fertility Institute", "3,000+ IVF cycles supervised", "Researcher in embryo time-lapse selection"],
    certificates: ["ESHRE Member", "ASRM Member", "Turkish Society of Reproductive Medicine"],
  },
];

export const hospitals = [
  { name: "Istanbul International Hospital", accreditation: "JCI Accredited", city: "Istanbul" },
  { name: "Marmara Specialised Hospital", accreditation: "ISO 9001 & TÜRKAK", city: "Istanbul" },
  { name: "Ankara Medical Park", accreditation: "TÜRKAK Accredited", city: "Izmir" },
  { name: "Antalya Recovery Centre", accreditation: "ISO 9001", city: "Antalya" },
];

export const features = [
  { title: "Local & International Patients", text: "We care for patients living in Turkey and travellers from around the world, with one dedicated coordinator each." },
  { title: "Top Turkish Specialists", text: "Consultants selected on outcomes, volume and patient feedback." },
  { title: "Accredited Hospitals", text: "JCI and TÜRKAK accredited theatres and sterile facilities." },
  { title: "Airport Pickup", text: "Private driver waiting at arrivals for every transfer." },
  { title: "Hotel Accommodation", text: "Vetted 4 and 5 star hotels close to your clinic." },
  { title: "Interpreter Services", text: "English, Turkish, Italian, German and French interpreters." },
  { title: "Affordable Pricing", text: "Fixed, all-inclusive quotes up to 70% below Europe." },
  { title: "Personalised Care", text: "Plans built around your medical history and travel dates." },
];

export const journey = [
  { step: "01", title: "Free Consultation", text: "Share your photos and goals; we reply within 24 hours." },
  { step: "02", title: "Medical Evaluation", text: "Your file is reviewed by the relevant consultant." },
  { step: "03", title: "Treatment Plan", text: "A fixed, itemised quote and timeline are issued." },
  { step: "04", title: "Travel Arrangements", text: "Invitation letter, hotel and transfers organised." },
  { step: "05", title: "Arrival in Turkey", text: "Airport pickup, SIM card and pre-op checks." },
  { step: "06", title: "Treatment", text: "Your procedure in an accredited hospital." },
  { step: "07", title: "Recovery", text: "Monitored recovery with nurse visits and interpreters." },
  { step: "08", title: "Follow-up Care", text: "Twelve months of remote reviews with your doctor." },
];

export const stats = [
  { value: 10000, suffix: "+", label: "Patients treated" },
  { value: 50, suffix: "+", label: "Specialist doctors" },
  { value: 20, suffix: "+", label: "Partner hospitals" },
  { value: 40, suffix: "+", label: "Countries served" },
];

export type Testimonial = {
  name: string;
  country: string;
  treatment: string;
  rating: number;
  text: string;
  initials: string;
  video?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sofia Bianchi",
    country: "Italy",
    treatment: "Hollywood Smile",
    rating: 5,
    initials: "SB",
    video: true,
    text: "From the airport pickup to my final check-up, everything was handled. Dr. Nour showed me a preview of my smile before touching a single tooth — the result is exactly what I saw.",
  },
  {
    name: "James Whitaker",
    country: "United Kingdom",
    treatment: "Hair Transplant",
    rating: 5,
    initials: "JW",
    text: "I compared four countries. Nexora gave me the clearest plan and the only fixed price. Ten months later my hairline looks like it never left.",
  },
  {
    name: "Lena Hoffmann",
    country: "Germany",
    treatment: "Bariatric Surgery",
    rating: 5,
    initials: "LH",
    video: true,
    text: "The dietitian still calls me every month, a year after surgery. I have lost 41 kg and my diabetes medication is gone.",
  },
  {
    name: "Amina Diallo",
    country: "Senegal",
    treatment: "IVF & Fertility",
    rating: 5,
    initials: "AD",
    text: "Dr. Mona explained every step in a way we could understand. Our daughter was born in March. There are no words for that.",
  },
  {
    name: "Tomasz Nowak",
    country: "Poland",
    treatment: "Dental Implants",
    rating: 4,
    initials: "TN",
    text: "Six implants, two visits, half of the Warsaw quote. The interpreter was with me at every appointment.",
  },
  {
    name: "Claire Dubois",
    country: "France",
    treatment: "Plastic Surgery",
    rating: 5,
    initials: "CD",
    text: "Hospital standards were higher than I expected and the nurse coordinator checked on me twice a day.",
  },
];

export const packages = [
  {
    name: "Dental Package",
    price: "$2,450",
    note: "20 E-max veneers • 6 nights",
    features: ["Consultation & 3D scan", "Digital smile design", "5★ hotel with breakfast", "Airport & clinic transfers", "Interpreter throughout"],
    slug: "hollywood-smile",
    featured: false,
  },
  {
    name: "Hair Transplant Package",
    price: "$1,890",
    note: "Up to 4,000 grafts • 4 nights",
    features: ["Sapphire FUE or DHI", "PRP session included", "4★ hotel with breakfast", "All transfers", "12-month follow-up"],
    slug: "hair-transplant",
    featured: true,
  },
  {
    name: "Plastic Surgery Package",
    price: "$3,600",
    note: "Surgery + recovery • 8 nights",
    features: ["Pre-op tests & anaesthesia", "JCI hospital theatre", "Compression garments", "Nurse home visits", "Clearance-to-fly check"],
    slug: "plastic-surgery",
    featured: false,
  },
  {
    name: "Weight Loss Package",
    price: "$4,200",
    note: "Gastric sleeve • 7 nights",
    features: ["Full pre-op work-up", "Laparoscopic surgery", "3 nights hospital + 4 hotel", "Dietitian programme", "12 months of reviews"],
    slug: "bariatric-surgery",
    featured: false,
  },
];

export const beforeAfter = [
  { id: 1, category: "Hair", title: "Sapphire FUE — 3,800 grafts", months: "12 months after", before: baHairBefore, after: baHairAfter },
  { id: 2, category: "Dental", title: "20 E-max veneers", months: "6 days treatment", before: baDentalBefore, after: baDentalAfter },
  { id: 3, category: "Weight Loss", title: "Gastric sleeve — 38 kg lost", months: "14 months after", before: baWeightBefore, after: baWeightAfter },
  { id: 4, category: "Hair", title: "DHI crown restoration", months: "10 months after", before: baHairBefore, after: baHairAfter },
  { id: 5, category: "Plastic Surgery", title: "Tummy tuck & liposuction", months: "6 months after", before: baWeightBefore, after: baWeightAfter },
  { id: 6, category: "Dental", title: "Full-arch implant rehab", months: "4 months after", before: baDentalBefore, after: baDentalAfter },
];

export const beforeAfterCategories = ["All", "Hair", "Dental", "Plastic Surgery", "Weight Loss"] as const;

export const faqCategories = ["Travel", "Treatment", "Accommodation", "Payments", "Recovery", "Doctors"] as const;

export const faqs: { category: (typeof faqCategories)[number]; q: string; a: string }[] = [
  { category: "Travel", q: "Do you help with the Turkish visa?", a: "Yes. We issue a medical invitation letter and guide you through the e-visa or visa-on-arrival process for your nationality." },
  { category: "Travel", q: "Who meets me at the airport?", a: "A Nexora driver holding your name waits at arrivals, and your coordinator is reachable on WhatsApp 24/7." },
  { category: "Travel", q: "Can I bring a companion?", a: "Absolutely. Companion accommodation and transfers are included in most packages at no extra cost." },
  { category: "Treatment", q: "How do I know which treatment I need?", a: "Send photos and your medical history; the relevant consultant reviews the file and replies with recommendations within 24 hours." },
  { category: "Treatment", q: "Are the hospitals accredited?", a: "We work only with JCI, TÜRKAK or ISO 9001 accredited facilities." },
  { category: "Treatment", q: "Is there any risk of hidden costs?", a: "No. Your quote is fixed and itemised before you fly, including hospital, doctor, hotel and transfers." },
  { category: "Accommodation", q: "What hotels do you use?", a: "Vetted 4 and 5 star hotels within 15 minutes of your clinic, with rooms suited to post-operative rest." },
  { category: "Accommodation", q: "Can I extend my stay for tourism?", a: "Yes, and we can arrange Bosphorus, Cappadocia or Antalya trips once your doctor clears you to travel." },
  { category: "Payments", q: "How do I pay?", a: "A small deposit confirms your dates; the balance is paid on arrival by card, cash or bank transfer." },
  { category: "Payments", q: "Do you accept insurance?", a: "We provide full documentation for reimbursement claims, though most international policies do not cover elective treatment abroad." },
  { category: "Recovery", q: "How long should I stay after surgery?", a: "It depends on the procedure — from same-day for skin treatments to 10–14 days for orthopedic surgery." },
  { category: "Recovery", q: "What support do I get back home?", a: "Twelve months of scheduled video reviews with your doctor and direct WhatsApp access to your coordinator." },
  { category: "Doctors", q: "Can I choose my doctor?", a: "Yes. Browse profiles, request a specific consultant and we will match your dates to their schedule." },
  { category: "Doctors", q: "Do doctors speak English?", a: "All our consultants speak English, and interpreters cover Turkish, Italian, German and French." },
];

export const countries = [
  "United Kingdom", "Germany", "Italy", "France", "Spain", "Netherlands", "Poland",
  "United States", "Canada", "Saudi Arabia", "United Arab Emirates", "Kuwait",
  "Nigeria", "Kenya", "Senegal", "Australia", "Other",
];
