
import type { ServerBuild } from '@remix-run/cloudflare';
import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';

export const onRequest: PagesFunction = async (context) => {
  try {
    const serverBuild = (await import('../build/server/index.js')) as unknown as ServerBuild;

    const handler = createPagesFunctionHandler({
      build: serverBuild,
    });

    return handler(context);
  } catch (error) {
    console.error('Failed to load server build:', error);
    return new Response('Server build not found. Please run `npm run build` first.', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
};
