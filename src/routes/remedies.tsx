import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/remedies")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "tools" });
  },
});
