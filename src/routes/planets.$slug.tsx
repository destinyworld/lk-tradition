import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/planets/$slug")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "grahas" });
  },
});
