
export enum AppStep {
  USERNAME = 'USERNAME',
  CONNECTING = 'CONNECTING',
  SELECTION = 'SELECTION',
  GENERATING = 'GENERATING',
  SUCCESS = 'SUCCESS'
}

export interface AppState {
  step: AppStep;
  username: string;
  selectedAmount: number | null;
  progress: number;
}
