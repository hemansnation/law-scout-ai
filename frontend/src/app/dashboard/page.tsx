"use client";

import { useChat } from "@/app/dashboard/hooks/useChat";
import { DashboardSidebar } from "@/app/dashboard/components/DashboardSidebar";
import { ChatArea, ChatHeader, ChatInput } from "@/app/dashboard/components/chat";

/**
 * Dashboard Page - Only composes components and manages the global chat state
 * Responsibility: Orchestrating the UI of the legal chat dashboard
 */
export default function Dashboard() {
  const {
    messages,
    isTyping,
    selectedFiles,
    inputMessage,
    setInputMessage,
    sendMessage,
    addFiles,
    removeFile,
  } = useChat();

  const handleSendMessage = (content: string, attachments?: typeof selectedFiles) => {
    sendMessage(content, attachments);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <DashboardSidebar />

      {/* Main Chat Interface */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header with Upload Options */}
        <ChatHeader
          selectedFiles={selectedFiles}
          onFilesSelected={addFiles}
          onFileRemoved={removeFile}
        />

        {/* Messages Area */}
        <ChatArea
          messages={messages}
          isTyping={isTyping}
        />

        {/* Input Area */}
        <ChatInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          selectedFiles={selectedFiles}
          onSendMessage={handleSendMessage}
          onFilesSelected={addFiles}
          onFileRemoved={removeFile}
          disabled={isTyping}
        />
      </div>
    </div>
  );
}