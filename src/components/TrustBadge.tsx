import { Star } from "lucide-react";

export const TrustBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-trust text-trust-foreground rounded-full mb-8">
      <Star className="w-4 h-4 fill-current" />
      <span className="text-sm font-medium">Trusted by 1000+ Startups</span>
    </div>
  );
};
