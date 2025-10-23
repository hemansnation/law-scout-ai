"use client";

import { useChat } from "@/hooks/useChat";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { ChatArea, ChatHeader, ChatInput } from "@/components/features/chat";

/**
 * Dashboard Page - Solo compone componentes y maneja el estado global del chat
 * Responsabilidad: Orquestación de la UI del dashboard de chat legal
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