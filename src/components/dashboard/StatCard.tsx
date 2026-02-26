import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "up" | "down" | "neutral";
  icon: LucideIcon;
  delay?: number;
}

const StatCard = ({ title, value, change, changeType, icon: Icon, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="glass-card rounded-xl p-5"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="mt-2 font-display text-2xl font-bold text-foreground">{value}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
          <Icon className="h-5 w-5 text-secondary-foreground" />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        {changeType === "up" ? (
          <TrendingUp className="h-3.5 w-3.5 text-chart-up" />
        ) : changeType === "down" ? (
          <TrendingDown className="h-3.5 w-3.5 text-chart-down" />
        ) : null}
        <span
          className={`text-xs font-medium ${
            changeType === "up"
              ? "text-chart-up"
              : changeType === "down"
              ? "text-chart-down"
              : "text-muted-foreground"
          }`}
        >
          {change}
        </span>
        <span className="text-xs text-muted-foreground">vs mês anterior</span>
      </div>
    </motion.div>
  );
};

export default StatCard;
