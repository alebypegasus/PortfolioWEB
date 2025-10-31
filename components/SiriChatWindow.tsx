import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { SiriTexts } from '../translations';
import SiriIcon from './icons/SiriIcon';
import SendIcon from './icons/SendIcon';
import MicrophoneIcon from './icons/MicrophoneIcon';
import CloseIcon from './icons/CloseIcon';

interface SiriChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  texts: SiriTexts;
  portfolioContext: string;
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

// FIX: Safely check for SpeechRecognition API only in a browser environment to prevent load-time errors.
const isBrowser = typeof window !== 'undefined';
const SpeechRecognition = isBrowser ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition : null;
const isSpeechRecognitionSupported = !!SpeechRecognition;

const SiriChatWindow: React.FC<SiriChatWindowProps> = ({ isOpen, onClose, texts, portfolioContext }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const transcriptRef = useRef(''); // Use ref to avoid stale closures with transcriptions

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'assistant', text: texts.greeting }]);
    }
  }, [isOpen, texts.greeting, messages.length]);
  
  useEffect(() => {
     if (isOpen && !chatRef.current) {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const modelConfig = {
                systemInstruction: texts.systemPrompt + portfolioContext,
            };
            chatRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: modelConfig,
            });
        } catch (error) {
            console.error("Failed to initialize GoogleGenAI:", error);
            setMessages(prev => [...prev, { role: 'assistant', text: "Desculpe, não consigo me conectar à IA no momento." }]);
        }
    }
  }, [isOpen, texts.systemPrompt, portfolioContext]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = useCallback(async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    transcriptRef.current = ''; // Reset transcript ref
    setIsLoading(true);

    try {
        if (!chatRef.current) {
            throw new Error("Chat not initialized");
        }
        const response = await chatRef.current.sendMessage({ message: messageText });
        const assistantMessage: Message = { role: 'assistant', text: response.text };
        setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        const errorMessage: Message = { role: 'assistant', text: "Desculpe, ocorreu um erro ao processar sua pergunta." };
        setMessages(prev => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  }, [isLoading]);
  
  const handleMicClick = useCallback(() => {
    if (!isSpeechRecognitionSupported) {
        alert("Desculpe, seu navegador não suporta reconhecimento de voz.");
        return;
    }

    if (isListening) {
        recognitionRef.current?.stop();
        return; // onend will handle the rest
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = 'pt-BR';
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onstart = () => setIsListening(true);
    
    recognitionRef.current.onend = () => {
        setIsListening(false);
        // Use the ref to get the most up-to-date transcript and send it
        if (transcriptRef.current) {
           handleSendMessage(transcriptRef.current);
        }
    };

    recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
    };
    
    recognitionRef.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
            .map((result: any) => result[0])
            .map((result) => result.transcript)
            .join('');
        
        // Update both state (for UI) and ref (for logic)
        setInputValue(transcript);
        transcriptRef.current = transcript;
    };
    
    recognitionRef.current.start();
  }, [isListening, handleSendMessage]);

  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <div className={`siri-chat-window ${!isOpen ? 'hidden' : ''} no-print`}>
      <header className="flex-shrink-0 p-4 flex items-center justify-between border-b border-white/10 dark:border-black/20">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8"><SiriIcon animated={isLoading || isListening} /></div>
            <h3 className="font-bold text-lg text-black dark:text-white">Assistente</h3>
        </div>
        <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors" aria-label="Fechar chat">
            <CloseIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>
      </header>
      
      <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-2">
        {messages.map((msg, index) => (
          <div key={index} className={`message-bubble ${msg.role}`}>
            <p>{msg.text}</p>
          </div>
        ))}
        {isLoading && (
            <div className="message-bubble assistant">
                <div className="typing-indicator text-gray-500 dark:text-gray-400">
                    <span></span><span></span><span></span>
                </div>
            </div>
        )}
         {messages.length === 1 && (
            <div className="mt-4 flex flex-col gap-2">
                {texts.suggestedQuestions.map((q, i) => (
                    <button 
                        key={i}
                        onClick={() => handleSuggestedQuestion(q)}
                        className="text-left text-sm p-3 bg-black/5 dark:bg-white/5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-blue-600 dark:text-blue-400"
                    >
                        {q}
                    </button>
                ))}
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <footer className="flex-shrink-0 p-3 border-t border-white/10 dark:border-black/20">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={isListening ? "Ouvindo..." : texts.placeholder}
            className="flex-grow bg-black/10 dark:bg-white/10 text-sm py-2 px-4 rounded-full border-none focus:ring-2 focus:ring-blue-500 focus:outline-none text-black dark:text-white"
            disabled={isLoading}
          />
           {isSpeechRecognitionSupported && (
             <button
                type="button"
                onClick={handleMicClick}
                className={`mic-button w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center transition-colors ${isListening ? 'is-listening' : 'hover:bg-black/10 dark:hover:bg-white/10'}`}
                aria-label="Usar microfone"
             >
                <MicrophoneIcon className="w-5 h-5" />
             </button>
           )}
          <button type="submit" className="w-9 h-9 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center text-white disabled:opacity-50" disabled={!inputValue.trim() || isLoading} aria-label="Enviar mensagem">
            <SendIcon className="w-5 h-5" />
          </button>
        </form>
      </footer>
    </div>
  );
};

export default SiriChatWindow;