import React, { useEffect } from 'react';
import ContactForm from '../components/UI/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import FadeIn from '../components/Animations/FadeIn';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-text-inverted">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We're here to listen. Tell us about your situation, and let our experts guide you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Form (Span 7) */}
            <div className="md:col-span-12 lg:col-span-7">
              <h2 className="text-2xl font-bold text-text-default mb-6 hidden lg:block">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Right Column: Info & Reassurance (Span 5) */}
            <div className="md:col-span-12 lg:col-span-5 space-y-8">

              {/* Reassurance Block */}
              <div className="bg-bg-default dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-lg text-primary mb-6">What happens after you contact us:</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-nayaysetu dark:text-blue-200 font-bold text-sm">1</div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-text-default dark:text-white">We review your message</p>
                      <p className="text-sm text-text-muted dark:text-gray-300">Our legal team reviews your details within 24 hours.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-nayaysetu dark:text-blue-200 font-bold text-sm">2</div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900 dark:text-white">Expert Callback</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">A lawyer or case manager calls you to understand your issue.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-700 dark:text-green-200 font-bold text-sm">3</div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900 dark:text-white">You decide to proceed</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">No obligation to hire us. You decide only when you are comfortable.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-primary p-8 rounded-xl text-text-inverted shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-text-inverted border-b border-white/20 pb-4">Contact Information</h3>

                <div className="space-y-6">
                  <a href="tel:+918302553346" className="flex items-start group transition-opacity hover:opacity-90">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-xs text-gray-300 uppercase tracking-wider font-semibold">Call Us</p>
                      <p className="text-lg font-medium text-white">+91 8302553346</p>
                    </div>
                  </a>

                  <a href="mailto:info@nayaysetu.com" className="flex items-start group transition-opacity hover:opacity-90">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-xs text-gray-300 uppercase tracking-wider font-semibold">Email Us</p>
                      <p className="text-lg font-medium text-white">info@nayaysetu.com</p>
                    </div>
                  </a>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-xs text-gray-300 uppercase tracking-wider font-semibold">Visit Office</p>
                      <p className="text-base text-gray-200 mt-1 leading-relaxed">
                        JK Lakshmipat University,<br />
                        Mahapura, Ajmer Road,<br />
                        Jaipur, Rajasthan 302026
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start pt-4 border-t border-white/10">
                    <div className="w-10 h-10 flex items-center justify-center text-accent flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-xs text-gray-300 uppercase tracking-wider font-semibold">Office Hours</p>
                      <p className="text-base text-gray-200 mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full">
        <iframe
          title="Locate Us"
          src="https://maps.google.com/maps?q=JK+Lakshmipat+University,+Jaipur,+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;