# Hooks Directory

This directory contains custom React hooks used throughout the application. Follow these guidelines:

## Structure

- `useAuth/` - Authentication related hooks
- `useForm/` - Form handling hooks
- `useApi/` - API interaction hooks
- `useLocalStorage/` - Local storage hooks
- `useTheme/` - Theme management hooks

## Naming Conventions

- Use camelCase for hook files and folders
- Prefix all hooks with `use`
- Add `.ts` extension for TypeScript hooks
- Name test files with `.test.ts` or `.spec.ts`

## Best Practices

1. Keep hooks focused and single-purpose
2. Use TypeScript for type safety
3. Implement proper error handling
4. Document hook parameters and return values
5. Follow React hooks rules
6. Use proper cleanup in useEffect
7. Implement proper loading states
8. Use proper memoization when needed 