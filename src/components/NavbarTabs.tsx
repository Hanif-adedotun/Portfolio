import * as React from "react";
import {
  Award,
  BookOpen,
  FileText,
  FolderKanban,
  Home,
  Newspaper,
} from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type NavItem = {
  name: string;
  path: string;
  value: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { name: "Home", path: "/", value: "home", Icon: Home },
  { name: "Blog", path: "/blog", value: "blog", Icon: BookOpen },
  {
    name: "Certifications",
    path: "/certifications",
    value: "certifications",
    Icon: Award,
  },
  { name: "Projects", path: "/projects", value: "projects", Icon: FolderKanban },
  {
    name: "Publications",
    path: "/publications",
    value: "publications",
    Icon: Newspaper,
  },
  { name: "CV", path: "/cv", value: "cv", Icon: FileText },
];

const mobileNavItems: NavItem[] = [
    { name: "Home", path: "/", value: "home", Icon: Home },
    { name: "Blog", path: "/blog", value: "blog", Icon: BookOpen },
    
    { name: "Projects", path: "/projects", value: "projects", Icon: FolderKanban },
    
    { name: "CV", path: "/cv", value: "cv", Icon: FileText },
  ];

const getActiveValue = (currentPath: string) => {
  const activeItem = navItems.find((item) => {
    if (item.path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(item.path);
  });

  return activeItem?.value ?? "home";
};

type NavbarTabsProps = {
  currentPath: string;
};

export default function NavbarTabs({ currentPath }: NavbarTabsProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  const activeValue = React.useMemo(
    () => getActiveValue(currentPath),
    [currentPath]
  );

  if (isMobile) {
    return (
      <nav
        className="fixed bottom-4 left-1/2 z-50 w-[min(92vw,420px)] -translate-x-1/2 rounded-2xl border border-border bg-background/90 px-2 py-1 shadow-lg backdrop-blur"
        aria-label="Primary"
      >
        <ul className="grid grid-cols-4 gap-2">
          {mobileNavItems.slice(0, 4).map((item) => {
            const isActive = activeValue === item.value;
            return (
              <li key={item.value}>
                <a
                  href={item.path}
                  className={`flex flex-col items-center justify-center gap-1 rounded-lg px-2 py-1 text-xs transition-all duration-300 ${
                    isActive
                      ? "text-contrast bg-muted"
                      : "text-muted-foreground hover:text-contrast"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <item.Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <Tabs defaultValue={activeValue} orientation="horizontal">
      <TabsList className="inline-flex h-10">
        {navItems.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            asChild
            className={`gap-2 hover:text-contrast transition-all duration-300 ${
              activeValue === item.value ? "text-contrast" : ""
            }`}
          >
            <a href={item.path}>
              <item.Icon className="h-4 w-4" />
              <span>{item.name}</span>
            </a>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

