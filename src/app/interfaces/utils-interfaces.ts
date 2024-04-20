export type Role = 'user' | 'assistant';

export type GenerateTourResponse = {
  city: string;
  country: string;
};

export type GenerateChatResponse = {
  role: Role;
  content: string;
};
