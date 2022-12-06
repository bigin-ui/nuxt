export interface UserModel {
  id: string;
  avatar: string | null;
  fullName: string;
  phoneNumber: string;
  email: string;
  isActive: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}
