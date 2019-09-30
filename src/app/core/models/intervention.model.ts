export interface Intervention {
  id: string;
  date: any;
  summary: string;
  anomaly: Anomaly;
  kpis?: IndicatorKpis;
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

export interface IndicatorKpis {
  label: string;
  value: number;
}
