import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Law Scout AI",
  description: "AI-powered legal assistant dashboard with document analysis and chat capabilities",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}