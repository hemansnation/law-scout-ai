import { Message, FileAttachment } from '@/types';
import { CHAT_CONSTANTS } from '@/lib/constants';

export class ChatService {
  // Simulate AI response
  static async generateResponse(message: string, attachments?: FileAttachment[]): Promise<string> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, CHAT_CONSTANTS.TYPING_SIMULATION_DELAY));
    
    const hasAttachments = attachments && attachments.length > 0;
    const baseResponse = "He recibido tu mensaje";
    const attachmentPart = hasAttachments ? " y los documentos adjuntos" : "";
    const conclusionPart = ". Permíteme analizar esto y proporcionarte una respuesta completa. Esta es una respuesta simulada para propósitos de demostración.";
    
    return baseResponse + attachmentPart + conclusionPart;
  }

  // Create a new message
  static createMessage(
    content: string,
    sender: "user" | "assistant",
    attachments?: FileAttachment[]
  ): Message {
    return {
      id: Date.now().toString() + Math.random(),
      content,
      sender,
      timestamp: new Date(),
      attachments: attachments?.length ? [...attachments] : undefined,
    };
  }

  // Validate file upload
  static validateFile(file: File): { isValid: boolean; error?: string } {
    if (file.size > CHAT_CONSTANTS.MAX_FILE_SIZE) {
      return {
        isValid: false,
        error: `El archivo "${file.name}" es muy grande. El tamaño máximo es ${this.formatFileSize(CHAT_CONSTANTS.MAX_FILE_SIZE)}.`
      };
    }

    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!CHAT_CONSTANTS.ACCEPTED_FILE_TYPES.includes(fileExtension as any)) {
      return {
        isValid: false,
        error: `Tipo de archivo no soportado. Formatos aceptados: ${CHAT_CONSTANTS.ACCEPTED_FILE_TYPES.join(', ')}`
      };
    }

    return { isValid: true };
  }

  // Format file size for display
  static formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  // Convert File objects to FileAttachment objects
  static createFileAttachment(file: File): FileAttachment {
    return {
      id: Date.now().toString() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
    };
  }
}