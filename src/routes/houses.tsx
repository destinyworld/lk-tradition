import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/houses")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "houses" });
  },
});
