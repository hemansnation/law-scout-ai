import { 
  FileText, 
  MessageSquare, 
  Search,
  Shield,
  Users,
  Clock,
  CheckCircle
} from "lucide-react";

export const LANDING_FEATURES = [
  {
    icon: MessageSquare,
    title: "Legal AI Chat",
    description: "Get instant answers to your legal questions with AI-powered assistance."
  },
  {
    icon: FileText,
    title: "Document Analysis",
    description: "Upload contracts, legal documents, and get detailed analysis and insights."
  },
  {
    icon: Search,
    title: "Legal Research",
    description: "Search legal databases and get relevant case law and statutes."
  },
  {
    icon: Shield,
    title: "Secure and Confidential",
    description: "Your information is protected with enterprise-level security."
  }
];

export const LANDING_STATS = [
  { icon: Users, value: "10,000+", label: "Active Users" },
  { icon: FileText, value: "50,000+", label: "Documents Analyzed" },
  { icon: Clock, value: "24/7", label: "Support Available" },
  { icon: CheckCircle, value: "99.9%", label: "Accuracy" }
];

export const LANDING_BENEFITS = [
  "Instant analysis of contracts and legal documents",
  "Precise answers based on updated legislation",
  "Save time on legal research",
  "Intuitive and easy-to-use interface",
  "Support for multiple file formats",
  "Confidentiality guaranteed"
];