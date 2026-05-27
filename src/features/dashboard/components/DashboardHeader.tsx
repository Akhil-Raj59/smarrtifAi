interface DashboardHeaderProps {
  userData: {
    name: string;
    plan: string;
    enrollment: string;
    progress: number;
  };
}

export const DashboardHeader = ({ userData }: DashboardHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {userData.name}! 👋
            </h1>
            <p className="text-white/90">
              {userData.plan} Plan • {userData.enrollment}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
              <div className="text-xs text-white/80">Overall Progress</div>
              <div className="text-2xl font-bold">{userData.progress}%</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
              <div className="text-xs text-white/80">Days Remaining</div>
              <div className="text-2xl font-bold">45</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
