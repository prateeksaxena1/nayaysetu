import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Scale } from 'lucide-react';
import StaggerChildren, { StaggerItem } from '../Animations/StaggerChildren';
import FadeIn from '../Animations/FadeIn';
import { caseStudies } from '../../data/caseStudies';

const CaseStudies: React.FC = () => {
    const flagshipCase = caseStudies[0];
    const otherCases = caseStudies.slice(1, 4);

    return (
        <section className="py-24 bg-bg-muted dark:bg-bg-dark relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
                    <FadeIn fullWidth>
                        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Real Results</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-text-inverted mb-4 font-poppins">
                            Featured Case Studies
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                            See how we navigate complex legal landscapes to secure justice for our clients.
                        </p>
                    </FadeIn>
                    <FadeIn direction="left" delay={0.2}>
                        <Link
                            to="/case-studies"
                            className="text-primary font-medium inline-flex items-center hover:text-accent mt-4 md:mt-0 group transition-colors"
                        >
                            View All Cases
                            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeIn>
                </div>

                {/* Flagship Case Study */}
                <FadeIn className="mb-16">
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Visual / Image Side */}
                            <div className="relative h-64 lg:h-auto overflow-hidden">
                                <img
                                    src={flagshipCase.imageUrl}
                                    alt={flagshipCase.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                                        Flagship Victory
                                    </span>
                                    <h3 className="text-2xl font-bold font-poppins text-white mb-1">{flagshipCase.title}</h3>
                                    <p className="text-white/80 text-sm flex items-center">
                                        <Scale className="w-4 h-4 mr-2" />
                                        {flagshipCase.category}
                                    </p>
                                </div>
                            </div>

                            {/* Narrative Side */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="space-y-8">
                                    {/* Problem */}
                                    <div className="relative pl-8 border-l-2 border-red-200">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-100 border-2 border-red-500"></div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Challenge</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            {flagshipCase.challenge}
                                        </p>
                                    </div>

                                    {/* Strategy */}
                                    <div className="relative pl-8 border-l-2 border-blue-200">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-500"></div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Our Approach</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            {flagshipCase.solution}
                                        </p>
                                    </div>

                                    {/* Outcome */}
                                    <div className="relative pl-8 border-l-2 border-green-200">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-100 border-2 border-green-500"></div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Outcome</h4>
                                        <p className="text-gray-800 dark:text-gray-200 font-medium text-sm leading-relaxed">
                                            {flagshipCase.result}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Other Cases Grid */}
                <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherCases.map((feature) => (
                        <StaggerItem key={feature.id} className="h-full">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 flex flex-col h-full group">
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-primary/70 dark:text-primary/90 bg-primary/5 px-2 py-1 rounded uppercase tracking-wide">
                                        {feature.category}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <div className="space-y-3 mb-6 flex-1">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                                        <span className="font-semibold text-gray-700 dark:text-gray-300">Challenge: </span>
                                        {feature.challenge}
                                    </p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-gray-50 dark:border-gray-700 flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Outcome: </span>
                                        {feature.outcome}
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
};

export default CaseStudies;
