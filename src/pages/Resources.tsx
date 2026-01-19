import React, { useState, useEffect } from 'react';
import ResourceCard from '../components/UI/ResourceCard';
import { resources } from '../data/resources';
import Button from '../components/UI/Button';
import FadeIn from '../components/Animations/FadeIn';
import ReadyToTalk from '../components/UI/ReadyToTalk';

const ResourcesPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [filteredResources, setFilteredResources] = useState(resources);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFilteredResources(
      resources.filter(resource => {
        return selectedTopic === 'all' || resource.topics?.includes(selectedTopic);
      })
    );
  }, [selectedTopic]);



  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-text-inverted">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Resources Library</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Expert guides, articles, and videos to help you understand your property rights.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Topics Filter */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-30 shadow-sm backdrop-blur-md bg-white/90 dark:bg-gray-900/90 supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4 overflow-x-auto hide-scrollbar">
          <div className="flex flex-nowrap md:justify-center gap-3 min-w-max px-2">
            {[
              { id: 'all', label: 'All Topics' },
              { id: "Women's Rights", label: "Women's Rights" },
              { id: 'NRIs', label: 'NRI Property' },
              { id: 'No Will / Intestate', label: 'No Will / Intestate' },
              { id: 'Agricultural Land', label: 'Agricultural Land' },
              { id: 'Court Judgments', label: 'Court Judgments' },
            ].map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap border ${selectedTopic === topic.id
                  ? 'bg-primary text-white border-primary shadow-md transform scale-105'
                  : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300'
                  }`}
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-bg-muted min-h-[60vh]">
        <div className="container mx-auto px-4">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No resources found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any resources for this topic.
              </p>
              <Button
                variant="outlined"
                onClick={() => setSelectedTopic('all')}
              >
                View All Resources
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Global CTA */}
      <ReadyToTalk />
    </div>
  );
};

export default ResourcesPage;