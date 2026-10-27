import { Bell, Search } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between border-b border-border px-8 py-4">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Visão Geral</h1>
        <p className="text-sm text-muted-foreground">Demonstração visual com dados fictícios</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex h-9 items-center gap-2 rounded-lg bg-secondary px-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-44 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>
        <button className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
          <Bell className="h-4 w-4" />
          <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent" />
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
          C
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
