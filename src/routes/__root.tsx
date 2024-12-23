import { HelpSection } from "@/components/HelpSection";
import { NavigationBar } from "@/components/navigation/NavigationBar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <main className="bg-gray-100 h-screen">
      <NavigationBar />
      <HelpSection />
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  ),
});
