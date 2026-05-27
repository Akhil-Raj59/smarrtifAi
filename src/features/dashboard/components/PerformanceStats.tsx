import { BarChart3, Target, TrendingUp, Clock } from "lucide-react";

export const PerformanceStats = () => {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <BarChart3 className="h-5 w-5 text-[var(--brand-red)]" />
        Performance
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-[var(--brand-gray-light)] rounded-lg">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-[var(--brand-orange)]" />
            <span className="text-sm text-gray-700">
              Assignments Completed
            </span>
          </div>
          <span className="font-bold text-gray-900">8/12</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-[var(--brand-gray-light)] rounded-lg">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-[var(--brand-orange)]" />
            <span className="text-sm text-gray-700">
              Average Score
            </span>
          </div>
          <span className="font-bold text-gray-900">92%</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-[var(--brand-gray-light)] rounded-lg">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[var(--brand-orange)]" />
            <span className="text-sm text-gray-700">
              Learning Hours
            </span>
          </div>
          <span className="font-bold text-gray-900">156h</span>
        </div>
      </div>
    </section>
  );
};
