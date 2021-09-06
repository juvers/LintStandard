export default {
  left: (): string => `
    text-align: left;
      `,
  right: (): string => `
    text-align: right;
      `,
  center: (): string => `
    text-align: center;
      `,
  justify: (): string => `
    text-align: justify;
      `,
  uppercase: (): string => `
    text-transform: uppercase;
    `,
  textWhite: (): string => `
      color: #fff;`,
  textDark: (): string => `
  color: #000;  
`,
  textShadow: (): string => `
      text-shadow: 1px 1px 1px #000;`,
};
