import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import Button from '../UI/Button';
import { useLanguage } from '../../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';

interface Message {
  type: 'bot' | 'user';
  content: string;
  options?: string[];
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  caseDescription: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentStep, setCurrentStep] = useState<'initial' | 'consultation' | 'questions' | 'userInfo' | 'caseInfo'>('initial');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    phone: '',
    caseDescription: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Show welcome bubble after 3 seconds
    const timer = setTimeout(() => {
      if (!isOpen) setShowWelcome(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setShowWelcome(false);
    }

    if (isOpen && messages.length === 0) {
      const greeting = language === 'hi'
        ? "नमस्ते! मैं न्याय सेतु का कानूनी सहायक हूं। मैं आपकी कैसे मदद कर सकता हूं?\n\n" +
        "1. मुफ्त कानूनी परामर्श बुक करें\n" +
        "2. वारिस कानून के बारे में जानें\n" +
        "3. संपत्ति विवाद में सहायता प्राप्त करें"
        : "Welcome to Nyaya Setu Legal Assistant (These are Anonymous Chats). How can I help you today?\n\n" +
        "1. Book a free legal consultation\n" +
        "2. Learn about inheritance law\n" +
        "3. Get help with property disputes";

      addBotMessage(greeting);
    }
    scrollToBottom();
  }, [isOpen, messages, language]);

  const addBotMessage = (content: string, options?: string[]) => {
    setMessages(prev => [...prev, { type: 'bot', content, options }]);
  };

  const addUserMessage = (content: string) => {
    setMessages(prev => [...prev, { type: 'user', content }]);
  };

  const handleInheritanceLawInfo = () => {
    const content = language === 'hi'
      ? "वारिस कानून के बारे में महत्वपूर्ण जानकारी:\n\n" +
      "• हिंदू उत्तराधिकार अधिनियम, 1956\n" +
      "• वसीयत और प्रोबेट\n" +
      "• संपत्ति के अधिकार\n\n" +
      "किस विषय के बारे में और जानना चाहेंगे?\n\n" +
      "1. हिंदू उत्तराधिकार अधिनियम\n" +
      "2. वसीयत कैसे बनाएं\n" +
      "3. प्रमुख कोर्ट केस"
      : "Key information about inheritance law:\n\n" +
      "• Hindu Succession Act, 1956\n" +
      "• Wills and Probate\n" +
      "• Property Rights\n\n" +
      "What would you like to learn more about?\n\n" +
      "1. Hindu Succession Act\n" +
      "2. How to make a will\n" +
      "3. Landmark court cases";

    addBotMessage(content);
    setCurrentStep('questions');
  };

  const handlePropertyDispute = () => {
    const content = language === 'hi'
      ? "मैं आपकी संपत्ति विवाद में मदद कर सकता हूं। कृपया निम्नलिखित में से चुनें:\n\n" +
      "1. अपना केस साझा करें\n" +
      "2. कानूनी सलाह प्राप्त करें\n" +
      "3. वकील से मिलें"
      : "I can help you with your property dispute. Please choose from the following:\n\n" +
      "1. Share your case\n" +
      "2. Get legal advice\n" +
      "3. Meet with a lawyer";

    addBotMessage(content);
    setCurrentStep('caseInfo');
  };

  const handleLandmarkCases = () => {
    const content = language === 'hi'
      ? "प्रमुख सुप्रीम कोर्ट केस:\n\n" +
      "**विनीता शर्मा बनाम राकेश शर्मा**\n" +
      "• महिलाओं के संपत्ति अधिकारों की पुष्टि\n" +
      "• जन्म से ही सह-उत्तराधिकारी का दर्जा\n\n" +
      "**अरुणाचला गौंडर बनाम पोन्नुसामी**\n" +
      "• हिंदू महिलाओं के संपत्ति अधिकार\n" +
      "• पैतृक संपत्ति में बराबर हिस्सा\n\n" +
      "**मुन्नी देवी बनाम राजेंद्र उर्फ लल्लू**\n" +
      "• विधवा के अधिकारों की रक्षा\n" +
      "• संपत्ति में जीवन भर का अधिकार"
      : "Landmark Supreme Court Cases:\n\n" +
      "**Vineeta Sharma vs Rakesh Sharma**\n" +
      "• Confirmed women's property rights\n" +
      "• Coparcener status by birth\n\n" +
      "**Arunachala Gounder vs Ponnusamy**\n" +
      "• Hindu women's property rights\n" +
      "• Equal share in ancestral property\n\n" +
      "**Munni Devi vs Rajendra alias Lallu**\n" +
      "• Protection of widow's rights\n" +
      "• Lifetime right in property";

    addBotMessage(content);
  };

  const handleInitialResponse = (response: string) => {
    addUserMessage(response);

    switch (response) {
      case '1':
        setCurrentStep('consultation');
        const consultMsg = language === 'hi'
          ? "मुफ्त परामर्श के लिए मुझे कुछ जानकारी की आवश्यकता होगी।\n\nआपका नाम क्या है?"
          : "I'll help you schedule a free consultation. First, I'll need some information from you.\n\nWhat's your name?";
        addBotMessage(consultMsg);
        break;
      case '2':
        handleInheritanceLawInfo();
        break;
      case '3':
        handlePropertyDispute();
        break;
      default:
        const defaultMsg = language === 'hi'
          ? "कृपया 1, 2, या 3 में से एक विकल्प चुनें।"
          : "Please select option 1, 2, or 3.";
        addBotMessage(defaultMsg);
    }
  };

  const handleUserInfoInput = (value: string) => {
    switch (currentStep) {
      case 'consultation':
        if (!userInfo.name) {
          setUserInfo(prev => ({ ...prev, name: value }));
          addUserMessage(value);
          const emailMsg = language === 'hi'
            ? `नमस्ते ${value}। आपका ईमेल पता क्या है?`
            : `Nice to meet you, ${value}. What's your email address?`;
          addBotMessage(emailMsg);
        } else if (!userInfo.email) {
          setUserInfo(prev => ({ ...prev, email: value }));
          addUserMessage(value);
          const phoneMsg = language === 'hi'
            ? "आपका फोन नंबर क्या है?"
            : "Thank you. And your phone number?";
          addBotMessage(phoneMsg);
        } else if (!userInfo.phone) {
          setUserInfo(prev => ({ ...prev, phone: value }));
          addUserMessage(value);
          const caseMsg = language === 'hi'
            ? "कृपया अपने कानूनी मामले का संक्षिप्त विवरण दें:"
            : "Please briefly describe your legal matter:";
          addBotMessage(caseMsg);
        } else {
          setUserInfo(prev => ({ ...prev, caseDescription: value }));
          addUserMessage(value);
          const thankMsg = language === 'hi'
            ? "धन्यवाद। हमारा कानूनी प्रतिनिधि 24 घंटे के भीतर आपसे संपर्क करेगा।\n\nक्या मैं आपकी और मदद कर सकता हूं?\n\n1. वारिस कानून के बारे में जानें\n2. और जानकारी प्राप्त करें\n3. चैट समाप्त करें"
            : "Thank you. Our legal representative will contact you within 24 hours.\n\nIs there anything else I can help you with?\n\n1. Learn about inheritance law\n2. Get more information\n3. End chat";
          addBotMessage(thankMsg);
          setCurrentStep('initial');
        }
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    switch (currentStep) {
      case 'initial':
        handleInitialResponse(inputValue);
        break;
      case 'consultation':
        handleUserInfoInput(inputValue);
        break;
      case 'questions':
        if (inputValue === '3') {
          handleLandmarkCases();
        } else {
          addUserMessage(inputValue);
          const consultMsg = language === 'hi'
            ? "इस विषय पर विस्तृत जानकारी के लिए, मैं सुझाव देता हूं कि आप हमारे वकील से सीधे बात करें।\n\nक्या आप चाहेंगे:\n\n1. मुफ्त परामर्श शेड्यूल करें\n2. कोई अन्य प्रश्न पूछें\n3. चैट समाप्त करें"
            : "For detailed guidance on this topic, I recommend speaking with one of our attorneys directly.\n\nWould you like to:\n\n1. Schedule a free consultation\n2. Ask another question\n3. End chat";
          addBotMessage(consultMsg);
          setCurrentStep('initial');
        }
        break;
      case 'caseInfo':
        addUserMessage(inputValue);
        const helpMsg = language === 'hi'
          ? "आपकी स्थिति को समझने के लिए धन्यवाद। सबसे अच्छी सहायता के लिए, मैं सुझाव देता हूं कि आप हमारे वकील से व्यक्तिगत रूप से मिलें।\n\nक्या आप मुफ्त परामर्श शेड्यूल करना चाहेंगे?"
          : "Thank you for sharing your situation. For the best assistance, I recommend meeting with our lawyer in person.\n\nWould you like to schedule a free consultation?";
        addBotMessage(helpMsg);
        setCurrentStep('initial');
        break;
      default:
        handleInitialResponse(inputValue);
    }

    setInputValue('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-end flex-col space-y-4">
      {/* Welcome Popup Bubble */}
      {showWelcome && !isOpen && (
        <div className="animate-fade-in-up bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 rounded-lg shadow-xl max-w-[250px] mb-2 relative border border-gray-100 dark:border-gray-700">
          <button
            onClick={(e) => { e.stopPropagation(); setShowWelcome(false); }}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            <X size={14} />
          </button>
          <div onClick={() => setIsOpen(true)} className="cursor-pointer">
            <p className="text-sm font-medium mb-1">
              {language === 'hi' ? 'नमस्ते! क्या मैं मदद कर सकता हूँ?' : 'Hi! Need legal help?'}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {language === 'hi' ? 'मुझसे पूछें...' : 'Ask me about property rights...'}
            </p>
          </div>
          {/* Tail for bubble */}
          <div className="absolute -bottom-2 right-12 md:right-8 w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45 border-b border-r border-gray-100 dark:border-gray-700"></div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-nayaysetu text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-nayaysetu/90 transition-colors transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-nayaysetu"
        aria-label={isOpen ? "Close Chat Assistant" : "Open Chat Assistant"}
        aria-expanded={isOpen}
        aria-controls="chat-window"
      >
        {isOpen ? <X size={20} className="md:w-6 md:h-6" /> : <MessageSquare size={20} className="md:w-6 md:h-6" />}
      </button>

      {isOpen && (
        <div
          id="chat-window"
          role="dialog"
          aria-label="Chat Assistant"
          className="absolute bottom-16 right-0 w-[calc(100vw-2rem)] sm:w-[350px] md:w-96 bg-white rounded-lg shadow-xl overflow-hidden max-h-[80vh] flex flex-col border border-gray-200 dark:border-gray-700"
        >
          <div className="bg-nayaysetu p-3 md:p-4 text-white">
            <h3 className="text-base md:text-lg font-semibold">
              {language === 'hi' ? 'कानूनी सहायक' : 'Legal Assistant'}
            </h3>
            <p className="text-xs md:text-sm opacity-90">
              {language === 'hi' ? 'हम मदद के लिए यहां हैं' : "We're here to help"}
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 min-h-[300px] max-h-[400px]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-2.5 md:p-3 text-sm md:text-base ${message.type === 'user'
                    ? 'bg-nayaysetu text-white'
                    : 'bg-gray-100 text-gray-800'
                    }`}
                >
                  <ReactMarkdown className="prose prose-sm md:prose-base max-w-none prose-p:leading-relaxed prose-p:my-1 text-inherit">
                    {message.content}
                  </ReactMarkdown>

                  {message.type === 'bot' && message.options && message.options.length > 0 && (
                    <div className="mt-3 flex flex-col gap-2">
                      {message.options.map((option, optIndex) => (
                        <button
                          key={optIndex}
                          onClick={() => setInputValue((optIndex + 1).toString())}
                          className="text-left text-xs bg-white border border-gray-300 hover:bg-gray-50 text-nayaysetu px-3 py-2 rounded transition-colors shadow-sm"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 md:p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={language === 'hi' ? 'अपना संदेश लिखें...' : 'Type your message...'}
                className="flex-1 px-3 md:px-4 py-2 text-sm md:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-nayaysetu focus:border-transparent"
              />
              <Button type="submit" className="px-3 md:px-4 py-2">
                <Send size={18} className="md:w-5 md:h-5" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;