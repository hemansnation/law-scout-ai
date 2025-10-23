"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  MessageSquare, 
  Upload,
  Zap,
  Shield,
  Search
} from "lucide-react";

interface WelcomeMessageProps {
  onStartChat: () => void;
  onUploadDocument: () => void;
}

export function WelcomeMessage({ onStartChat, onUploadDocument }: WelcomeMessageProps) {
  const features = [
    {
      icon: MessageSquare,
      title: "Ask Legal Questions",
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
      description: "Search through legal databases and get relevant case law and statutes."
    },
    {
      icon: Shield,
      title: "Secure & Confidential",
      description: "Your information is protected with enterprise-grade security."
    }
  ];

  const quickActions = [
    "Analyze a contract",
    "Explain employment law",
    "Review privacy policy",
    "Draft legal document"
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to Law Scout AI
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your intelligent legal assistant. Ask questions, upload documents, and get expert legal insights powered by AI.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 text-center">
          Quick Actions
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="justify-start h-auto p-4 text-left"
              onClick={onStartChat}
            >
              <MessageSquare className="w-4 h-4 mr-3 flex-shrink-0" />
              <span className="text-sm">{action}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={onStartChat}
          className="bg-blue-600 hover:bg-blue-700"
          size="lg"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Start Chatting
        </Button>
        <Button
          onClick={onUploadDocument}
          variant="outline"
          size="lg"
        >
          <Upload className="w-5 h-5 mr-2" />
          Upload Document
        </Button>
      </div>

      {/* Disclaimer */}
      <div className="text-center">
        <p className="text-xs text-gray-500 max-w-2xl mx-auto">
          <strong>Disclaimer:</strong> This AI assistant provides general legal information and should not be considered as legal advice. 
          For specific legal matters, please consult with a qualified attorney.
        </p>
      </div>
    </div>
  );
}