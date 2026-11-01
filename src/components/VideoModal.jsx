import React from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, video }) {
  if (!isOpen || !video) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#040b1e] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-[#071638]">
          <h4 className="font-bold text-sm sm:text-base text-white truncate max-w-[85%] font-display">
            {video.title}
          </h4>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={video.videoUrl || `https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Footer */}
        <div className="p-3.5 px-6 bg-[#020614] flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="text-[#38bdf8]">✦ FARES GAMING OFFICIAL YOUTUBE</span>
          <span>Press [ESC] or click outside to close</span>
        </div>
      </div>
    </div>
  );
}
