declare module '@react-email/render' {
  export function renderAsync(component: React.ReactElement): Promise<string>;
}
