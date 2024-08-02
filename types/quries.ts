export type Query = {
  email: string;
  status: "unseen" | "seen" | "replied";
  id: string;
  username: string;
  query: string;
  createdAt?: String | Date;
  updatedAt?: Date | string;
  replies?: {
    id: string;
    to: string;
    message: string;
    createdAt: Date | string;
  }[];
};
