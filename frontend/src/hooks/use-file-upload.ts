"use client";

import { useState, useCallback } from "react";
import { FileAttachment } from "@/types";

export function useFileUpload() {
  const [selectedFiles, setSelectedFiles] = useState<FileAttachment[]>([]);

  const addFiles = useCallback((newFiles: FileAttachment[]) => {
    setSelectedFiles(prev => [...prev, ...newFiles]);
  }, []);

  const removeFile = useCallback((fileId: string) => {
    setSelectedFiles(prev => prev.filter(file => file.id !== fileId));
  }, []);

  const clearFiles = useCallback(() => {
    setSelectedFiles([]);
  }, []);

  const formatFileSize = useCallback((bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }, []);

  return {
    selectedFiles,
    addFiles,
    removeFile,
    clearFiles,
    formatFileSize,
  };
}