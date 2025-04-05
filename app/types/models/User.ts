/**
 * Represents a user in the system
 */
export interface User {
  /** Unique identifier for the user */
  id: string;
  /** User's email address */
  email: string;
  /** User's full name */
  name: string;
  /** User's role in the system */
  role: UserRole;
  /** Whether the user's email is verified */
  isEmailVerified: boolean;
  /** When the user was created */
  createdAt: Date;
  /** When the user was last updated */
  updatedAt: Date;
}

/**
 * Possible user roles in the system
 */
export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

/**
 * Type guard to check if a value is a User
 */
export function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'email' in value &&
    'name' in value &&
    'role' in value &&
    'isEmailVerified' in value &&
    'createdAt' in value &&
    'updatedAt' in value
  );
} 