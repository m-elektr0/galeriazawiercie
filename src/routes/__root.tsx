import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zawiercie City Center — Trzy pawilony, jedno miejsce" },
      {
        name: "description",
        content:
          "Zawiercie City Center — kompleks Galerii Brama Jury, M Park i Aura Park wokół ronda Jurajskich Rycerzy. Moda, gastronomia, dom, rozrywka.",
      },
      { name: "author", content: "Zawiercie City Center" },
      { property: "og:title", content: "Zawiercie City Center — Trzy pawilony, jedno miejsce" },
      {
        property: "og:description",
        content:
          "Trzy pawilony handlowe wokół ronda Jurajskich Rycerzy w Zawierciu. Ponad 60 sklepów i restauracji.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Zawiercie City Center — Trzy pawilony, jedno miejsce" },
      { name: "description", content: "Zawiercie City Center Hub is a website for a modern shopping complex featuring three distinct locations." },
      { property: "og:description", content: "Zawiercie City Center Hub is a website for a modern shopping complex featuring three distinct locations." },
      { name: "twitter:description", content: "Zawiercie City Center Hub is a website for a modern shopping complex featuring three distinct locations." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f4d036b8-fdde-429d-a7e0-8a3cfe132b8d/id-preview-f1c565ea--be255fe3-fe31-4ef6-8e69-ad94bf3dd40f.lovable.app-1777316175080.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f4d036b8-fdde-429d-a7e0-8a3cfe132b8d/id-preview-f1c565ea--be255fe3-fe31-4ef6-8e69-ad94bf3dd40f.lovable.app-1777316175080.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Syne:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
