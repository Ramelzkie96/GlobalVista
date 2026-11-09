import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const contactInfo = [
  {
    id: 1,
    icon: MapPin,
    label: "Our Office",
    lines: ["123 Travel Street, Manila,", "Philippines 1000"],
  },
  {
    id: 2,
    icon: Mail,
    label: "Email Us",
    lines: ["hello@globalvista.com"],
    href: "mailto:hello@globalvista.com",
  },
  {
    id: 3,
    icon: Phone,
    label: "Call Us",
    lines: ["+63 912 345 6789"],
    href: "tel:+639123456789",
  },
  {
    id: 4,
    icon: Clock,
    label: "Business Hours",
    lines: ["Mon – Fri, 9:00 AM – 6:00 PM"],
  },
];