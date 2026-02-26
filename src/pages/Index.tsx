import { DollarSign, TrendingUp, CreditCard, PiggyBank } from "lucide-react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import TransactionsList from "@/components/dashboard/TransactionsList";
import ExpenseBreakdown from "@/components/dashboard/ExpenseBreakdown";

const stats = [
  { title: "Saldo Total", value: "R$ 48.250", change: "+12.5%", changeType: "up" as const, icon: DollarSign },
  { title: "Receita Mensal", value: "R$ 25.600", change: "+8.2%", changeType: "up" as const, icon: TrendingUp },
  { title: "Despesas", value: "R$ 12.400", change: "+3.1%", changeType: "down" as const, icon: CreditCard },
  { title: "Poupança", value: "R$ 13.200", change: "+15.4%", changeType: "up" as const, icon: PiggyBank },
];

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 ml-64">
        <DashboardHeader />
        <div className="p-8 space-y-6">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.title} {...stat} delay={i * 0.08} />
            ))}
          </div>

          {/* Chart */}
          <RevenueChart />

          {/* Bottom Row */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <TransactionsList />
            <ExpenseBreakdown />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
