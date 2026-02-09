import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/UI/Button';
import ConsultationForm from '../components/UI/ConsultationForm';

import TestimonialCard from '../components/UI/TestimonialCard';
import ResourceCard from '../components/UI/ResourceCard';
import TeamMemberCard from '../components/UI/TeamMemberCard';
import InheritanceLawModal from '../components/UI/InheritanceLawModal';
import IntellectualPropertyModal from '../components/UI/IntellectualPropertyModal';
import HinduSuccessionModal from '../components/UI/HinduSuccessionModal';

import { testimonials } from '../data/testimonials';
import { resources } from '../data/resources';
import { team } from '../data/team';
import { practiceAreas } from '../data/practiceAreas';
import { ArrowRight, Award, HeartHandshake, Sprout, Plane, Users } from 'lucide-react';
import FadeIn from '../components/Animations/FadeIn';
import StaggerChildren, { StaggerItem } from '../components/Animations/StaggerChildren';
import CaseStudies from '../components/Sections/CaseStudies';
import TrustStrip from '../components/UI/TrustStrip';

import PracticeAreaCard from '../components/UI/PracticeAreaCard';

import { faqs, FAQ } from '../data/faqs';
import FAQAccordion from '../components/UI/FAQAccordion';

import ReadyToTalk from '../components/UI/ReadyToTalk';
import HeroImage from '../assets/images/hero-family.png';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showInheritanceLawModal, setShowInheritanceLawModal] = useState(false);
  const [showIntellectualPropertyModal, setShowIntellectualPropertyModal] = useState(false);
  const [showHinduSuccessionModal, setShowHinduSuccessionModal] = useState(false);

  // Persona State for Filter
  const [activePersona, setActivePersona] = useState<FAQ['category']>('daughter');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const featuredResources = resources.filter(r => r.featured);
  const featuredTeamMembers = team.filter(t => t.featured);

  const handleLearnMore = (title: string) => {
    if (title === "Inheritance Law") return () => setShowInheritanceLawModal(true);
    if (title === "Intellectual Property") return () => setShowIntellectualPropertyModal(true);
    if (title === "Hindu Succession Law") return () => setShowHinduSuccessionModal(true);
    return undefined;
  };

  return (
    <div>
      {showConsultationForm && (
        <ConsultationForm onClose={() => setShowConsultationForm(false)} />
      )}

      {showInheritanceLawModal && (
        <InheritanceLawModal onClose={() => setShowInheritanceLawModal(false)} />
      )}

      {showIntellectualPropertyModal && (
        <IntellectualPropertyModal onClose={() => setShowIntellectualPropertyModal(false)} />
      )}

      {showHinduSuccessionModal && (
        <HinduSuccessionModal onClose={() => setShowHinduSuccessionModal(false)} />
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-bg-muted dark:bg-bg-dark bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column: Text & Personas */}
            <div className="space-y-8 text-center lg:text-left">
              <FadeIn direction="up" duration={0.6}>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
                  <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
                  Rated #1 Indian Inheritance Firm
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-text-inverted leading-[1.15] mb-6 font-poppins">
                  Protect Your Family's <span className="text-accent relative inline-block">
                    Legacy
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                    </svg>
                  </span> in Property Disputes
                </h1>
                <p className="text-lg md:text-xl text-text-muted dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We specialize in simplifying complex Indian inheritance laws to secure your rightful share, prevent family feuds, and deliver peace of mind.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.2} duration={0.6}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                  <Button
                    size="large"
                    className="shadow-lg hover:shadow-xl hover:scale-105"
                    onClick={() => setShowConsultationForm(true)}
                  >
                    {t('hero.consultation')}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => {
                      const expertiseSection = document.getElementById('track-record');
                      expertiseSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('hero.explore')}
                  </Button>
                </div>

                {/* Integrated Persona Chips - REMOVED (Moved to dedicated strip below) */}
              </FadeIn>
            </div>

            {/* Right Column: Visual */}
            <FadeIn direction="left" delay={0.3} duration={0.8} className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <img
                  src={HeroImage}
                  alt="Indian multigenerational family"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <p className="font-bold text-lg">Safeguarding Relationships</p>
                  <p className="text-sm opacity-90">Beyond just property distribution</p>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-4 animate-float">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full text-green-600 dark:text-green-400">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary dark:text-white">500+</p>
                  <p className="text-xs text-text-muted">Families Helped</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div >
      </section >

      {/* Persona Strip - "Choose Your Situation" */}
      < div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 relative z-20 shadow-sm" >
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm font-semibold text-text-muted dark:text-gray-400 mb-4 uppercase tracking-wider">
            Choose your situation to understand your rights
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'widow-rights', label: 'Widow / Wife', icon: '👩' },
              { id: 'daughter-rights', label: 'Daughter / Sister', icon: '👧' },
              { id: 'nri-rights', label: 'NRI Heir', icon: '✈️' },
              { id: 'farmer-rights', label: 'Farmer / Land Owner', icon: '🌾' },
            ].map((persona) => (
              <button
                key={persona.id}
                aria-label={`Scroll to ${persona.label} section`}
                onClick={() => {
                  const element = document.getElementById(persona.id);
                  if (element) {
                    const offset = 100; // Adjust for sticky header or padding
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="flex items-center px-6 py-3 rounded-full bg-bg-muted dark:bg-gray-800 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200 border-2 border-transparent hover:border-accent group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="mr-2 text-xl group-hover:animate-pulse" aria-hidden="true">{persona.icon}</span>
                <span className="font-medium text-primary dark:text-white">{persona.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div >

      <TrustStrip />

      {/* Who We Help Section - 2 Column Layout */}
      <section className="py-24 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sticky Content Left */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <FadeIn direction="up">
                <div className="w-12 h-1 bg-accent mb-6 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-text-inverted mb-6 font-poppins leading-tight">
                  {t('whoWeHelp.title')}
                </h2>
                <p className="text-lg text-text-muted dark:text-gray-400 mb-8 leading-relaxed">
                  Every family's situation is unique. We provide specialized legal strategies tailored to your specific role in the property dispute.
                </p>
                <Button variant="outlined" className="hidden lg:inline-flex" onClick={() => setShowConsultationForm(true)}>
                  Discuss Your Case
                </Button>
              </FadeIn>
            </div>

            {/* Grid Content Right */}
            <div className="lg:col-span-8">
              <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StaggerItem id="widow-rights" className="flex flex-col p-8 bg-bg-muted dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/10 group scroll-mt-32">
                  <div className="w-14 h-14 mb-6 rounded-xl bg-primary/5 dark:bg-primary/20 text-primary dark:text-accent flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <HeartHandshake className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-xl text-primary dark:text-text-inverted mb-3">Widows Denied Share</h3>
                  <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">Legal support for claiming rights in husbands' ancestral property against in-laws.</p>
                </StaggerItem>

                <StaggerItem id="daughter-rights" className="flex flex-col p-8 bg-bg-muted dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/10 group scroll-mt-32">
                  <div className="w-14 h-14 mb-6 rounded-xl bg-primary/5 dark:bg-primary/20 text-primary dark:text-accent flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Users className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-xl text-primary dark:text-text-inverted mb-3">Married Daughters</h3>
                  <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">Securing equal coparcenary rights in father's HUF property post-2005 amendment.</p>
                </StaggerItem>

                <StaggerItem id="nri-rights" className="flex flex-col p-8 bg-bg-muted dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/10 group scroll-mt-32">
                  <div className="w-14 h-14 mb-6 rounded-xl bg-primary/5 dark:bg-primary/20 text-primary dark:text-accent flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Plane className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-xl text-primary dark:text-text-inverted mb-3">NRI Heirs</h3>
                  <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">Managing inheritance disputes, possession, and power of attorney remotely.</p>
                </StaggerItem>

                <StaggerItem id="farmer-rights" className="flex flex-col p-8 bg-bg-muted dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/10 group scroll-mt-32">
                  <div className="w-14 h-14 mb-6 rounded-xl bg-primary/5 dark:bg-primary/20 text-primary dark:text-accent flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Sprout className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-xl text-primary dark:text-text-inverted mb-3">Farmers & Landowners</h3>
                  <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">Resolving partition suits for agricultural land and revenue records.</p>
                </StaggerItem>
              </StaggerChildren>
              <div className="mt-8 lg:hidden">
                <Button variant="outlined" className="w-full" onClick={() => setShowConsultationForm(true)}>
                  Discuss Your Case
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Track Record Section - Dark Theme 2x2 Grid */}
      <section id="track-record" className="py-24 bg-primary text-white overflow-hidden relative">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -ml-40 -mb-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left">
              <FadeIn direction="up">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins leading-tight">
                  Our Track Record of <span className="text-accent">Success</span>
                </h2>
                <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We don't just give advice; we deliver results. Our proven history in high-stakes property disputes speaks for itself.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button onClick={() => setShowConsultationForm(true)} size="large" className="bg-accent text-primary hover:bg-white hover:text-primary border-none shadow-xl">
                    Get Free Advice
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Grid Stats */}
            <div>
              <StaggerChildren className="grid grid-cols-2 gap-4 sm:gap-6">
                <StaggerItem className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 group">
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform origin-left text-accent">93%</div>
                  <div className="h-0.5 w-12 bg-accent/50 mb-3"></div>
                  <div className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-widest">Success Rate</div>
                </StaggerItem>

                <StaggerItem className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 group">
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform origin-left">500+</div>
                  <div className="h-0.5 w-12 bg-white/30 mb-3"></div>
                  <div className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-widest">Clients Helped</div>
                </StaggerItem>

                <StaggerItem className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 group">
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform origin-left">100+</div>
                  <div className="h-0.5 w-12 bg-white/30 mb-3"></div>
                  <div className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-widest">Disputes Resolved</div>
                </StaggerItem>

                <StaggerItem className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 group">
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform origin-left">15+</div>
                  <div className="h-0.5 w-12 bg-white/30 mb-3"></div>
                  <div className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-widest">Landmark Judgments</div>
                </StaggerItem>
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-bg-muted dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary dark:text-text-inverted mb-4">{t('practiceAreas.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('practiceAreas.subtitle')}
            </p>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.slice(0, 6).map(area => {
              const handleClick = handleLearnMore(area.title);
              return (
                <StaggerItem key={area.id}>
                  <PracticeAreaCard
                    area={area}
                    onClick={handleClick}
                  />
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Common Questions (FAQ) Section */}
      <section id="common-questions" className="py-24 bg-bg-muted dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 tracking-wide uppercase">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-text-inverted mb-6 font-poppins">
              Questions families often ask us
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['widow', 'daughter', 'nri', 'farmer'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActivePersona(cat as any)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activePersona === cat
                    ? 'bg-primary text-text-inverted shadow-lg transform scale-105'
                    : 'bg-bg-default dark:bg-gray-700 text-text-muted dark:text-gray-300 hover:bg-bg-muted dark:hover:bg-gray-600 shadow-sm'
                    }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="relative z-10">
            <FAQAccordion faqs={faqs.filter(f => f.category === activePersona)} />
          </FadeIn>

          <FadeIn direction="up" delay={0.3} className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center shadow-xl border border-gray-100 dark:border-gray-600 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nayaysetu to-transparent opacity-50"></div>

              <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-primary dark:text-text-inverted mb-2">
                  Can't find your question?
                </h3>
                <p className="text-gray-500 dark:text-gray-300 mb-6">
                  Our legal experts are ready to help with your specific situation.
                </p>

                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => setShowConsultationForm(true)}
                  className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  Ask a Lawyer
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CaseStudies />

      {/* Why Choose Us - Split Layout */}
      <section className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Icon Grid */}
            <div className="order-2 lg:order-1">
              <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <StaggerItem className="p-6 bg-bg-muted dark:bg-gray-800 rounded-xl border-l-4 border-accent hover:shadow-md transition-shadow">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-primary dark:text-white mb-2">Inheritance Specialists</h3>
                  <p className="text-sm text-text-muted dark:text-gray-400">Exclusive focus on property & succession laws, knowing every nuance of the Hindu Succession Act.</p>
                </StaggerItem>

                <StaggerItem className="p-6 bg-bg-muted dark:bg-gray-800 rounded-xl border-l-4 border-accent hover:shadow-md transition-shadow">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-primary dark:text-white mb-2">Family Harmony</h3>
                  <p className="text-sm text-text-muted dark:text-gray-400">Prioritizing mediation and family settlements to resolve disputes amicably without court battles.</p>
                </StaggerItem>

                <StaggerItem className="p-6 bg-bg-muted dark:bg-gray-800 rounded-xl border-l-4 border-accent hover:shadow-md transition-shadow">
                  <svg className="w-8 h-8 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-lg font-bold text-primary dark:text-white mb-2">Clear Rights</h3>
                  <p className="text-sm text-text-muted dark:text-gray-400">Explaining legal rights in simple language so you can make informed decisions.</p>
                </StaggerItem>

                <StaggerItem className="p-6 bg-bg-muted dark:bg-gray-800 rounded-xl border-l-4 border-accent hover:shadow-md transition-shadow">
                  <svg className="w-8 h-8 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-lg font-bold text-primary dark:text-white mb-2">Time-Efficient</h3>
                  <p className="text-sm text-text-muted dark:text-gray-400">Strategic approach designed to conclude settlement or decree faster.</p>
                </StaggerItem>
              </StaggerChildren>
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-text-inverted mb-6 leading-tight">
                  Why Families Trust <br /> <span className="text-accent">Nayaysetu</span>
                </h2>
                <p className="text-lg text-text-muted dark:text-gray-300 mb-8 leading-relaxed">
                  Property disputes aren't just legal battles—they are family matters. We handle them with expertise of a large firm and the empathy of a family counselor.
                </p>
                <Button size="large" onClick={() => setShowConsultationForm(true)}>
                  Speak to an Expert
                </Button>
              </FadeIn>
            </div>

          </div>
        </div>
      </section >

      {/* Testimonials */}
      < section className="py-20 bg-bg-muted dark:bg-gray-800" >
        <div className="container mx-auto px-4">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary dark:text-text-inverted mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real stories from families we’ve helped with inheritance and property disputes in India.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map(testimonial => (
              <StaggerItem key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section >

      {/* Team */}
      < section className="py-20 bg-bg-default dark:bg-bg-dark" >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
            <FadeIn fullWidth>
              <h2 className="text-3xl font-bold text-primary dark:text-text-inverted mb-4">Meet Our Legal Team</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Our attorneys bring decades of focused experience in inheritance, ancestral property, and family property disputes in India.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <Link
                to="/team"
                className="text-primary dark:text-text-inverted font-medium inline-flex items-center hover:text-accent mt-4 md:mt-0"
              >
                View All Team Members
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </FadeIn>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTeamMembers.map(member => (
              <StaggerItem key={member.id}>
                <TeamMemberCard member={member} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section >

      {/* Resources */}
      < section className="py-20 bg-bg-muted dark:bg-bg-dark" >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
            <FadeIn fullWidth>
              <h2 className="text-3xl font-bold text-primary dark:text-text-inverted mb-4">Legal Resources</h2>
              <p className="text-xl text-text-muted dark:text-gray-300 max-w-2xl">
                Access guides, articles, and templates to help you navigate legal challenges.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <Link
                to="/resources"
                className="text-primary dark:text-text-inverted font-medium inline-flex items-center hover:text-accent mt-4 md:mt-0"
              >
                View All Resources
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </FadeIn>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map(resource => (
              <StaggerItem key={resource.id}>
                <ResourceCard resource={resource} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section >

      {/* CTA Section */}
      <ReadyToTalk />
    </div >
  );
};

export default Home;
