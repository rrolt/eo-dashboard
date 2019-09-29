export interface Intervention {
  date: Date;
  summary: string;
  anomaly: Anomaly;
}

export interface Anomaly {
  ref: string;
  criticity: number;
  status: string;
}
