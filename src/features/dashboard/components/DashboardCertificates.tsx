import { GraduationCap, Award } from "lucide-react";

interface DashboardCertificatesProps {
  progress: number;
}

export const DashboardCertificates = ({ progress }: DashboardCertificatesProps) => {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <GraduationCap className="h-5 w-5 text-[var(--brand-red)]" />
        Certificates
      </h2>
      <div className="text-center py-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--brand-gray-light)] mb-3">
          <Award className="h-8 w-8 text-gray-400" />
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Complete your courses to earn certificates
        </p>
        <div className="text-2xl font-bold text-[var(--brand-red)]">
          {progress}% Complete
        </div>
      </div>
    </section>
  );
};
