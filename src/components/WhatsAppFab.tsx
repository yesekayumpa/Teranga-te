import React, { useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';

// ─── Composant WhatsAppButton amélioré avec modal de conversation ────────────
export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const pulseControls = useAnimation();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      pulseControls.start({
        scale: [1, 1.8],
        opacity: [0.7, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        },
      });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [pulseControls]);

  const toggleModal = () => setIsOpen(!isOpen);
  const sendMessage = () => {
    const url = `https://wa.me/221338295806?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    // Optionnel : fermer le modal après envoi
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Cercles de pulse (uniquement quand le modal est fermé) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="pulse"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 w-16 h-16 rounded-full bg-[#25D366]"
              initial={{ scale: 1, opacity: 0.4 }}
              animate={pulseControls}
            />
            <motion.div
              className="absolute inset-0 w-16 h-16 rounded-full bg-[#25D366]"
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: [1, 1.6],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.6,
                ease: 'easeOut',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton principal */}
      <motion.button
        onClick={toggleModal}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.85 }}
        className="relative w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
        {/* Icône WhatsApp (SVG) */}
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-white relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {/* Indicateur en ligne */}
        {!isOpen && (
          <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white z-20" />
        )}
      </motion.button>

      {/* Tooltip (visible uniquement quand fermé) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
          >
            <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 rounded-2xl shadow-xl text-sm font-semibold whitespace-nowrap border border-slate-200 dark:border-slate-700 relative">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Besoin d'aide ? Discutons !</span>
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-white dark:bg-slate-800 border-r border-t border-slate-200 dark:border-slate-700" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de conversation WhatsApp */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col"
            style={{ maxHeight: 'calc(100vh - 12rem)' }}
          >
            {/* En-tête du chat */}
            <div className="bg-[#075e54] dark:bg-[#075e54] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                  T
                </div>
                <div>
                  <p className="font-semibold">Teranga TE</p>
                  <p className="text-xs opacity-80 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full" /> En ligne
                  </p>
                </div>
              </div>
              <button
                onClick={toggleModal}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Zone des messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#efeae2] dark:bg-slate-800/50">
              {/* Message de bienvenue */}
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-[#075e54] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  T
                </div>
                <div className="bg-white dark:bg-slate-700 p-3 rounded-2xl rounded-tl-none shadow text-sm">
                  <p>Bonjour ! 👋</p>
                  <p className="mt-1">Bienvenue sur Teranga TE. Comment pouvons-nous vous aider aujourd'hui ?</p>
                </div>
              </div>
              {/* Message optionnel rapide */}
              <div className="flex flex-wrap gap-2 justify-end">
                {['Partenariat', 'Support technique', 'Devis'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setMessage(suggestion)}
                    className="text-xs bg-white dark:bg-slate-700 border border-[#25D366]/30 rounded-full px-3 py-1 text-[#075e54] dark:text-white hover:bg-[#25D366]/10 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Zone de saisie */}
            <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#25D366] dark:text-white"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') sendMessage();
                  }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!message.trim()}
                  className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-colors disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center">
                En cliquant, vous ouvrirez WhatsApp dans un nouvel onglet.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};