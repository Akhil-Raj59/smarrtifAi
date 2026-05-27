import { Users, MessageSquare } from "lucide-react";

export const DashboardCommunity = () => {
  return (
    <section className="bg-gradient-to-br from-[var(--brand-red)] to-[var(--brand-orange)] text-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
        <Users className="h-5 w-5" />
        Community
      </h2>
      <p className="text-sm text-white/90 mb-4">
        Connect with fellow learners, ask questions, and share your progress
      </p>
      <button className="w-full px-4 py-2 rounded-lg bg-white text-[var(--brand-red)] hover:shadow-lg transition-all font-semibold">
        <MessageSquare className="inline h-4 w-4 mr-2" />
        Join Discussion
      </button>
    </section>
  );
};
