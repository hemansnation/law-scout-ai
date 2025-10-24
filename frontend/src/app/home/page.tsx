"use client";

import { useRouter } from "next/navigation";
import { LandingHeader, HeroSection, FeaturesSection } from "@/app/home/components";
import { LANDING_FEATURES, LANDING_STATS } from "@/app/home/constants";

/**
 * Home Page - Landing page for Law Scout AI
 * Responsibility: Presenting the product and directing users to register/login
 */
export default function Home() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const navigateToAuth = () => handleNavigation("/auth");
  const navigateToDashboard = () => handleNavigation("/dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <LandingHeader 
        onLogin={navigateToAuth}
        onGetStarted={navigateToAuth}
      />

      {/* Hero Section */}
      <HeroSection
        onGetStarted={navigateToAuth}
        onUploadDocument={navigateToAuth}
        stats={LANDING_STATS}
      />

      {/* Features */}
      <FeaturesSection features={LANDING_FEATURES} />

      {/* Additional sections would go here... */}
    </div>
  );
}