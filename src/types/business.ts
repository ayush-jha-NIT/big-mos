export type OrderMode = "delivery" | "pickup";

export interface BusinessConfig {
  name: string;
  displayName: string;
  currency: "INR";
  vegetarianOnly: boolean;
  phone: string;
  whatsappE164: string;
  whatsappDigits: string;
  timezone: "Asia/Kolkata";
  ordering: {
    deliveryAvailable: boolean;
    pickupAvailable: boolean;
    deliveryStart: string;
    deliveryEnd: string;
    freeDeliveryAbove: number;
    deliveryChargeAtOrBelowThreshold: null;
    deliveryRadiusKm: {
      min: number;
      max: number;
    };
  };
}
