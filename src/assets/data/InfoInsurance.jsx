import family from '../../assets/family.png';
import car from '../../assets/car.png';
import travel from '../../assets/travel.svg';
import home from '../../assets/home.png';
import medical from '../../assets/medical.jpg';
import cattle from '../../assets/cattle.png';
import office from '../../assets/office.png';
import bike from '../../assets/bike.png';
import term from '../../assets/term.png' 
import accident from '../../assets/accident.png'
import gadget from '../../assets/gadget.png'
import critical from '../../assets/critical.png'
import carinsu from '../../assets/carinsu.jpg'
import travelinsu from '../../assets/travelinsu.jpg'
import familyplan from '../../assets/familyplan.jpg'
import homei from '../../assets/homei.jpg'
import healthi from '../../assets/healthi.jpg'
import livestock from '../../assets/livestock.jpg'
import bi from '../../assets/bi.jpg'
import bikei from '../../assets/bikei.jpg'
import termi from '../../assets/termi.jpg'
import pi from '../../assets/pi.jpg'
import illness from '../../assets/illness.jpg'
import mi from '../../assets/mobi.jpg'
const InfoInsurance = [
  {
    id: 1,
    name: "	Family Health Plan",
    image: family.png,
    simage:familyplan.jpg,
    description: "Covers all your family members under a single health insurance plan.",
    coverage: [
      "Hospitalization expenses",
      "Pre & post hospitalization",
      "Ambulance charges",
      "Daycare procedures"
    ],
    benefits: [
      "Cashless treatment at network hospitals",
      "No-claim bonus on premium",
      "Free annual health check-ups",
      "Tax benefits under section 80D"
    ],
    eligibility: "Available for individuals aged 18-65. Family floater covers spouse, kids, and parents.",
    claimProcess: "Inform insurance provider, submit required documents and bills, get approval, and claim settlement.",
    premiumInfo: "Starts from ₹6,000/year for a family of 3.",
    whyBuy: "Protects your entire family under one affordable policy.",
    idealFor: "Families with children and elderly parents.",
    exclusions: [
      "Cosmetic treatments",
      "Pre-existing illnesses (within waiting period)"
    ]
  },
  {
    id: 2,
    name: "Car Insurance (✓)",
    image: car.png,
    simage:carinsu.jpg,
    description: "Protects your car from damages, theft, and third-party liabilities.",
    coverage: [
      "Own damage cover",
      "Third-party liability",
      "Theft protection",
      "Natural calamities"
    ],
    benefits: [
      "Cashless repairs at network garages",
      "24x7 roadside assistance",
      "Zero depreciation add-on",
      "No-claim bonus discount"
    ],
    eligibility: "Owner of the car must be above 18 and have a valid driving license.",
    claimProcess: "Report accident, file FIR (if needed), submit documents, survey by insurer, and get repair reimbursement.",
    premiumInfo: "Starts from ₹2,500/year based on car model and city.",
    whyBuy: "Mandatory by law and protects against huge repair bills.",
    idealFor: "All private and commercial car owners.",
    exclusions: [
      "Drunk driving damages",
      "Driving without a valid license"
    ]
  },
  {
    id: 3,
    name: "Travel Protection Plan",
    image: travel.svg,
    simage:travelinsu.jpg,

    description: "Ensures financial protection during domestic or international trips.",
    coverage: [
      "Trip cancellation",
      "Medical emergencies abroad",
      "Loss of passport/luggage",
      "Flight delays"
    ],
    benefits: [
      "Global cashless hospitalization",
      "Emergency evacuation",
      "Coverage for COVID-19",
      "Hijack distress allowance"
    ],
    eligibility: "Available for travelers aged 6 months to 70 years. Senior citizen plans also available.",
    claimProcess: "Call international helpline, submit proof, fill claim form, and get reimbursement.",
    premiumInfo: "Starts from ₹300 for 5-day international trip.",
    whyBuy: "Gives peace of mind and safety during unexpected travel emergencies.",
    idealFor: "Frequent flyers, tourists, and students going abroad.",
    exclusions: [
      "Adventure sports injuries",
      "Pre-existing medical conditions"
    ]
  },
  {
    id: 4,
    name: "Home & Property Insurance",
    image: home.png,
    simage:homei.jpg,

    description: "Protects your home and belongings from natural or man-made damages.",
    coverage: [
      "Fire & explosion",
      "Earthquake & floods",
      "Burglary & theft",
      "Electrical breakdown"
    ],
    benefits: [
      "Coverage for structure and contents",
      "Add-on cover for jewelry and appliances",
      "Affordable premium for long term",
      "Fast claim processing"
    ],
    eligibility: "Homeowner or tenant can apply. Property must be located in India.",
    claimProcess: "Inform insurer, provide damage photos, inspection, and receive claim.",
    premiumInfo: "Starts from ₹1,500/year depending on home value.",
    whyBuy: "Secures your most valuable asset — your home.",
    idealFor: "Homeowners, landlords, and tenants.",
    exclusions: [
      "Damage due to war or terrorism",
      "Normal wear and tear"
    ]
  },
  {
    id: 5,
    name: "Individual Health Insurance",
    image: medical.jpg,
    simage:healthi.jpg,
    description: "Provides financial protection for medical emergencies and hospital expenses.",
    coverage: [
      "In-patient hospitalization",
      "Doctor consultations",
      "Surgery and ICU",
      "Medicines and tests"
    ],
    benefits: [
      "Cashless treatment in hospitals",
      "Tax benefits under section 80D",
      "Coverage for critical illnesses",
      "Pre & post hospitalization cover"
    ],
    eligibility: "Individuals aged 18-65. Family coverage available.",
    claimProcess: "Get treatment at network hospital or reimburse bills post-treatment.",
    premiumInfo: "Starts from ₹4,000/year per person.",
    whyBuy: "Covers high medical costs that can otherwise drain your savings.",
    idealFor: "Individuals, working professionals, and senior citizens.",
    exclusions: [
      "Dental and vision expenses",
      "Self-inflicted injuries"
    ]
  },
  {
    id: 6,
    name: "Livestock Insurance",
    simage:livestock.jpg,
    image: cattle.png,
    description: "Secures livestock owners from financial loss due to death or disability of cattle.",
    coverage: [
      "Accidental death",
      "Diseases",
      "Permanent disability",
      "Natural calamities"
    ],
    benefits: [
      "Low premium rates",
      "Coverage for multiple cattle types",
      "Government subsidy available",
      "Easy documentation"
    ],
    eligibility: "Available for registered farmers and cattle owners.",
    claimProcess: "Report loss, provide vet certificate & ear tag, and receive claim after inspection.",
    premiumInfo: "Starts from ₹100/year per cattle.",
    whyBuy: "Protects rural income from sudden cattle loss.",
    idealFor: "Farmers, dairy business owners, rural livestock keepers.",
    exclusions: [
      "Unregistered cattle",
      "Deaths due to negligence"
    ]
  },
  {
    id: 7,
    name: "Business Insurance	",
    image: office.png,
    simage:bi.jpg,
    description: "Covers offices and business premises from losses due to fire, theft, or disasters.",
    coverage: [
      "Building and furniture damage",
      "Fire and flood protection",
      "Theft and burglary",
      "Equipment and electronics"
    ],
    benefits: [
      "Business interruption cover",
      "Employee safety add-ons",
      "Public liability cover",
      "Affordable group plans"
    ],
    eligibility: "Small to large business owners can apply. Office must be registered.",
    claimProcess: "Notify insurer, provide documentation, inspection, and get payout.",
    premiumInfo: "Starts from ₹5,000/year depending on office size.",
    whyBuy: "Keeps your business protected from unexpected losses.",
    idealFor: "Startup founders, SME owners, shopkeepers.",
    exclusions: [
      "Illegal business operations",
      "Loss due to poor maintenance"
    ]
  },
  {
    id: 8,
    name: "	Two-Wheeler Insurance",
    image: bike.png,
    simage:bikei.jpg,
    description: "Covers your two-wheeler from accidents, theft, and third-party damages.",
    coverage: [
      "Own damage protection",
      "Third-party liability",
      "Fire and theft",
      "Natural disasters"
    ],
    benefits: [
      "Instant online renewal",
      "Cashless garage service",
      "No-claim bonus",
      "Add-ons like engine protection"
    ],
    eligibility: "Bike owner with valid RC and driving license.",
    claimProcess: "Report accident, provide photos and documents, and claim approval post-inspection.",
    premiumInfo: "Starts from ₹800/year.",
    whyBuy: "Legally required and ensures peace of mind on the road.",
    idealFor: "Bike commuters, delivery riders, students.",
    exclusions: [
      "Racing or stunts damage",
      "Riding under the influence"
    ]
  },  
  {
    id: 9,
    name: "Term  Insurance",
    image: term.png,
    simage:termi.jpg,
    description: "Provides financial protection to your family in case of the policyholder’s untimely demise.",
    coverage: [
      "Death benefit payout",
      "Terminal illness cover",
      "Accidental death cover",
      "Flexible policy term"
    ],
    benefits: [
      "High coverage at low premiums",
      "Tax benefits under section 80C & 10(10D)",
      "Multiple payout options (lump sum, monthly)",
      "Option to add riders for critical illness"
    ],
    eligibility: "Individuals aged 18 to 65 years. Medical tests may be required based on age and sum assured.",
    claimProcess: "Nominee submits death certificate and claim form. Insurer verifies documents and settles the claim.",
    premiumInfo: "Starts from ₹500/month for ₹50 lakh sum assured.",
    whyBuy: "Ensures your family’s future is secure, even if you’re not around.",
    idealFor: "Earning individuals with financial dependents.",
    exclusions: [
      "Suicide in the first year",
      "Death due to risky hobbies (unless declared)"
    ]
  },
  {

    "name": "Personal Accident Insurance",
    "image": "accident.png",
    "simage":"pi.jpg",

    "description": "Provides financial protection against accidental death, disability, and income loss.",
    "coverage": [
      "Accidental death",
      "Permanent total disability",
      "Permanent partial disability",
      "Temporary total disability"
    ],
    "benefits": [
      "Lump sum payout for death or disability",
      "Income replacement during recovery",
      "Ambulance and hospitalization cover",
      "Tax benefits under Section 80D"
    ],
    "eligibility": "Individuals aged 18–70 years. No medical tests required for basic coverage.",
    "claimProcess": "Report the incident, submit necessary documents (e.g., FIR, medical reports), undergo insurer assessment, and receive claim settlement.",
    "premiumInfo": "Starts from ₹1,200/year for ₹10 lakh coverage.",
    "whyBuy": "Offers essential financial support in case of unforeseen accidents.",
    "idealFor": "Frequent travelers, field workers, and individuals in high-risk professions.",
    "exclusions": [
      "Self-inflicted injuries",
      "Accidents under the influence of alcohol or drugs",
      "Participation in hazardous activities (unless specified)"
    ]
  },
  {
    "name": "Critical Illness Insurance",
    "image":" critical.jpg",
    "simage":"illness.jpg",

    "description": "Offers a lump sum payout upon diagnosis of specified critical illnesses.",
    "coverage": [ 
      "Cancer",
      "Heart attack",
      "Stroke",
      "Kidney failure",
      "Major organ transplant"
    ],
    "benefits": [
      "One-time lump sum payment upon diagnosis",
      "Covers medical and non-medical expenses",
      "Can be a standalone policy or added as a rider",
      "Tax benefits under Section 80D"
    ],
    "eligibility": "Individuals aged 18–65 years. Medical screening may be required based on sum assured.",
    "claimProcess": "Submit diagnosis report and claim form; insurer verifies and disburses lump sum amount.",
    "premiumInfo": "Starts from ₹2,500/year for ₹5 lakh coverage.",
    "whyBuy": "Provides financial stability during treatment of serious illnesses.",
    "idealFor": "Individuals with family history of critical illnesses or sole earners.",
    "exclusions": [
      "Pre-existing conditions (within waiting period)",
      "Illnesses diagnosed within initial 90 days of policy",
      "Non-disclosure of medical history"
    ]
  },
  {
    
    "name": "Mobile & Gadget Insurance",
    "simage":"mi.jpg",

    "image": "gadget.png",
    "description": "Protects electronic devices against theft, accidental damage, and technical malfunctions.",
    "coverage": [
      "Theft or loss",
      "Accidental damage (including screen damage)",
      "Liquid damage",
      "Fire and electrical damage"
    ],
    "benefits": [
      "100% coverage for repair or replacement costs",
      "Doorstep pickup and delivery for repairs",
      "Quick and hassle-free claim process",
      "Affordable premiums with value-added services"
    ],
    "eligibility": "Owners of new or used devices purchased within the last 30 days.",
    "claimProcess": "Report the incident, submit required documents (e.g., invoice, FIR for theft), and receive repair or replacement.",
    "premiumInfo": "Starts from ₹649/year, varying based on device value and coverage.",
    "whyBuy": "Safeguards expensive gadgets from unforeseen damages and losses.",
    "idealFor": "Students, professionals, and businesses relying on electronic devices.",
    "exclusions": [
      "Loss without valid proof (e.g., FIR for theft)",
      "Intentional damage or negligence",
      "Unauthorized repairs or modifications"
    ]
  }
];

export default InfoInsurance;
