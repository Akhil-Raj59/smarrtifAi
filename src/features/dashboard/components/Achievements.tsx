import { Award } from "lucide-react";

const achievements = [
  { name: "First Module Complete", earned: true, icon: "🎯" },
  { name: "5 Projects Submitted", earned: true, icon: "🚀" },
  { name: "Perfect Attendance", earned: true, icon: "⭐" },
  { name: "Community Contributor", earned: false, icon: "🤝" },
  { name: "Course Completion", earned: false, icon: "🏆" },
];

export const Achievements = () => {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Award className="h-5 w-5 text-[var(--brand-orange)]" />
        Achievements
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`aspect-square rounded-lg flex flex-col items-center justify-center p-2 transition-all ${
              achievement.earned
                ? "bg-gradient-to-br from-[var(--brand-red-light)] to-[var(--brand-orange-light)] border-2 border-[var(--brand-orange)]"
                : "bg-gray-100 opacity-50"
            }`}
          >
            <div className="text-3xl mb-1">{achievement.icon}</div>
            <div className="text-xs text-center text-gray-700 font-medium">
              {achievement.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
