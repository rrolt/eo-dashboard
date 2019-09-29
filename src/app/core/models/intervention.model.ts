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
  indicator: Indicator;
}

export interface Indicator {
  name: string;
  icon: string;
}
