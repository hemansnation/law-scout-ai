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
    title: "Chat con IA Legal",
    description: "Obtén respuestas instantáneas a tus preguntas legales con asistencia impulsada por IA."
  },
  {
    icon: FileText,
    title: "Análisis de Documentos",
    description: "Sube contratos, documentos legales y obtén análisis detallados e insights."
  },
  {
    icon: Search,
    title: "Investigación Legal",
    description: "Busca en bases de datos legales y obtén jurisprudencia y estatutos relevantes."
  },
  {
    icon: Shield,
    title: "Seguro y Confidencial",
    description: "Tu información está protegida con seguridad de nivel empresarial."
  }
];

export const LANDING_STATS = [
  { icon: Users, value: "10,000+", label: "Usuarios Activos" },
  { icon: FileText, value: "50,000+", label: "Documentos Analizados" },
  { icon: Clock, value: "24/7", label: "Soporte Disponible" },
  { icon: CheckCircle, value: "99.9%", label: "Precisión" }
];

export const LANDING_BENEFITS = [
  "Análisis instantáneo de contratos y documentos legales",
  "Respuestas precisas basadas en legislación actualizada",
  "Ahorra tiempo en investigación legal",
  "Interfaz intuitiva y fácil de usar",
  "Soporte para múltiples formatos de archivo",
  "Confidencialidad garantizada"
];