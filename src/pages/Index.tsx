import { Button } from "@/components/ui/button";
import { TrustBadge } from "@/components/TrustBadge";
import { StatsCard } from "@/components/StatsCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <TrustBadge />
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Connect with the{" "}
            <span className="text-primary">Right Investors</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            InvestorConnect matches startup founders with relevant investors based
            on industry niche, funding stage, and investment preferences.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/form">
              <Button size="lg" className="gap-2 text-lg px-8 py-6">
                Start Your Pitch Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard value="500+" label="Startups Funded" />
          <StatsCard value="$50M+" label="Capital Raised" />
          <StatsCard value="1000+" label="Active Investors" />
        </div>
      </div>
    </div>
  );
};

export default Index;
