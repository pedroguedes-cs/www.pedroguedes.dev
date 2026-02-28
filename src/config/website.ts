export const WEBSITE_URL = "https://www.pedroguedes.dev"
export const WEBSITE_NAME = "Pedro Guedes | Computer Science student"
export const DEFAULT_WEBSITE_DESCRIPTION = "Portfolio of Pedro Guedes, Computer Science student building software projects in algorithms and web development"
export const DEFAULT_OG_IMAGE = new URL("/preview.jpeg", WEBSITE_URL).toString();
export const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: WEBSITE_NAME,
  url: WEBSITE_URL,
};