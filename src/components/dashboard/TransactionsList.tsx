import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownLeft, ShoppingBag, Briefcase, Home, Zap, Coffee } from "lucide-react";

const transactions = [
  { id: 1, name: "Salário", category: "Renda", amount: 12500, type: "income" as const, icon: Briefcase, date: "Hoje" },
  { id: 2, name: "Aluguel", category: "Moradia", amount: -3200, type: "expense" as const, icon: Home, date: "Hoje" },
  { id: 3, name: "Conta de Luz", category: "Utilidades", amount: -380, type: "expense" as const, icon: Zap, date: "Ontem" },
  { id: 4, name: "Supermercado", category: "Alimentação", amount: -892, type: "expense" as const, icon: ShoppingBag, date: "Ontem" },
  { id: 5, name: "Freelance", category: "Renda", amount: 4200, type: "income" as const, icon: Briefcase, date: "22 Fev" },
  { id: 6, name: "Cafeteria", category: "Alimentação", amount: -45, type: "expense" as const, icon: Coffee, date: "22 Fev" },
];

const TransactionsList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="glass-card rounded-xl p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold text-foreground">Transações Recentes</h3>
        <button className="text-xs font-medium text-primary hover:underline">Ver todas</button>
      </div>
      <div className="space-y-1">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-secondary/50"
          >
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${
              tx.type === "income" ? "bg-primary/10" : "bg-secondary"
            }`}>
              <tx.icon className={`h-4 w-4 ${
                tx.type === "income" ? "text-primary" : "text-secondary-foreground"
              }`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{tx.name}</p>
              <p className="text-xs text-muted-foreground">{tx.category}</p>
            </div>
            <div className="text-right">
              <p className={`text-sm font-semibold ${
                tx.type === "income" ? "text-chart-up" : "text-foreground"
              }`}>
                {tx.type === "income" ? "+" : ""}R$ {Math.abs(tx.amount).toLocaleString("pt-BR")}
              </p>
              <p className="text-xs text-muted-foreground">{tx.date}</p>
            </div>
            <div className={`flex h-5 w-5 items-center justify-center rounded-full ${
              tx.type === "income" ? "text-chart-up" : "text-chart-down"
            }`}>
              {tx.type === "income" ? (
                <ArrowDownLeft className="h-3.5 w-3.5" />
              ) : (
                <ArrowUpRight className="h-3.5 w-3.5" />
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TransactionsList;
