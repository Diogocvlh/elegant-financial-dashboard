import { 
  LayoutDashboard, 
  ArrowUpDown, 
  Wallet, 
  PieChart, 
  Settings, 
  CreditCard,
  TrendingUp,
  LogOut
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Visão Geral", active: true },
  { icon: ArrowUpDown, label: "Transações", active: false },
  { icon: Wallet, label: "Carteiras", active: false },
  { icon: CreditCard, label: "Cartões", active: false },
  { icon: PieChart, label: "Investimentos", active: false },
  { icon: TrendingUp, label: "Relatórios", active: false },
];

const DashboardSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col bg-sidebar border-r border-sidebar-border">
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
          <Wallet className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="font-display text-lg font-bold text-foreground">FinanceHub</span>
      </div>

      <nav className="mt-4 flex-1 space-y-1 px-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
              item.active
                ? "bg-sidebar-accent text-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-foreground"
            }`}
          >
            <item.icon className="h-4.5 w-4.5" />
            {item.label}
            {item.active && (
              <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
            )}
          </button>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-foreground transition-all">
          <Settings className="h-4.5 w-4.5" />
          Configurações
        </button>
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-destructive hover:bg-sidebar-accent/50 transition-all">
          <LogOut className="h-4.5 w-4.5" />
          Sair
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
