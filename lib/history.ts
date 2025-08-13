export type HistoryStatus = "completed" | "pending" | "cancelled";

export interface BaseHistoryItem {
  id: string;
  date: string; // ISO date string
  status: HistoryStatus;
  reference?: string;
}

export interface LaboratoryHistoryItem extends BaseHistoryItem {
  testName: string;
  value?: string;
  unit?: string;
  normalRange?: string;
}

export interface RadiologyHistoryItem extends BaseHistoryItem {
  modality: "X-Ray" | "CT" | "MRI" | "Ultrasound";
  bodyPart: string;
  impression?: string;
}

export const laboratoryHistory: LaboratoryHistoryItem[] = [
  {
    id: "lab-2025-0005",
    date: "2025-08-05",
    status: "pending",
    testName: "HbA1c",
    value: undefined,
    unit: "%",
    normalRange: "< 5.7",
  },
  {
    id: "lab-2025-0004",
    date: "2025-07-12",
    status: "completed",
    testName: "Complete Blood Count",
    value: "13.6",
    unit: "g/dL",
    normalRange: "13.0–17.0",
  },
  {
    id: "lab-2025-0003",
    date: "2025-06-05",
    status: "completed",
    testName: "Fasting Blood Glucose",
    value: "92",
    unit: "mg/dL",
    normalRange: "70–100",
  },
  {
    id: "lab-2025-0002",
    date: "2025-05-28",
    status: "completed",
    testName: "Urinalysis",
  },
  {
    id: "lab-2025-0001",
    date: "2025-04-02",
    status: "completed",
    testName: "Lipid Panel",
    value: "LDL 128",
    unit: "mg/dL",
    normalRange: "< 130",
  },
];

export const radiologyHistory: RadiologyHistoryItem[] = [
  {
    id: "rad-2025-0003",
    date: "2025-08-09",
    status: "pending",
    modality: "CT",
    bodyPart: "Abdomen",
  },
  {
    id: "rad-2025-0002",
    date: "2025-07-02",
    status: "completed",
    modality: "X-Ray",
    bodyPart: "Chest",
    impression: "No acute cardiopulmonary process.",
  },
  {
    id: "rad-2025-0001",
    date: "2025-06-11",
    status: "completed",
    modality: "MRI",
    bodyPart: "Knee",
    impression: "Small meniscal tear suspected.",
  },
];

export const getLatestCompletedLaboratory = (): LaboratoryHistoryItem | null => {
  const completed = laboratoryHistory.filter((item) => item.status === "completed");
  if (completed.length === 0) return null;
  completed.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return completed[0] ?? null;
};

export const getLatestCompletedRadiology = (): RadiologyHistoryItem | null => {
  const completed = radiologyHistory.filter((item) => item.status === "completed");
  if (completed.length === 0) return null;
  completed.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return completed[0] ?? null;
};


