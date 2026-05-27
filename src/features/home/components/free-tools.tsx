import { Link } from "react-router-dom";
import { FileText, Linkedin, Github } from "lucide-react";

export const FreeTools = () => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
            Free AI Tools
          </h3>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-2">
            Get instant insights with our AI-powered analysis tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Resume Analyzer */}
          <div className="bg-gradient-to-br from-[var(--brand-gray-light)] to-white rounded-xl p-4 border-2 border-gray-200 hover:border-[var(--brand-orange)]/40 hover:bg-gradient-to-br hover:from-[var(--brand-orange)]/3 hover:to-white transition-all duration-500 hover:shadow-lg group">
            <div className="text-center flex flex-col items-center">
              <div className="mb-2.5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] mb-1.5 group-hover:scale-[1.03] transition-transform shadow-md">
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent mb-2.5 text-center">
                Resume Analyzer
              </h4>
              <Link
                to="/tools/resume-analyzer"
                className="inline-block w-full px-4 py-2 rounded-lg overflow-hidden text-white font-semibold hover:shadow-lg transition-all text-sm text-center"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--brand-red) 0%, var(--brand-orange) 30%, var(--brand-orange) 70%, var(--brand-red) 100%)',
                  backgroundSize: '300% 100%',
                  backgroundPosition: 'left',
                  transition: 'background-position 1.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundPosition = 'right'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundPosition = 'left'}
              >
                Analyze Now
              </Link>
            </div>
          </div>

          {/* LinkedIn Analyzer */}
          <div className="bg-gradient-to-br from-[var(--brand-gray-light)] to-white rounded-xl p-4 border-2 border-gray-200 hover:border-[var(--brand-orange)]/40 hover:bg-gradient-to-br hover:from-[var(--brand-orange)]/3 hover:to-white transition-all duration-500 hover:shadow-lg group">
            <div className="text-center flex flex-col items-center">
              <div className="mb-2.5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] mb-1.5 group-hover:scale-[1.03] transition-transform shadow-md">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent mb-2.5 text-center">
                LinkedIn Analyzer
              </h4>
              <Link
                to="/tools/linkedin-analyzer"
                className="inline-block w-full px-4 py-2 rounded-lg overflow-hidden text-white font-semibold hover:shadow-lg transition-all text-sm text-center"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--brand-red) 0%, var(--brand-orange) 30%, var(--brand-orange) 70%, var(--brand-red) 100%)',
                  backgroundSize: '300% 100%',
                  backgroundPosition: 'left',
                  transition: 'background-position 1.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundPosition = 'right'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundPosition = 'left'}
              >
                Analyze Now
              </Link>
            </div>
          </div>

          {/* GitHub Analyzer */}
          <div className="bg-gradient-to-br from-[var(--brand-gray-light)] to-white rounded-xl p-4 border-2 border-gray-200 hover:border-[var(--brand-orange)]/40 hover:bg-gradient-to-br hover:from-[var(--brand-orange)]/3 hover:to-white transition-all duration-500 hover:shadow-lg group">
            <div className="text-center flex flex-col items-center">
              <div className="mb-2.5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] mb-1.5 group-hover:scale-[1.03] transition-transform shadow-md">
                  <Github className="h-6 w-6 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent mb-2.5 text-center">
                GitHub Analyzer
              </h4>
              <Link
                to="/tools/github-analyzer"
                className="inline-block w-full px-4 py-2 rounded-lg overflow-hidden text-white font-semibold hover:shadow-lg transition-all text-sm text-center"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--brand-red) 0%, var(--brand-orange) 30%, var(--brand-orange) 70%, var(--brand-red) 100%)',
                  backgroundSize: '300% 100%',
                  backgroundPosition: 'left',
                  transition: 'background-position 1.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundPosition = 'right'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundPosition = 'left'}
              >
                Analyze Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
