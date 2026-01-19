import React, { useState } from 'react';
import Card from './Card';
import { Resource } from '../../data/resources';
import Button from './Button';
import { X, Video, FileText, BookOpen, Download } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const { title, description, type, downloadUrl, imageUrl, content, topics } = resource;
  const [showArticle, setShowArticle] = useState(false);

  const getTypeIcon = () => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'guide': return <BookOpen className="w-4 h-4" />;
      case 'template': return <Download className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getActionLabel = () => {
    switch (type) {
      case 'video': return "Watch Video";
      case 'article': return "Read Article";
      case 'guide': return "View Guide";
      case 'template': return "Download Template";
      default: return "View Resource";
    }
  };

  return (
    <>
      <Card hoverEffect className="h-full flex flex-col group overflow-hidden border border-gray-100 dark:border-gray-800">
        <div className="h-48 overflow-hidden relative bg-gray-100">
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-bold text-gray-800 dark:text-gray-200 flex items-center gap-1.5 shadow-sm">
            {getTypeIcon()}
            <span className="uppercase tracking-wide">{type}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-3">
            {topics?.slice(0, 3).map((topic, i) => (
              <span key={i} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] uppercase font-bold tracking-wider rounded-sm">
                {topic}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1 line-clamp-2 leading-relaxed">
            {description}
          </p>

          <div className="mt-auto">
            {downloadUrl ? (
              <Button
                variant="outlined"
                className="w-full justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                onClick={() => window.open(downloadUrl, '_blank')}
              >
                {getActionLabel()}
              </Button>
            ) : content ? (
              <Button
                variant="outlined"
                className="w-full justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                onClick={() => setShowArticle(true)}
              >
                {getActionLabel()}
              </Button>
            ) : null}
          </div>
        </div>
      </Card>

      {/* Article Modal */}
      {showArticle && content && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col border border-gray-200 dark:border-gray-800">
            <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-gray-900 sticky top-0 z-10">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white pr-8 line-clamp-1">{title}</h2>
              <button
                onClick={() => setShowArticle(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-500"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 overflow-y-auto custom-scrollbar">
              <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-a:text-primary">
                {/* Simple markdown rendering (replace with proper MD parser in production) */}
                {content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('# ')) return <h1 key={index} className="text-2xl mb-4">{paragraph.replace('# ', '')}</h1>;
                  if (paragraph.startsWith('## ')) return <h2 key={index} className="text-xl mt-6 mb-3">{paragraph.replace('## ', '')}</h2>;
                  if (paragraph.startsWith('- ')) return <ul key={index} className="list-disc pl-5 mb-4">{paragraph.split('\n').map((li, i) => <li key={i}>{li.replace('- ', '')}</li>)}</ul>;
                  return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
                })}
              </div>
            </div>

            <div className="p-5 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex justify-end">
              <Button variant="primary" onClick={() => setShowArticle(false)}>Close Resource</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResourceCard;