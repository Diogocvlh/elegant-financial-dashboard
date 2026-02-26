import { motion } from "framer-motion";

const categories = [
  { name: "Moradia", amount: 3200, percentage: 38, color: "bg-primary" },
  { name: "Alimentação", amount: 1800, percentage: 21, color: "bg-accent" },
  { name: "Transporte", amount: 1200, percentage: 14, color: "bg-chart-down" },
  { name: "Utilidades", amount: 850, percentage: 10, color: "bg-chart-neutral" },
  { name: "Lazer", amount: 720, percentage: 9, color: "bg-secondary-foreground" },
  { name: "Outros", amount: 680, percentage: 8, color: "bg-muted-foreground" },
];

const ExpenseBreakdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="glass-card rounded-xl p-5"
    >
      <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Despesas por Categoria</h3>

      {/* Progress bar composition */}
      <div className="mb-5 flex h-3 overflow-hidden rounded-full bg-secondary">
        {categories.map((cat) => (
          <motion.div
            key={cat.name}
            initial={{ width: 0 }}
            animate={{ width: `${cat.percentage}%` }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`${cat.color} first:rounded-l-full last:rounded-r-full`}
          />
        ))}
      </div>

      <div className="space-y-3">
        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className={`h-2.5 w-2.5 rounded-full ${cat.color}`} />
              <span className="text-sm text-secondary-foreground">{cat.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">
                R$ {cat.amount.toLocaleString("pt-BR")}
              </span>
              <span className="w-10 text-right text-xs text-muted-foreground">{cat.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExpenseBreakdown;
