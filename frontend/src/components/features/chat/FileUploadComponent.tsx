"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { File, Upload, X, FileText, FileImage, FileSpreadsheet } from "lucide-react";
import { FileAttachment } from "@/types";
import { useFileUpload } from "@/hooks/useFileUpload";
import { CHAT_CONSTANTS } from "@/lib/constants";

interface FileUploadComponentProps {
  selectedFiles: FileAttachment[];
  onFilesSelected: (files: FileAttachment[]) => void;
  onFileRemoved: (fileId: string) => void;
  maxFiles?: number;
  maxFileSize?: number; // in bytes
  acceptedTypes?: string[];
}

export function FileUploadComponent({
  selectedFiles,
  onFilesSelected,
  onFileRemoved,
  maxFiles = 10,
  maxFileSize = 10 * 1024 * 1024, // 10MB
  acceptedTypes = [".pdf", ".doc", ".docx", ".txt", ".rtf"]
}: FileUploadComponentProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const validFiles: FileAttachment[] = [];
    const fileArray = Array.from(files);

    for (const file of fileArray) {
      // Check file size
      if (file.size > maxFileSize) {
        alert(`File "${file.name}" is too large. Maximum size is ${formatFileSize(maxFileSize)}.`);
        continue;
      }

      // Check if we're at max files
      if (selectedFiles.length + validFiles.length >= maxFiles) {
        alert(`Maximum ${maxFiles} files allowed.`);
        break;
      }

      validFiles.push({
        id: Date.now().toString() + Math.random(),
        name: file.name,
        size: file.size,
        type: file.type,
      });
    }

    if (validFiles.length > 0) {
      onFilesSelected(validFiles);
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf':
        return <FileText className="w-4 h-4 text-red-600" />;
      case 'doc':
      case 'docx':
        return <FileText className="w-4 h-4 text-blue-600" />;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return <FileImage className="w-4 h-4 text-green-600" />;
      case 'xls':
      case 'xlsx':
        return <FileSpreadsheet className="w-4 h-4 text-green-600" />;
      default:
        return <File className="w-4 h-4 text-gray-600" />;
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = e.dataTransfer.files;
    if (files && fileInputRef.current) {
      // Create a new FileList-like object
      const dt = new DataTransfer();
      for (let i = 0; i < files.length; i++) {
        dt.items.add(files[i]);
      }
      fileInputRef.current.files = dt.files;
      
      // Trigger the change event
      const event = new Event('change', { bubbles: true });
      fileInputRef.current.dispatchEvent(event);
    }
  };

  return (
    <div className="space-y-4">
      {/* Drag and Drop Area */}
      <Card 
        className="border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors cursor-pointer"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="p-8 text-center">
          <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-900">
              Upload legal documents
            </p>
            <p className="text-sm text-gray-500">
              Drag and drop files here, or click to browse
            </p>
            <p className="text-xs text-gray-400">
              Supported: {acceptedTypes.join(", ")} (Max {formatFileSize(maxFileSize)} per file)
            </p>
          </div>
        </div>
      </Card>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept={acceptedTypes.join(",")}
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Selected Files */}
      {selectedFiles.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-900">
            Selected Files ({selectedFiles.length}/{maxFiles})
          </p>
          <div className="space-y-2">
            {selectedFiles.map((file) => (
              <div
                key={file.id}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border"
              >
                {getFileIcon(file.name)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(file.size)}
                  </p>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {file.name.split('.').pop()?.toUpperCase()}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onFileRemoved(file.id);
                  }}
                  className="h-8 w-8 p-0 hover:bg-red-100"
                >
                  <X className="w-4 h-4 text-red-600" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}