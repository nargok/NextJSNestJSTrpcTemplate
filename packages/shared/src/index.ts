// tRPC will look for this file to find shared types

// Import types from other files
export * from './types/user';

// Shared types will be defined here
export type ExampleType = {
  id: string;
  name: string;
};