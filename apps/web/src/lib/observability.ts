export function captureError(err: unknown, ctx: { scope: string, extra?: Record<string, unknown> }): void {
  console.error(`[${ctx.scope}]`, err, ctx.extra ?? {})
}
