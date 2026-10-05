import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/planets/")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "grahas" });
  },
});
