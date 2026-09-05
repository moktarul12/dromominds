export const assessmentCategories = [
  {
    id: "governance",
    title: "Governance & Quality System",
    weight: 0.15,
    questions: [
      { id: "g1", text: "Do you maintain an approved Validation Master Plan?" },
      { id: "g2", text: "Is CSV integrated into your Quality Management System?" },
      { id: "g3", text: "Are validation responsibilities clearly defined?" },
      { id: "g4", text: "Is a formal change control process implemented?" },
      { id: "g5", text: "Are validation SOPs reviewed periodically?" }
    ]
  },
  {
    id: "risk",
    title: "Risk Management",
    weight: 0.15,
    questions: [
      { id: "r1", text: "Is GAMP 5 methodology applied?" },
      { id: "r2", text: "Are systems risk classified?" },
      { id: "r3", text: "Is risk assessment documented?" },
      { id: "r4", text: "Are testing efforts based on risk?" },
      { id: "r5", text: "Is ICH Q9 methodology used?" }
    ]
  },
  {
    id: "data-integrity",
    title: "Data Integrity",
    weight: 0.20,
    questions: [
      { id: "d1", text: "Are ALCOA+ principles implemented?" },
      { id: "d2", text: "Are audit trails enabled?" },
      { id: "d3", text: "Are audit trails reviewed periodically?" },
      { id: "d4", text: "Are user access controls enforced?" },
      { id: "d5", text: "Is backup and recovery validated?" }
    ]
  },
  {
    id: "validation",
    title: "System Validation",
    weight: 0.20,
    questions: [
      { id: "v1", text: "Are URS documents maintained?" },
      { id: "v2", text: "Are Functional Specifications available?" },
      { id: "v3", text: "Are IQ protocols executed?" },
      { id: "v4", text: "Are OQ protocols executed?" },
      { id: "v5", text: "Are PQ protocols executed?" }
    ]
  },
  {
    id: "regulatory",
    title: "Regulatory Compliance",
    weight: 0.10,
    questions: [
      { id: "c1", text: "Is FDA 21 CFR Part 11 addressed?" },
      { id: "c2", text: "Is EU Annex 11 addressed?" },
      { id: "c3", text: "Are electronic signatures validated?" },
      { id: "c4", text: "Are validation records inspection-ready?" },
      { id: "c5", text: "Are audit findings and CSV deficiencies systematically resolved?" } // wait, this question should probably be inverted for score, but let's assume 'Fully addressed/Implemented' means no deficiencies or they handle it well. The prompt says 'Fully Implemented = 5, Partially = 3...'. Let's rephrase it to "Are audit findings and CSV deficiencies systematically addressed?" 
    ]
  },
  {
    id: "vendor",
    title: "Vendor & Supplier Management",
    weight: 0.10,
    questions: [
      { id: "m1", text: "Are vendors assessed?" },
      { id: "m2", text: "Are supplier audits performed?" },
      { id: "m3", text: "Is SaaS validation addressed?" },
      { id: "m4", text: "Is cloud qualification documented?" },
      { id: "m5", text: "Are vendor deliverables reviewed?" }
    ]
  },
  {
    id: "continuous",
    title: "Periodic Review & Continuous Improvement",
    weight: 0.10,
    questions: [
      { id: "p1", text: "Are systems periodically reviewed?" },
      { id: "p2", text: "Are deviations trended?" },
      { id: "p3", text: "Are CAPAs tracked?" },
      { id: "p4", text: "Are validation documents updated?" },
      { id: "p5", text: "Is effectiveness monitored?" }
    ]
  }
];

export const answerOptions = [
  { label: "Fully Implemented", value: 5 },
  { label: "Partially Implemented", value: 3 },
  { label: "Planned", value: 1 },
  { label: "Not Implemented", value: 0 }
];

export const getStatusFromScore = (score: number) => {
  if (score >= 90) return { label: "Audit Ready", color: "text-emerald-400", bg: "bg-emerald-400" };
  if (score >= 80) return { label: "Strong Compliance", color: "text-blue-400", bg: "bg-blue-400" };
  if (score >= 60) return { label: "Moderate Risk", color: "text-amber-400", bg: "bg-amber-400" };
  if (score >= 40) return { label: "High Risk", color: "text-orange-500", bg: "bg-orange-500" };
  return { label: "Critical Risk", color: "text-red-500", bg: "bg-red-500" };
};
