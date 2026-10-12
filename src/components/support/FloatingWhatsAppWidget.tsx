'use client';

import React, { useState } from 'react';
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  ChevronDown,
  HelpCircle,
  Clock,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { FAQ_ITEMS } from '@/data/products';

export const FloatingWhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'faq'>('chat');
  const [customMessage, setCustomMessage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<'morocco' | 'uae'>('morocco');

  const branches = {
    morocco: {
      name: 'المغرب (Morocco)',
      flag: '🇲🇦',
      callPhone: '+212610111314',
      callDisplay: '+212 610 11 13 14',
      whatsappPhone: '212611650381',
      whatsappDisplay: '+212 611 65 03 81',
      city: 'Casablanca Concierge'
    },
    uae: {
      name: 'الإمارات والخليج',
      flag: '🇦🇪',
      callPhone: '+97148889922',
      callDisplay: '+971 4 888 9922',
      whatsappPhone: '971508889922',
      whatsappDisplay: '+971 50 888 9922',
      city: 'Dubai Flagship'
    }
  };

  const currentBranch = branches[selectedBranch];

  const quickPrompts = [
    { title: '🇲🇦 استفسار وتوصيل المغرب', text: 'السلام عليكم فريق FRASHI! أود الاستفسار عن تصاميم الأثاث ومواعيد التوصيل في المغرب.' },
    { title: '🛋️ عينات الأقمشة والبوكلي', text: 'Hello FRASHI! I would like to request physical fabric and bouclé samples for my home.' },
    { title: '📐 تفصيل وأبعاد مخصصة', text: 'Hello FRASHI! I want to check custom dimensions and room layout for my space.' },
    { title: '💳 الدفع عند الاستلام COD', text: 'Hello FRASHI! I want to confirm Cash on Delivery payment for my upcoming order.' },
  ];

  const handleSendWhatsApp = (text: string) => {
    const url = `https://wa.me/${currentBranch.whatsappPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMessage.trim()) return;
    handleSendWhatsApp(customMessage);
    setCustomMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-4 py-3 bg-[#128C7E] text-white rounded-full shadow-elevated hover:bg-[#075E54] transition-all duration-300 transform hover:scale-105"
          aria-label="Open FRASHI WhatsApp & Phone Concierge"
        >
          {/* Pulsing indicator */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>

          <MessageCircle className="w-6 h-6" />

          <div className="text-left hidden sm:block">
            <span className="text-xs font-bold block leading-tight flex items-center gap-1">
              FRASHI Concierge <span className="text-[11px]">🇲🇦</span>
            </span>
            <span className="text-[10px] text-emerald-100 block leading-tight font-arabic">
              واتساب: 0611650381 • هاتف: 0610111314
            </span>
          </div>

          {/* Unread badge tooltip */}
          <span className="absolute -top-2 -right-1 px-2 py-0.5 bg-frashi-amber text-frashi-dark font-black text-[9px] rounded-full shadow-soft uppercase tracking-wider">
            Online
          </span>
        </button>
      )}

      {/* Expanded Luxury Chat & FAQ Card */}
      {isOpen && (
        <div className="w-[360px] sm:w-[410px] bg-white rounded-2xl shadow-elevated border border-frashi-linen overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-serif text-lg font-bold border border-white/30">
                  F
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#075E54]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-sm">FRASHI Concierge</h3>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  </div>
                  <p className="text-[11px] text-emerald-200 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Replies in ~5 mins • Interior Stylists
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close widget"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sub-tabs: Direct Chat vs FAQ Accordion */}
            <div className="flex gap-2 mt-3 pt-2 border-t border-white/20 text-xs">
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-center font-medium transition-colors ${
                  activeTab === 'chat'
                    ? 'bg-white/20 text-white font-bold'
                    : 'text-emerald-100 hover:bg-white/10'
                }`}
              >
                Instant Concierge
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-center font-medium transition-colors ${
                  activeTab === 'faq'
                    ? 'bg-white/20 text-white font-bold'
                    : 'text-emerald-100 hover:bg-white/10'
                }`}
              >
                Quick FAQ
              </button>
            </div>
          </div>

          {/* Active Branch Direct Action Bar */}
          <div className="p-3 bg-gradient-to-r from-emerald-50 to-amber-50/40 border-b border-frashi-linen flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">{currentBranch.flag}</span>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-frashi-dark">{currentBranch.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">مباشر</span>
                </div>
                <div className="text-[10px] text-emerald-900 flex flex-col leading-tight mt-0.5">
                  <span>هاتف: {currentBranch.callDisplay}</span>
                  <span className="font-semibold text-emerald-700">واتساب: {currentBranch.whatsappDisplay}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <a
                href={`tel:${currentBranch.callPhone}`}
                className="px-2.5 py-1.5 bg-white hover:bg-emerald-50 text-emerald-900 border border-emerald-300 rounded-lg text-[11px] font-bold shadow-xs flex items-center gap-1 transition-all"
                title="اتصال هاتفي مباشر"
              >
                <Phone className="w-3 h-3 text-emerald-700" />
                <span>اتصال</span>
              </a>
              <a
                href={`https://wa.me/${currentBranch.whatsappPhone}?text=Hello%20FRASHI!`}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1.5 bg-[#128C7E] hover:bg-[#075E54] text-white rounded-lg text-[11px] font-bold shadow-xs flex items-center gap-1 transition-all"
                title="محادثة واتساب"
              >
                <MessageCircle className="w-3 h-3" />
                <span>واتساب</span>
              </a>
            </div>
          </div>

          {/* Branch Switcher Pill */}
          <div className="px-3 py-1.5 bg-white border-b border-frashi-linen/60 flex items-center justify-between text-[11px]">
            <span className="text-frashi-stone text-[10px]">تغيير الفرع:</span>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => setSelectedBranch('morocco')}
                className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                  selectedBranch === 'morocco'
                    ? 'bg-emerald-700 text-white'
                    : 'text-frashi-charcoal hover:bg-frashi-sand'
                }`}
              >
                🇲🇦 المغرب (+212)
              </button>
              <button
                type="button"
                onClick={() => setSelectedBranch('uae')}
                className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                  selectedBranch === 'uae'
                    ? 'bg-emerald-700 text-white'
                    : 'text-frashi-charcoal hover:bg-frashi-sand'
                }`}
              >
                🇦🇪 الخليج (+971)
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-4 bg-frashi-cream/30 max-h-[360px] overflow-y-auto">
            {activeTab === 'chat' ? (
              <div className="space-y-4">
                {/* Intro message bubble */}
                <div className="bg-white p-3.5 rounded-xl rounded-tl-none border border-frashi-linen shadow-soft text-xs text-frashi-charcoal leading-relaxed">
                  <p className="font-semibold text-frashi-dark flex items-center gap-1 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-frashi-amber" />
                    مرحباً بكم في فراشي FRASHI
                  </p>
                  <p>
                    فريق خدمة العملاء ومصممو الديكور جاهزون لمساعدتكم. يمكنكم الاتصال هاتفياً مباشرة على الرقم{' '}
                    <a href={`tel:${currentBranch.callPhone}`} className="font-bold text-emerald-800 underline">
                      {currentBranch.callDisplay}
                    </a>{' '}
                    أو مراسلتنا مباشرة عبر الواتساب على{' '}
                    <a href={`https://wa.me/${currentBranch.whatsappPhone}?text=Hello%20FRASHI!`} target="_blank" rel="noreferrer" className="font-bold text-emerald-700 underline">
                      {currentBranch.whatsappDisplay}
                    </a>:
                  </p>
                </div>

                {/* Quick Prompts */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-frashi-stone mb-2">
                    مواضيع سريعة:
                  </p>
                  <div className="space-y-1.5">
                    {quickPrompts.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendWhatsApp(p.text)}
                        className="w-full text-left p-2.5 rounded-xl bg-white border border-frashi-linen hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-xs text-frashi-dark flex items-center justify-between group"
                      >
                        <span className="font-medium text-frashi-charcoal group-hover:text-emerald-900">
                          {p.title}
                        </span>
                        <MessageCircle className="w-3.5 h-3.5 text-frashi-stone group-hover:text-emerald-600 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom text form */}
                <form onSubmit={handleCustomSubmit} className="pt-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      placeholder="اكتب رسالتك أو استفسارك هنا..."
                      className="w-full pl-3 pr-10 py-2.5 text-xs bg-white border border-frashi-linen rounded-xl focus:outline-none focus:border-emerald-600 text-frashi-dark"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#128C7E] text-white rounded-lg hover:bg-[#075E54] transition-colors"
                      aria-label="Send message"
                    >
                      <Send className="w-3 h-3" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Interactive FAQ Accordion */
              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-frashi-stone mb-2">
                  الأسئلة الشائعة FAQ:
                </p>
                {FAQ_ITEMS.map((faq, index) => {
                  const isExpanded = expandedFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white border border-frashi-linen rounded-xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setExpandedFaq(isExpanded ? null : index)}
                        className="w-full p-3 text-left text-xs font-semibold text-frashi-dark flex items-center justify-between gap-2 hover:bg-frashi-sand/30"
                      >
                        <span className="flex items-center gap-1.5">
                          <HelpCircle className="w-3.5 h-3.5 text-frashi-oak flex-shrink-0" />
                          <span>{faq.q}</span>
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-frashi-stone transition-transform duration-200 flex-shrink-0 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="p-3 pt-0 text-[11px] text-frashi-charcoal leading-relaxed border-t border-frashi-linen/40 bg-frashi-sand/20">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="p-3 bg-white border-t border-frashi-linen flex items-center justify-between text-[11px] text-frashi-stone">
            <span>Powered by WhatsApp Business</span>
            <button
              onClick={() => handleSendWhatsApp('السلام عليكم FRASHI، أريد التحدث مع مصمم ديكور.')}
              className="text-[#075E54] font-bold hover:underline"
            >
              محادثة مباشرة الآن ←
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
