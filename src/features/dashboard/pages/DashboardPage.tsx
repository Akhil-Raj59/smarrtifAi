import { DashboardHeader } from "../components/DashboardHeader";
import { MyCourses } from "../components/MyCourses";
import { DashboardAssignments } from "../components/DashboardAssignments";
import { LearningMaterials } from "../components/LearningMaterials";
import { UpcomingSessions } from "../components/UpcomingSessions";
import { PerformanceStats } from "../components/PerformanceStats";
import { Achievements } from "../components/Achievements";
import { DashboardCommunity } from "../components/DashboardCommunity";
import { DashboardCertificates } from "../components/DashboardCertificates";
import { CareerBoost } from "../components/CareerBoost";

export const DashboardPage = () => {
  // Mock user data
  const userData = {
    name: "Rahul Sharma",
    plan: "Job Ready",
    enrollment: "AI/ML & Prompt Engineering",
    progress: 65,
    startDate: "Jan 15, 2026",
    endDate: "Apr 15, 2026",
  };

  return (
    <div className="bg-[var(--brand-gray-light)] min-h-screen">
      <DashboardHeader userData={userData} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Left Column (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            <MyCourses />
            <DashboardAssignments />
            <LearningMaterials />
          </div>

          {/* Sidebar - Right Column (1/3) */}
          <div className="space-y-8">
            <UpcomingSessions />
            <PerformanceStats />
            <Achievements />
            <DashboardCommunity />
            <DashboardCertificates progress={userData.progress} />
            <CareerBoost />
          </div>
        </div>
      </div>
    </div>
  );
};
