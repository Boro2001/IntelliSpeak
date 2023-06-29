export interface UserMistake {
  id: string;
  language: string; // en, it, esp, fr,
  type: string;
  subtype?: string;
  fragment: string;
  importance: number;
  explanation: string;
}
