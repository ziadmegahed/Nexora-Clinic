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
import Rhinoplasty from "@/assets/treatment-rhinoplasty.jpg";
import Liposuction from "@/assets/treatment-liposuction.jpg";
import TummyTuck from "@/assets/Tummy-Tuck.jpg";
import BeforeRhinoplasty from "@/assets/before-rhinoplasty.jpg";
import AfterRhinoplasty from "@/assets/after-rhinoplasty.jpg";
import BeforeLiposuction from "@/assets/before-liposuction.jpg";
import AfterLiposuction from "@/assets/after-liposuction.jpg";
import beforeDental from "@/assets/before-smile.jpg";
import afterDental from "@/assets/after-smile.jpg";
import beforeLoss from "@/assets/before-loss.jpg";
import afterLoss from "@/assets/after-loss.jpg";

import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import doc4 from "@/assets/doctor-4.jpg";
import doc5 from "@/assets/doctor-5.jpg";
import doc6 from "@/assets/doctor-6.jpg";

import baHairBefore from "@/assets/ba-hair-before.jpg";
import baHairAfter from "@/assets/ba-hair-after.jpg";
import baDentalBefore from "@/assets/ba-dental-before.jpg";
import baDentalAfter from "@/assets/ba-dental-after.jpg";
import baWeightBefore from "@/assets/ba-weight-before.jpg";
import baWeightAfter from "@/assets/ba-weight-after.jpg";

export const brand = {
  name: "Nexora Healthcare",
  tagline: "Health • Beauty • Confidence",
  email: "care@nexoraclinic.com",
  phone: "+90 552 123 4567",
  whatsapp: "+90 552 408 08 41",
  whatsappUrl: "https://wa.me/905524080841",
  address: "Levent Business Towers, Büyükdere Caddesi, Istanbul, Turkey",
  hours: "Mon – Sat, 9:00 – 19:00 (TRT) • Patient line open 24/7",
};

export const treatmentCategories = [
  "Rhinoplasty",
  "Liposuction",
  "Tummy Tuck",
  "Breast Augmentation",
  "Hair Transplant",
  "Gastric Sleeve",
  "Dental Treatments",
] as const;

export type TreatmentCategory = (typeof treatmentCategories)[number];

export type Treatment = {
  slug: string;
  name: string;
  category: TreatmentCategory;
  icon: LucideIcon;
  image: string;
  gallery?: string[];
  short: string;
  overview: string;
  whoFor: string[];
  benefits: string[];
  steps: { title: string; text: string }[];
  operationDuration?: string;
  hospitalStay?: string;
  recoveryPeriod?: string;
  recovery: string;
  risks: string[];
  results: string;
  faqs: { q: string; a: string }[];
  doctorSlugs: string[];
};

export const treatments: Treatment[] = [
  {
    slug: "rhinoplasty",
    name: "Rhinoplasty",
    category: "Rhinoplasty",
    icon: Stethoscope,
    image: Rhinoplasty,
    gallery: [BeforeRhinoplasty, AfterRhinoplasty],
    short: "A refined nose reshaping procedure designed around your facial balance and breathing needs.",
    overview:
      "Rhinoplasty is tailored to improve the shape, proportions and function of the nose while preserving a natural look. The surgeon may make small changes to the bridge, tip, nostrils or septum to create an elegant profile and improve airflow.",
    whoFor: [
      "Patients unhappy with nose size, shape or asymmetry",
      "Individuals with breathing issues caused by a deviated septum",
      "Adults with stable facial growth and realistic expectations",
    ],
    benefits: [
      "Improves facial harmony",
      "Can support better breathing",
      "Natural-looking contour changes",
      "Performed by senior facial surgeons",
    ],
    steps: [
      { title: "Consultation and planning", text: "You review before-and-after references, facial proportions and surgical goals with the surgeon." },
      { title: "Pre-operative assessment", text: "Medical tests and bloodwork are reviewed before surgery, and a final plan is confirmed." },
      { title: "Surgery", text: "The procedure is performed under general anaesthesia with precise reshaping of bone and cartilage." },
      { title: "Recovery and follow-up", text: "The nose is splinted, swelling is monitored, and your recovery plan is reviewed before you fly home." },
    ],
    operationDuration: "1.5 to 3 hours",
    hospitalStay: "1 night",
    recoveryPeriod: "2 to 6 weeks",
    recovery: "Most swelling settles within the first few weeks, while final refinement continues over several months.",
    risks: ["Swelling and bruising", "Temporary numbness or congestion", "Scar tissue formation in rare cases", "Need for minor revision in selected cases"],
    results: "A more balanced and natural-looking nose with improved function and a subtle, refined profile.",
    faqs: [
      { q: "Will the result look natural?", a: "Yes. We focus on proportional changes that suit your face rather than creating an overdone look." },
      { q: "When can I travel home?", a: "Most patients are cleared to fly once their surgeon confirms swelling and healing are progressing normally." },
    ],
    doctorSlugs: ["mehmet-kaya"],
  },
  {
    slug: "liposuction",
    name: "Liposuction",
    category: "Liposuction",
    icon: Weight,
    image: Liposuction,
    gallery: [BeforeLiposuction, AfterLiposuction, beforeLoss, afterLoss],
    short: "Body contouring to remove stubborn fat and improve definition in targeted areas.",
    overview:
      "Liposuction removes localised fat deposits that do not respond to exercise or diet. It is commonly used on the abdomen, waist, flanks, thighs and arms to sculpt a more balanced silhouette.",
    whoFor: [
      "Patients near their target weight with stubborn fat pockets",
      "Adults wanting body contouring without a full body lift",
      "Good general health candidates with realistic expectations",
    ],
    benefits: [
      "Targets resistant fat areas",
      "Improves body contour and definition",
      "Quick recovery compared with larger body procedures",
      "Helps with more balanced proportions",
    ],
    steps: [
      { title: "Assessment and marking", text: "The surgeon maps the fatty zones and confirms the treatment plan with you." },
      { title: "Anaesthesia and infiltration", text: "Local anaesthesia or general anaesthesia is used depending on the treatment area and volume." },
      { title: "Fat removal", text: "Thin cannulas are used to remove excess fat while preserving natural contouring." },
      { title: "Compression and monitoring", text: "Compression garments are fitted to support healing and reduce swelling after surgery." },
    ],
    operationDuration: "1 to 3 hours",
    hospitalStay: "Same day or 1 night",
    recoveryPeriod: "2 to 4 weeks",
    recovery: "Most patients return to regular routines within a couple of weeks, with swelling gradually reducing over the following months.",
    risks: ["Bruising and swelling", "Temporary skin irregularity", "Fluid collection in rare cases", "Need for additional contouring in a small number of patients"],
    results: "A smoother and more sculpted silhouette with improved body proportions and better confidence in clothing.",
    faqs: [
      { q: "Is liposuction a weight-loss procedure?", a: "No. It is a body contouring treatment intended for stubborn pockets of fat and improved shape rather than significant weight reduction." },
      { q: "Can I combine it with other procedures?", a: "Yes. Many patients combine liposuction with tummy tuck, breast procedures or body sculpting in the same surgical plan." },
    ],
    doctorSlugs: ["mehmet-kaya"],
  },
  {
    slug: "tummy-tuck",
    name: "Tummy Tuck",
    category: "Tummy Tuck",
    icon: Bone,
    image: TummyTuck,
    short: "Abdominoplasty that tightens the abdominal wall and removes excess skin for a firmer contour.",
    overview:
      "A tummy tuck, or abdominoplasty, removes excess skin and tightens weakened abdominal muscles to create a flatter, firmer midsection. It is often chosen after weight changes, pregnancy or significant abdominal stretching.",
    whoFor: [
      "Patients with loose abdominal skin after weight loss or pregnancy",
      "Adults with weakened abdominal muscles",
      "Individuals looking for a more toned waistline and firmer torso",
    ],
    benefits: [
      "Flatter and firmer abdomen",
      "Improves waistline definition",
      "Removes excess skin and stretch marks in the lower abdomen",
      "Can be combined with liposuction for contouring",
    ],
    steps: [
      { title: "Pre-operative evaluation", text: "The surgeon reviews your abdominal anatomy, skin elasticity and the best incision pattern for your body." },
      { title: "Surgery", text: "Excess skin is removed, the abdominal wall is tightened and the area is reshaped under general anaesthesia." },
      { title: "Drain management", text: "Small drains may be placed temporarily to help reduce fluid buildup during recovery." },
      { title: "Recovery check", text: "Compression garments and post-op guidance are provided before discharge and follow-up review." },
    ],
    operationDuration: "2 to 4 hours",
    hospitalStay: "1 to 2 nights",
    recoveryPeriod: "4 to 8 weeks",
    recovery: "Initial healing takes a few weeks, with a gradual return to normal activity and a final silhouette emerging over time.",
    risks: ["Swelling and bruising", "Temporary numbness", "Fluid collection or delayed wound healing", "Scar maturation over time"],
    results: "A firmer, flatter abdomen with a more sculpted and proportionate waistline.",
    faqs: [
      { q: "Will there be a visible scar?", a: "Yes, there is usually a low horizontal scar, but it is positioned to be as discreet as possible and typically fades over time." },
      { q: "Can it be combined with liposuction?", a: "Absolutely. Many patients combine abdominoplasty with liposuction for a more defined contour." },
    ],
    doctorSlugs: ["mehmet-kaya"],
  },
  {
    slug: "breast-augmentation",
    name: "Breast Augmentation",
    category: "Breast Augmentation",
    icon: Sparkles,
    image: plastic,
    short: "Implant-based breast enhancement to add volume and improve symmetry and shape.",
    overview:
      "Breast augmentation enhances breast size, balance and projection using silicone or saline implants selected to match your anatomy and aesthetic goals. The procedure is tailored to create a natural, proportionate result with a careful incision and implant plan.",
    whoFor: [
      "Patients seeking fuller, more balanced breasts",
      "Women with breast volume loss after pregnancy or weight changes",
      "Candidates in good health with realistic aesthetic goals",
    ],
    benefits: [
      "Adds volume and fullness",
      "Improves breast symmetry",
      "Custom implant selection for natural proportions",
      "Can be tailored to your preferred silhouette",
    ],
    steps: [
      { title: "Consultation and implant choice", text: "Your surgeon reviews implant type, size and placement based on your anatomy and visual goals." },
      { title: "Surgery", text: "An incision is made in a discreet location and the implant is inserted and positioned precisely." },
      { title: "Recovery support", text: "Dressings, support garments and post-op instructions are provided before discharge." },
      { title: "Follow-up", text: "You are reviewed after surgery to check healing, swelling and overall progress." },
    ],
    operationDuration: "1.5 to 3 hours",
    hospitalStay: "1 night",
    recoveryPeriod: "4 to 6 weeks",
    recovery: "Patients usually recover well within a few weeks and can gradually resume normal activities as swelling decreases.",
    risks: ["Temporary swelling and bruising", "Capsular contracture in some cases", "Implant-related changes over time", "Need for revision in selected cases"],
    results: "A fuller, more balanced breast profile with improved silhouette and renewed confidence.",
    faqs: [
      { q: "How do I choose implant size?", a: "Your surgeon will help you select a size that suits your chest width, body proportions and desired look while keeping the result natural." },
      { q: "Will the scar be noticeable?", a: "Incisions are placed strategically to minimise visibility, and scars continue to fade over time." },
    ],
    doctorSlugs: ["mehmet-kaya"],
  },
  {
    slug: "hair-transplant",
    name: "Hair Transplant",
    category: "Hair Transplant",
    icon: Scissors,
    image: hair,
    short: "Sapphire FUE and DHI techniques for natural-looking hair restoration.",
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
    operationDuration: "4 to 8 hours",
    hospitalStay: "Same day",
    recoveryPeriod: "7 to 14 days",
    recovery: "Return to daily life quickly. Crusts fall within the first days, and new growth appears as the scalp heals.",
    risks: ["Temporary shock loss", "Swelling after the procedure", "Small risk of folliculitis", "Rare uneven density needing a touch-up"],
    results: "Excellent graft survival with visible density as the transplanted follicles mature.",
    faqs: [
      { q: "Is it painful?", a: "The procedure is done under local anaesthesia; most patients describe mild pressure only." },
      { q: "How many grafts will I need?", a: "Typically 2,000–4,000. Send us photos and we return an exact estimate after reviewing your case." },
    ],
    doctorSlugs: ["emre-yilmaz"],
  },
  {
    slug: "gastric-sleeve",
    name: "Gastric Sleeve",
    category: "Gastric Sleeve",
    icon: HeartPulse,
    image: bariatric,
    short: "A minimally invasive weight-loss surgery that reduces stomach size and helps control appetite.",
    overview:
      "Gastric sleeve surgery reduces the stomach to a smaller tube-shaped pouch, limiting food intake and improving satiety. It is a well-established bariatric option that supports meaningful and sustained weight reduction when paired with long-term lifestyle changes.",
    whoFor: [
      "Patients with BMI over 35, or over 30 with obesity-related conditions",
      "Individuals who have not achieved lasting results with diet and exercise",
      "Adults committed to follow-up care and nutrition support",
    ],
    benefits: [
      "Significant and sustained weight loss",
      "Improves obesity-related health conditions",
      "Minimally invasive laparoscopic approach",
      "Structured nutrition and follow-up programme",
    ],
    steps: [
      { title: "Medical evaluation", text: "Blood tests, endoscopy and anaesthesia review are completed before surgery." },
      { title: "Procedure", text: "A large portion of the stomach is removed laparoscopically to reduce appetite and intake." },
      { title: "Hospital recovery", text: "Patients begin mobilisation early and are monitored for the first 24 to 48 hours." },
      { title: "Lifestyle plan", text: "Dietitian support and ongoing reviews guide meal progression and long-term success." },
    ],
    operationDuration: "1 to 2 hours",
    hospitalStay: "2 to 3 nights",
    recoveryPeriod: "3 to 6 weeks",
    recovery: "Most patients return to moderate activity within a few weeks and continue improving with nutrition and behavioural support.",
    risks: ["Leak or bleeding (rare)", "Nutritional deficiencies without supplementation", "Acid reflux in some cases", "Need for long-term follow-up"],
    results: "A significant reduction in excess weight with improved metabolic health and better quality of life.",
    faqs: [
      { q: "How much weight can I expect to lose?", a: "Many patients lose a substantial amount of excess body weight over the first 12 to 18 months, depending on commitment to lifestyle changes." },
      { q: "Do I need lifelong follow-up?", a: "Yes. Ongoing nutrition, monitoring and medical reviews are important for long-term safety and weight management." },
    ],
    doctorSlugs: ["mehmet-kaya"],
  },
  {
    slug: "dental-treatments",
    name: "Dental Treatments",
    category: "Dental Treatments",
    icon: Smile,
    image: dental,
    gallery: [beforeDental, afterDental],
    short: "Comprehensive dental care including implants, smile design and restorative treatments.",
    overview:
      "Dental treatments at Nexora Clinic combine restorative dentistry, cosmetic smile design and implant planning to improve function, aesthetics and confidence. Every plan is customised to your bite, tooth structure and lifestyle.",
    whoFor: [
      "Patients with missing, damaged or discoloured teeth",
      "Individuals looking for cosmetic improvements or bite correction",
      "Anyone seeking long-term dental restoration in a single treatment journey",
    ],
    benefits: [
      "Improves chewing comfort and function",
      "Enhances smile aesthetics",
      "Uses digital planning for precision",
      "Can often be completed in one trip",
    ],
    steps: [
      { title: "Clinical assessment", text: "The dental team reviews your oral health, X-rays and treatment goals in detail." },
      { title: "Digital planning", text: "Your procedure is mapped digitally to improve outcome predictability and fit." },
      { title: "Treatment", text: "Implants, veneers or restorations are placed according to your care plan." },
      { title: "Aftercare", text: "Your dentist provides hygiene guidance and a follow-up plan to protect long-term success." },
    ],
    operationDuration: "1 to 3 hours depending on the treatment",
    hospitalStay: "Same day or 1 night",
    recoveryPeriod: "3 to 10 days",
    recovery: "Most patients resume normal eating and speaking quickly, with a short adjustment period after restorative treatment.",
    risks: ["Temporary sensitivity", "Swelling or bruising", "Rare implant complications", "Need for small refinements in some cases"],
    results: "A healthier, more comfortable bite and a brighter, more confident smile with long-lasting restoration.",
    faqs: [
      { q: "Can I have treatment in one trip?", a: "Many cosmetic and restorative treatments can be completed during a single visit, while more complex implant work may require a healing period." },
      { q: "Are the results natural-looking?", a: "Yes. Digital planning and shade matching ensure the final result complements your facial features and bite." },
    ],
    doctorSlugs: ["elif-demir"],
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
    slug: "erdal-sakalli",
    name: "Assoc. Prof. MD. Erdal Sakalli",
    specialty: "Ear, Nose, and Throat (ENT)",
    category: "Rhinoplasty",
    years: 17,
    rating: 4.9,
    reviews: 412,
    languages: ["English", "Turkish", "Arabic"],
    photo: doc1,
    hospital: "Medical Park Florya",
    bio: "Assoc. Prof. MD. Erdal Sakalli focuses on functional ENT care, sinus treatment, and nasal surgery with an emphasis on natural airway balance and patient comfort.",
    specialties: ["ENT", "Nasal surgery", "Sinus treatment", "Airway balancing"],
    education: ["MD, Ege University", "ENT Residency, Istanbul University", "Advanced Rhinology Course, Berlin"],
    experience: ["Consultant ENT Specialist, Medical Park Florya", "3,000+ ENT cases", "International patient care coordinator"],
    certificates: ["Turkish ENT Association", "European Rhinology Society", "Medical Park Quality Lead"],
  },
  {
    slug: "yakup-cil",
    name: "Prof. MD. Yakup Çil",
    specialty: "Medical Aesthetics",
    category: "Rhinoplasty",
    years: 22,
    rating: 5.0,
    reviews: 498,
    languages: ["English", "Turkish", "Arabic"],
    photo: doc2,
    hospital: "Medical Park Florya",
    bio: "Prof. MD. Yakup Çil brings a refined aesthetic approach to facial rejuvenation and minimally invasive cosmetic treatments designed for natural, balanced results.",
    specialties: ["Medical aesthetics", "Facial rejuvenation", "Injectables", "Skin balancing"],
    education: ["MD, İstanbul University", "Aesthetic Medicine Fellowship, London", "Advanced Facial Rejuvenation Training, Paris"],
    experience: ["Senior Aesthetic Physician, Medical Park Florya", "10,000+ aesthetic consultations", "Global aesthetic patient care specialist"],
    certificates: ["Turkish Aesthetic Society", "International Aesthetic Medicine Council", "Laser Safety Certified"],
  },
  {
    slug: "ali-can-gunenc",
    name: "OP. Dr. Ali Can Gunenc",
    specialty: "Plastic Surgery",
    category: "Liposuction",
    years: 20,
    rating: 4.9,
    reviews: 385,
    languages: ["English", "Turkish"],
    photo: doc3,
    hospital: "Medical Park Florya",
    bio: "OP. Dr. Ali Can Gunenc performs body contouring and aesthetic plastic surgery with a focus on proportion, natural harmony and refined surgical detail.",
    specialties: ["Plastic surgery", "Body contouring", "Facial balancing", "Aesthetic procedures"],
    education: ["MD, Hacettepe University", "Plastic Surgery Residency, Istanbul University", "Advanced Aesthetic Surgery Fellowship, Munich"],
    experience: ["Consultant Plastic Surgeon, Medical Park Florya", "4,500+ aesthetic procedures", "Aesthetic surgery mentor"],
    certificates: ["ISAPS Member", "Turkish Society of Plastic Surgery", "Aesthetic Surgery Safety Training"],
  },
  {
    slug: "hakan-seyit",
    name: "Prof. Dr. Hakan Seyit",
    specialty: "General Surgery",
    category: "Gastric Sleeve",
    years: 19,
    rating: 4.8,
    reviews: 360,
    languages: ["English", "Turkish"],
    photo: doc4,
    hospital: "İstinye Üniversitesi Medical Park Gaziosmanpaşa",
    bio: "Prof. Dr. Hakan Seyit is known for precise general surgical planning and patient-first care, with a strong emphasis on safety and sustainable treatment outcomes.",
    specialties: ["General surgery", "Weight-loss surgery", "Abdominal treatment", "Patient safety planning"],
    education: ["MD, Marmara University", "General Surgery Residency, Ankara University", "Advanced Surgical Fellowship, Heidelberg"],
    experience: ["Consultant General Surgeon, Medical Park Florya", "2,700+ surgical cases", "Surgical safety committee lead"],
    certificates: ["Turkish Surgical Association", "Laparoscopic Surgery Certified", "JCI Safety Certified"],
  },
  {
    slug: "halil-alis",
    name: "Prof. MD. Halil Aliş",
    specialty: "Surgical Oncology",
    category: "Gastric Sleeve",
    years: 18,
    rating: 4.9,
    reviews: 420,
    languages: ["English", "Turkish", "German"],
    photo: doc5,
    hospital: "Medical Park Florya",
    bio: "Prof. MD. Halil Aliş brings a meticulous, precision-focused approach to surgery and oncologic care, combining advanced operative technique with compassionate patient guidance.",
    specialties: ["Surgical oncology", "Tumour surgery", "Advanced care planning", "Complex procedures"],
    education: ["MD, İstanbul University", "Oncology Surgery Residency, Cerrahpaşa", "Advanced Oncology Fellowship, Zurich"],
    experience: ["Senior Oncology Surgeon, Medical Park Florya", "2,100+ oncology procedures", "Member of tumour board committees"],
    certificates: ["Turkish Society of Surgical Oncology", "European Oncology Society", "Advanced Surgical Oncology Training"],
  },
  {
    slug: "akin-zengin",
    name: "Dr. Öğr. Üyesi Akın Zengin",
    specialty: "Ear, Nose, and Throat (ENT)",
    category: "Rhinoplasty",
    years: 15,
    rating: 4.9,
    reviews: 319,
    languages: ["English", "Turkish"],
    photo: doc6,
    hospital: "İstinye Üniversitesi Medical Park Gaziosmanpaşa",
    bio: "Dr. Öğr. Üyesi Akın Zengin treats patients with ENT and nasal health concerns using modern diagnostics and patient-centred care for long-term comfort and function.",
    specialties: ["ENT", "Nasal health", "Rhinology", "Functional treatment"],
    education: ["MD, Gazi University", "ENT Residency, Marmara University", "Advanced Rhinology Certificate, Istanbul"],
    experience: ["ENT Consultant, Medical Park Florya", "1,800+ ENT cases", "Functional ENT specialist"],
    certificates: ["Turkish ENT Association", "Rhinology Training Certificate", "Clinical ENT Quality Lead"],
  },
];

export const hospitals = [];

export const features = [
  { title: "A dedicated point of contact", text: "Get help organising the next steps of your treatment journey." },
  { title: "An individual plan", text: "Your medical assessment guides the arrangements and quotation." },
  { title: "Clear package details", text: "Understand what is included and what is quoted separately before booking." },
  { title: "Travel and language support", text: "Hotel, transfer and interpreter arrangements are specified in your package." },
];

export const journey = [
  { step: "01", title: "Tell us your goals", text: "Share your treatment interest and preferred timing." },
  { step: "02", title: "Medical review", text: "We coordinate review of the relevant information with the treating specialist." },
  { step: "03", title: "Receive your plan", text: "Review proposed arrangements, inclusions and your quotation." },
  { step: "04", title: "Confirm your visit", text: "Once the plan is agreed, complete the booking requirements and share your travel details." },
  { step: "05", title: "Consultation and treatment", text: "In-person assessment and necessary checks precede treatment; the doctor confirms the final plan." },
  { step: "06", title: "Recovery and follow-up", text: "Follow the treating team's instructions, with coordination support as specified in your plan." },
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
    text: "I compared four countries. Nexora gave me the clearest plan and my hairline looks like it never left.",
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
    price: "",
    note: "20 E-max veneers • Premium recovery support",
    features: ["Consultation & 3D scan", "Digital smile design", "Hotel with breakfast", "Airport & clinic transfers", "Interpreter throughout"],
    slug: "hollywood-smile",
    featured: false,
  },
  {
    name: "Hair Transplant Package",
    price: "",
    note: "Up to 4,000 grafts • Rest and support included",
    features: ["Sapphire FUE or DHI", "PRP session included", "Hotel with breakfast", "All transfers", "Follow-up support"],
    slug: "hair-transplant",
    featured: true,
  },
  {
    name: "Plastic Surgery Package",
    price: "",
    note: "Surgery + recovery support",
    features: ["Pre-op tests & anaesthesia", "JCI hospital theatre", "Compression garments", "Nurse home visits", "Clearance-to-fly check"],
    slug: "plastic-surgery",
    featured: false,
  },
  {
    name: "Weight Loss Package",
    price: "",
    note: "Gastric sleeve • Medical aftercare included",
    features: ["Full pre-op work-up", "Laparoscopic surgery", "Hospital and hotel arrangements", "Dietitian programme", "Ongoing review support"],
    slug: "bariatric-surgery",
    featured: false,
  },
];

export const beforeAfter = [
  { id: 1, category: "Dental", title: "Hollywood Smile", before: beforeDental, after: afterDental },
  { id: 2, category: "Plastic Surgery", title: "Rhinoplasty refinement", before: BeforeRhinoplasty, after: AfterRhinoplasty },
  { id: 3, category: "Plastic Surgery", title: "Liposuction contouring", before: BeforeLiposuction, after: AfterLiposuction },
  { id: 4, category: "Plastic Surgery", title: "A visible body-contouring transformation", before: beforeLoss, after: afterLoss },
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
