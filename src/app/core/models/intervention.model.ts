export interface Intervention {
  id: string;
  date: any;
  summary: string;
  anomaly: Anomaly;
}

export interface Anomaly {
  ref: string;
  criticity: number;
  status: string;
}
