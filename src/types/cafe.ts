export interface CafeMilestone {
  period: string;
  title: string;
  description: string;
}

export interface ReportedRating {
  value: number;
  platform: "Google Maps";
  requiresLiveVerification: true;
}

export interface CafeProfile {
  about: string;
  milestones: readonly CafeMilestone[];
  reportedRating: ReportedRating;
}
