import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = __dirname;

const folders = [
  "public/favicon",
  "public/images/logo",
  "public/images/banners",
  "public/images/hero",
  "public/images/services",
  "public/images/products",
  "public/images/portfolio",
  "public/images/blog",
  "public/images/testimonials",
  "public/images/clients",
  "public/images/team",
  "public/images/icons",
  "public/images/backgrounds",
  "public/videos",
  "public/fonts",

  "src/assets/css",
  "src/assets/scss",
  "src/assets/images",
  "src/assets/icons",
  "src/assets/fonts",
  "src/assets/svg",
  "src/assets/lottie",
  "src/assets/json",

  "src/animations",

  "src/components/common/Button",
  "src/components/common/Input",
  "src/components/common/TextArea",
  "src/components/common/Select",
  "src/components/common/Card",
  "src/components/common/Loader",
  "src/components/common/Spinner",
  "src/components/common/Badge",
  "src/components/common/Modal",
  "src/components/common/Pagination",
  "src/components/common/Breadcrumb",

  "src/components/layout/Navbar",
  "src/components/layout/Footer",
  "src/components/layout/Sidebar",
  "src/components/layout/MobileMenu",
  "src/components/layout/TopBar",
  "src/components/layout/ScrollToTop",

  "src/components/home/Hero",
  "src/components/home/About",
  "src/components/home/Services",
  "src/components/home/Portfolio",
  "src/components/home/Counter",
  "src/components/home/Testimonials",
  "src/components/home/FAQ",
  "src/components/home/Clients",
  "src/components/home/Team",
  "src/components/home/ContactCTA",
  "src/components/home/Newsletter",

  "src/components/about",
  "src/components/services",
  "src/components/blog",
  "src/components/contact",
  "src/components/careers",
  "src/components/dashboard",

  "src/constants",
  "src/context",
  "src/data",
  "src/hooks",
  "src/layouts",

  "src/pages/Home",
  "src/pages/About",
  "src/pages/Services",
  "src/pages/Portfolio",
  "src/pages/Blog",
  "src/pages/Careers",
  "src/pages/Contact",
  "src/pages/PrivacyPolicy",
  "src/pages/Terms",
  "src/pages/Login",
  "src/pages/Dashboard",
  "src/pages/NotFound",

  "src/routes",
  "src/services",
  "src/store",
  "src/styles",
  "src/utils",

  "server/config",
  "server/controllers",
  "server/middleware",
  "server/models",
  "server/routes",
  "server/services",
  "server/uploads",
  "server/utils",
  "server/validations",

  "docs",

  ".github/workflows",
];

const files = [
  "public/robots.txt",
  "public/sitemap.xml",
  "public/manifest.json",
  "public/browserconfig.xml",

  "src/App.jsx",
  "src/main.jsx",
];

folders.forEach((folder) => {
  fs.mkdirSync(path.join(root, folder), { recursive: true });
});

files.forEach((file) => {
  const filePath = path.join(root, file);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "");
  }
});

console.log("====================================");
console.log(" Virotech Folder Structure Created");
console.log("====================================");
console.log(`Folders Created : ${folders.length}`);
console.log(`Files Created   : ${files.length}`);
console.log("====================================");