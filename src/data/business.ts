import type { BusinessConfig } from "@/types/business";

export const businessConfig: BusinessConfig = {
  name: "Cafe Big Mo's",
  displayName: "Cafe Big Mo's",
  currency: "INR",
  vegetarianOnly: true,
  phone: "7906123442",
  whatsappE164: "+917906123442",
  whatsappDigits: "917906123442",
  timezone: "Asia/Kolkata",
  ordering: {
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryStart: "11:00",
    deliveryEnd: "21:00",
    freeDeliveryAbove: 299,
    deliveryChargeAtOrBelowThreshold: null,
    deliveryRadiusKm: {
      min: 5,
      max: 7,
    },
  },
};

export const whatsappOrderUrl = `https://wa.me/${businessConfig.whatsappDigits}`;
