"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare, Upload, Zap } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
  onUploadDocument: () => void;
  stats: Array<{
    icon: React.ComponentType<{ className?: string }>;
    value: string;
    label: string;
  }>;
}

export function HeroSection({ onGetStarted, onUploadDocument, stats }: HeroSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          {/* Logo and Title */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl">
              <Zap className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Your Intelligent Legal
              <span className="text-blue-600"> Assistant</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get instant legal insights, analyze documents, and receive AI-powered professional guidance.
              Simplify your legal work with Law Scout AI.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={onGetStarted}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started
            </Button>
            <Button
              onClick={onUploadDocument}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6"
            >
              <Upload className="w-5 h-5 mr-2" />
              Upload Document
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12">
            <p className="text-sm text-gray-500 mb-8">Trusted by legal professionals</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}