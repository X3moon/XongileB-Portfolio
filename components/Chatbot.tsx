import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { Bot, X, Send, User, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, TECHNICAL_SKILLS, CAREER_LINKS, NAV_LINKS } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const [ai, setAi] = useState<GoogleGenAI | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const portfolioContext = `
    My name is ${PERSONAL_INFO.name}.
    My bio is: ${PERSONAL_INFO.bio}.
    My skills are: ${TECHNICAL_SKILLS.map(s => s.name).join(', ')}.
    My projects are: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join('; ')}.
    My resume can be downloaded. My GitHub is ${CAREER_LINKS.github}. My Calendly link for meetings is ${CAREER_LINKS.calendly}.
    Website sections are: ${NAV_LINKS.map(l => l.name).join(', ')}.
  `;

  const systemInstruction = `You are Port Pal, a friendly, professional, and concise AI assistant for Xongile Baloyi's portfolio website. Your goal is to help users learn about Xongile and navigate the site.
    IMPORTANT: Xongile Baloyi is female, so you must use she/her pronouns when referring to her.
    You have the following information about Xongile: ${portfolioContext}
    
    RULES:
    1.  Introduce yourself and Xongile in your first message.
    2.  Keep responses friendly and concise (1-3 sentences).
    3.  When a user asks to see a section, respond with a friendly message and the command: [GOTO:#section_id]. Use the section IDs from this list: ${NAV_LINKS.map(l => `${l.name} -> ${l.href}`).join(', ')}.
    4.  When asked for the resume, respond with a message and the command: [DOWNLOAD_RESUME].
    5.  When asked for GitHub or to schedule a meeting, provide the link in your text response.
    6.  If the user asks to "test sentiment" or "analyze text", ask them for the text. When they provide the text you asked for, you MUST respond with ONLY the command: [ANALYZE_SENTIMENT:the user's text]. Do not add any other words.
    7.  Do not answer questions unrelated to Xongile's portfolio. Politely decline.
    `;

  useEffect(() => {
    if (isOpen) {
        const initChat = async () => {
            try {
                const genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
                setAi(genAI);
                const newChat = genAI.chats.create({
                    model: 'gemini-2.5-flash',
                    config: { systemInstruction },
                });
                setChat(newChat);
                setMessages([{ role: 'model', text: `Hi! I'm Port Pal, your AI guide to ${PERSONAL_INFO.name}'s portfolio. You can ask me about her projects, skills, or ask me to take you to a specific section. How can I help?` }]);
            } catch (error) {
                console.error("Failed to initialize chatbot:", error);
                setMessages([{ role: 'model', text: "Sorry, I'm having trouble connecting right now." }]);
            }
        };
        initChat();
    } else {
        setMessages([]);
        setInput('');
        setChat(null);
        setAi(null);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  const triggerResumeDownload = () => {
      const link = document.createElement('a');
      link.href = CAREER_LINKS.resume;
      link.setAttribute('download', 'Xongile-Baloyi-Resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  const performSentimentAnalysis = async (textToAnalyze: string) => {
    setIsLoading(true);
    try {
        if (!ai) throw new Error("AI not initialized");
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `Analyze the sentiment of the following text. Respond with only one word: Positive, Negative, or Neutral. Text: "${textToAnalyze}"`,
        });
        const sentiment = response.text.trim();
        setMessages(prev => [...prev, { role: 'model', text: `The sentiment of the text appears to be: **${sentiment}**` }]);
    } catch (error) {
        console.error("Sentiment analysis failed:", error);
        setMessages(prev => [...prev, { role: 'model', text: "I couldn't analyze the sentiment right now." }]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chat) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const response = await chat.sendMessage({ message: userMessage.text });
        let botText = response.text;
      
        const gotoRegex = /\[GOTO:(#[a-zA-Z0-9_-]+)\]/;
        const downloadRegex = /\[DOWNLOAD_RESUME\]/;
        const sentimentRegex = /\[ANALYZE_SENTIMENT:(.+?)\]/s;

        const gotoMatch = botText.match(gotoRegex);
        const downloadMatch = botText.match(downloadRegex);
        const sentimentMatch = botText.match(sentimentRegex);

        if (gotoMatch?.[1]) {
            botText = botText.replace(gotoRegex, '').trim();
            scrollToSection(gotoMatch[1]);
        } else if (downloadMatch) {
            botText = botText.replace(downloadRegex, '').trim();
            triggerResumeDownload();
        } else if (sentimentMatch?.[1]) {
            // This case is handled by the model's special command output.
            // We just need to call the analysis function and not display this command.
            await performSentimentAnalysis(sentimentMatch[1]);
            return; // Stop further processing
        }
      
        if (botText) {
          setMessages(prev => [...prev, { role: 'model', text: botText }]);
        }
    } catch (error) {
        console.error("Error sending message:", error);
        setMessages(prev => [...prev, { role: 'model', text: "Oops! Something went wrong." }]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-amber-500 text-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
        aria-label="Open Port Pal"
      >
        <Bot size={32} />
      </button>
      <div
        className={`fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-sm h-[70vh] max-h-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Port Pal
          </h3>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-amber-500 flex items-center justify-center text-white flex-shrink-0"><Bot size={20}/></div>}
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${msg.role === 'user' ? 'bg-purple-500 text-white rounded-br-none' : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none'}`}>
                <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
              </div>
               {msg.role === 'user' && <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 flex-shrink-0"><User size={20}/></div>}
            </div>
          ))}
          {isLoading && (
             <div className="flex items-start gap-3 justify-start">
               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-amber-500 flex items-center justify-center text-white flex-shrink-0"><Bot size={20}/></div>
               <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-bl-none">
                 <div className="flex items-center space-x-1">
                   <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-0"></span>
                   <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                   <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
                 </div>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="w-full pl-4 pr-12 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
              disabled={isLoading}
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-purple-500 text-white disabled:bg-gray-400 transition-colors" disabled={isLoading || !input.trim()}>
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chatbot;