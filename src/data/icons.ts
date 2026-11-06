/**
 * Catálogo de ícones da LP (sprite inline, 24×24, stroke 1.6, currentColor).
 * Para adicionar um ícone: nova chave aqui, só com <path>/<circle>/<rect>/<line> sem atributos de cor.
 * O PROMPT-PADRAO-LP lista estas chaves como opções na entrevista.
 */
export const iconPaths = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
  'arrow-right': '<path d="M4 12h16"/><path d="m13 5 7 7-7 7"/>',
  'arrow-down': '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
  'badge-check':
    '<path d="M12 3.5 14.4 5l2.8-.6 1.2 2.6 2.6 1.2-.6 2.8 1.6 2.4-1.6 2.4.6 2.8-2.6 1.2-1.2 2.6-2.8-.6L12 22.9l-2.4-1.6-2.8.6-1.2-2.6-2.6-1.2.6-2.8L2 12.4l1.6-2.4-.6-2.8 2.6-1.2L6.8 3.4l2.8.6L12 3.5Z"/><path d="m9 12.5 2 2 4-4.5"/>',
  users:
    '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20c.7-3.4 3-5.2 5.5-5.2s4.8 1.8 5.5 5.2"/><circle cx="17.5" cy="9" r="2.4"/><path d="M15.6 14.6c2.2.3 3.9 1.9 4.5 4.9"/>',
  cylinder:
    '<ellipse cx="12" cy="6" rx="7.5" ry="3"/><path d="M4.5 6v12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6"/>',
  sliders:
    '<path d="M4 6h9M17 6h3M4 12h3M9 12h11M4 18h13M19 18h1"/><circle cx="14" cy="6" r="2"/><circle cx="7" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',
  tag: '<path d="m20.5 12.7-8.2-8.2A2.7 2.7 0 0 0 10.4 3.7H6.2A2.7 2.7 0 0 0 3.5 6.4v4.2c0 .7.3 1.4.8 1.9l8.2 8.2c1 1 2.7 1 3.7 0l4.3-4.3c1-1 1-2.7 0-3.7Z"/><circle cx="8" cy="8.5" r="1.4"/>',
  ruler:
    '<path d="m3.5 15.5 5-5 15 15-5 5-15-15Z"/><path d="m8.5 10.5 2 2M11.5 7.5l2 2M14.5 4.5l2 2"/>',
  box: '<path d="M12 3.3 20.5 8v8L12 20.7 3.5 16V8L12 3.3Z"/><path d="M3.5 8 12 12.5 20.5 8M12 12.5V20.7"/>',
  droplet: '<path d="M12 3.5s6.5 7.2 6.5 11.5A6.5 6.5 0 0 1 5.5 15c0-4.3 6.5-11.5 6.5-11.5Z"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 3.5v2.3M12 18.2v2.3M20.5 12h-2.3M5.8 12H3.5M17.8 6.2l-1.6 1.6M7.8 16.2l-1.6 1.6M17.8 17.8l-1.6-1.6M7.8 7.8 6.2 6.2"/>',
  crosshair: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3"/>',
  utensils:
    '<path d="M6 3.5v7M4.3 3.5v4.4c0 .9.7 1.6 1.7 1.6s1.7-.7 1.7-1.6V3.5M6 10.5v10M17.5 3.5c-1.7 0-3 2-3 5.2 0 2 1 3 2.2 3.4v8.4"/>',
  disc: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2"/>',
  flame:
    '<path d="M12 3.5s3.4 3 3.4 6.4c1-.8 1.4-2 1.4-2s1.7 2.4 1.7 5.1a6.5 6.5 0 0 1-13 0c0-2.8 1.4-4.6 2.6-6 .1 1 .6 1.8 1.2 2.3-.2-2.7 1-4.5 2.7-5.8Z"/>',
  cpu: '<rect x="6.5" y="6.5" width="11" height="11" rx="1"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3"/>',
  wrench:
    '<path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.3L3.5 16.8l3.2 3.2 5.2-5.2a4.5 4.5 0 0 0 5.3-6l-2.9 2.9-2.4-.6-.6-2.4 2.9-2.9Z"/>',
  zap: '<path d="M13 3 6 13.5h5L10 21l7.5-10.5h-5L13 3Z"/>',
  'map-pin':
    '<path d="M12 21.5s7-6.6 7-11.8a7 7 0 1 0-14 0c0 5.2 7 11.8 7 11.8Z"/><circle cx="12" cy="9.7" r="2.4"/>',
  building:
    '<path d="M3 21h18"/><path d="M5 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16"/><path d="M17 21v-8a1 1 0 0 1 1.5-.9l1.5.9v8"/><path d="M8 8h2"/><path d="M8 11h2"/><path d="M8 14h2"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  check: '<path d="m4.5 12.5 5 5 10-11"/>',
  'chevron-down': '<path d="m5.5 8.5 6.5 7 6.5-7"/>',
  'chevron-right': '<path d="m9 18 7-6-7-6"/>',
  whatsapp:
    '<path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>',
  shield:
    '<path d="M12 3.3 5.2 6v5.3c0 4.2 2.8 7.9 6.8 9.4 4-1.5 6.8-5.2 6.8-9.4V6L12 3.3Z"/><path d="m9.2 11.9 2 2 3.6-4"/>',
  barcode: '<path d="M4 5v14M7.2 5v14M9.6 5v14M13 5v14M15.4 5v14M18 5v14M20.5 5v14"/>',
  /* Pausar e continuar a esteira de aplicações (06/11/2026). */
  pause:
    '<rect x="6.5" y="5" width="3.5" height="14" rx="1"/><rect x="14" y="5" width="3.5" height="14" rx="1"/>',
  play: '<path d="M7.5 5.2v13.6a.8.8 0 0 0 1.2.7l10.6-6.8a.8.8 0 0 0 0-1.4L8.7 4.5a.8.8 0 0 0-1.2.7Z"/>',
  /* Aplicações da Print Master (05/11/2026): garrafa de vidro e garrafa plástica. */
  glass:
    '<path d="M10 2.5h4"/><path d="M10.5 2.5v4.2L8.4 10a3 3 0 0 0-.4 1.5v8.5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-8.5a3 3 0 0 0-.4-1.5l-2.1-3.3V2.5"/><path d="M8 14h8"/>',
  bottle:
    '<path d="M10 2.5h4v2.5l2 2.5v13a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 20.5v-13L10 5V2.5Z"/><path d="M8 11.5h8M8 16h8"/>',
} as const satisfies Record<string, string>

export type IconName = keyof typeof iconPaths

export const iconNames = Object.keys(iconPaths) as IconName[]
