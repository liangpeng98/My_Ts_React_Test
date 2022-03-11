declare module '*.module.css' {
  const classes: any;
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: any;
  export default classes;
}
