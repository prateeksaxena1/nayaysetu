import React, { useEffect } from 'react';
import TeamMemberCard from '../components/UI/TeamMemberCard';
import { team } from '../data/team';
import { FileText, Scale, Users, CheckCircle, MapPin } from 'lucide-react';
import FadeIn from '../components/Animations/FadeIn';
import StaggerChildren, { StaggerItem } from '../components/Animations/StaggerChildren';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      id: 1,
      title: 'Share Your Issue',
      description: 'Book a consultation or fill our secure form to tell us about your property dispute.',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'Document Review',
      description: 'Our experts analyze your property deeds, wills, and revenue records in detail.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      id: 3,
      title: 'Advice & Strategy',
      description: 'We create a custom legal roadmap—whether for mediation, settlement, or court.',
      icon: <Scale className="w-6 h-6" />
    },
    {
      id: 4,
      title: 'Resolution',
      description: 'We represent you through litigation or settlement negotiations until the issue is resolved.',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-nayaysetu text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="down">
            <h1 className="text-4xl font-bold mb-4">About Nayaysetu</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Bridging the gap between families and justice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Location */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                We are dedicated to protecting inheritance and ancestral rights in India.
                We believe every family member deserves their fair share, and we fight to secure it through expert legal counsel and compassionate mediation.
              </p>

              <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-12">
                <MapPin className="w-5 h-5 mr-2 text-nayaysetu-gold" />
                <span className="font-medium">Headquartered in Jaipur, serving clients across India and globally (NRIs)</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How We Work (Process) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A clear, transparent process to guide you from confusion to resolution.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Timeline Connector */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10 transform -translate-y-1/2"></div>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <StaggerItem key={step.id} className="relative bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 md:border-0">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 md:static md:translate-x-0 md:bg-transparent md:mb-6 flex justify-center">
                    <div className="w-12 h-12 bg-nayaysetu text-white rounded-full flex items-center justify-center shadow-lg relative z-10">
                      {step.icon}
                    </div>
                  </div>
                  {/* Mobile Connector (visual tweak needed ideally but keeping simple for now) */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-8 md:mt-0 text-center">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm">{step.description}</p>
                  {/* Step Number Badge */}
                  <div className="hidden md:flex absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white dark:bg-gray-800 border-2 border-nayaysetu-gold rounded-full items-center justify-center text-xs font-bold text-nayaysetu transition-colors">
                    {step.id}
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the dedicated minds behind Nayaysetu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.slice(0, 3).map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;