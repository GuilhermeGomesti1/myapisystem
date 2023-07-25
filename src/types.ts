

export interface TokenPayload {
  userId: string;
  // Outros campos que possam existir no payload do token
}

export interface Task {
  
  userId: string;
  title:string;
  description: string;
  completed:boolean;
}