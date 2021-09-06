type GetterType = (a: string, b: string, c?: string) => string;

const hero = {
  colors: {
    default: {
      backgroundColor: (get: GetterType) =>
        get('colorScheme', 'light'),
    },
  },
  padding: {
    sm: '4rem 2rem',
    fluidRight: '0',
    fluidLeft: '0',
    pill: '2rem 8rem',
    lgPill: '4rem 8rem',
    smPill: '4rem 4rem',
    default: '2rem 1rem',
  },
  borderRadius: (get: GetterType) =>
    get('globals', 'borderRadius'),
};

export {hero};
