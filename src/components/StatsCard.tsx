interface StatsCardProps {
  value: string;
  label: string;
}

export const StatsCard = ({ value, label }: StatsCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-card border border-stats-border rounded-2xl">
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};
