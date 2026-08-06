// Декларации для обычных .scss файлов 
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

// Декларации для CSS Modules (*.module.scss)
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// Декларации для обычного CSS, на будущее
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}