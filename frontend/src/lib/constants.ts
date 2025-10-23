export const CHAT_CONSTANTS = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  MAX_FILES: 10,
  ACCEPTED_FILE_TYPES: ['.pdf', '.doc', '.docx', '.txt', '.rtf'],
  TYPING_SIMULATION_DELAY: 2000,
  SCROLL_BEHAVIOR: 'smooth' as const,
} as const;

export const UI_CONSTANTS = {
  SIDEBAR_WIDTH: 256, // w-64 = 16rem = 256px
  MAX_MESSAGE_HEIGHT: 200,
  MIN_TEXTAREA_HEIGHT: 60,
} as const;

export const MESSAGES = {
  INITIAL_ASSISTANT_MESSAGE: "¡Hola! Soy tu asistente legal de IA. Puedo ayudarte a analizar documentos, responder preguntas legales y proporcionar asistencia de investigación. ¿En qué puedo ayudarte hoy?",
  TYPING_INDICATOR: "pensando...",
  FILE_UPLOAD_PLACEHOLDER: "Haz una pregunta legal o describe tu situación...",
  KEYBOARD_SHORTCUTS: "Presiona Enter para enviar, Shift + Enter para nueva línea",
} as const;