export const RAW_COLORS = {
  // Palette colors
  'pale-blue': '#364f6b',
  'light-blue': '#3d5775',
  'deep-blue': '#30465f',
  'strong-pink': '#fc5185',
  cyan: '#43dde6',
  'light-grey': '#f0f0f0',
  'strong-pink-active': '#c03b63',
  'cyan-active': '#34afb6',
  'light-grey-active': '#c5c5c5',

  // Default colors
  white: '#ffffff',
  'almost-white': '#f0f0f0',
  'not-quite-white': '#e1e1e1',
  black: '#0a0a0a',
  light: '#faf3f1',
  dark: '#2d3440',
};

export const COLORS = { // Light palette
  // Main background colors
  'main-background-color': RAW_COLORS['light-grey'],
  'secondary-background-color': RAW_COLORS['not-quite-white'],

  // Navigation colors
  'navigation-background-color': RAW_COLORS['not-quite-white'],
  'navigation-accent-color': RAW_COLORS['light-grey'],

  // Text colors
  'main-text-color': RAW_COLORS.black,
  'secondary-text-color': RAW_COLORS['not-quite-white'],

  // Accent colors
  'accent-1': RAW_COLORS.cyan,
  'accent-2': RAW_COLORS['strong-pink'],
  'accent-3': RAW_COLORS['strong-pink'],
  'accent-1-active': RAW_COLORS['cyan-active'],
  'accent-2-active': RAW_COLORS['strong-pink-active'],
  'accent-3-active': RAW_COLORS['strong-pink-active'],
};

export const DARK_COLORS = { // Dark palette
  // Main background colors
  'main-background-color': RAW_COLORS['pale-blue'],
  'secondary-background-color': RAW_COLORS['deep-blue'],

  // Navigation colors
  'navigation-background-color': RAW_COLORS['light-blue'],
  'navigation-accent-color': RAW_COLORS['deep-blue'],

  // Text colors
  'main-text-color': RAW_COLORS['not-quite-white'],
  'secondary-text-color': RAW_COLORS.black,

  // Accent colors
  'accent-1': RAW_COLORS['strong-pink'],
  'accent-2': RAW_COLORS.cyan,
  'accent-3': RAW_COLORS['light-grey'],
  'accent-1-active': RAW_COLORS['strong-pink-active'],
  'accent-2-active': RAW_COLORS['cyan-active'],
  'accent-3-active': RAW_COLORS['light-grey-active'],
};
