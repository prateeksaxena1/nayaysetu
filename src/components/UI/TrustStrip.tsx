import React from 'react';
import { Shield, Award, Landmark, MapPin } from 'lucide-react';
import FadeIn from '../Animations/FadeIn';

const TrustStrip: React.FC = () => {
    return (
        <section className="bg-primary text-text-inverted py-12 relative overflow-hidden border-b border-white/10">
            {/* Subtle Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn direction="up">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/20">

                        <div className="flex flex-col items-center text-center px-4">
                            <Shield className="w-8 h-8 text-accent mb-3" />
                            <h3 className="text-2xl font-bold mb-1 font-poppins">Property Law</h3>
                            <p className="text-sm text-gray-300 font-medium uppercase tracking-wider">Specialized Experts</p>
                        </div>

                        <div className="flex flex-col items-center text-center px-4">
                            <MapPin className="w-8 h-8 text-accent mb-3" />
                            <h3 className="text-2xl font-bold mb-1 font-poppins">Pan-India</h3>
                            <p className="text-sm text-gray-300 font-medium uppercase tracking-wider">Representing NRIs</p>
                        </div>

                        <div className="flex flex-col items-center text-center px-4">
                            <Award className="w-8 h-8 text-accent mb-3" />
                            <h3 className="text-2xl font-bold mb-1 font-poppins">Decades</h3>
                            <p className="text-sm text-gray-300 font-medium uppercase tracking-wider">Combined Experience</p>
                        </div>

                        <div className="flex flex-col items-center text-center px-4">
                            <Landmark className="w-8 h-8 text-accent mb-3" />
                            <h3 className="text-2xl font-bold mb-1 font-poppins">Proven</h3>
                            <p className="text-sm text-gray-300 font-medium uppercase tracking-wider">Landmark Judgments</p>
                        </div>

                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default TrustStrip;
