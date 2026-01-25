/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { reminder } from './reminder';

export interface Env {
  API_URL: string;
}

export default {
  async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext) {
    const webhookUrl = '';

    // DBのデータを取得
    const data: string = await reminder(env.API_URL);

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: data }),
    });

    const webhookUrlTest = '';

    const historyData = [
      {
        to: 'そぽたん',
        from: 'れん',
        amount: 1000,
      },
      {
        to: 'そぽたん',
        from: 'ひろと',
        amount: 2000,
      },
    ];

    const message = historyData.map((v) => `返金の流れ: ${v.to} -> ${v.from}\n\t金額: ${v.amount}\n`).join('\n');

    const reminderMessage = `========================================\n現在残っている返金\n${message}\n========================================`;

    const _ = await fetch(webhookUrlTest, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: reminderMessage }),
    });
  },
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return new Response('Hello World!');
  },
} satisfies ExportedHandler<Env>;
