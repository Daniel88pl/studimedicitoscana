import { Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-natural-accent text-natural-bg py-12 border-t border-[#4a4a35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Sede Pisa</p>
              <p className="text-sm font-medium">Via Roma 45, Pisa</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Sede Grosseto</p>
              <p className="text-sm font-medium">Via Adriatico 7, Grosseto</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Succursale Grosseto</p>
              <p className="text-sm font-medium">Via Senegal 33, Grosseto</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-natural-bg/30 flex items-center justify-center text-sm hover:bg-natural-bg hover:text-natural-accent transition-all">f</a>
            <a href="#" className="w-10 h-10 rounded-full border border-natural-bg/30 flex items-center justify-center text-sm hover:bg-natural-bg hover:text-natural-accent transition-all">in</a>
          </div>
        </div>

        <div className="border-t border-[#4a4a35] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-natural-bg/10 rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-xs italic">M</span>
            </div>
            <span className="text-sm font-serif italic opacity-80">Studi Medici Toscana</span>
          </div>
          <p className="text-[10px] uppercase tracking-widest opacity-40">
            © {new Date().getFullYear()} Tutti i diritti riservati.
          </p>
          <p className="text-[10px] uppercase tracking-widest opacity-40 flex items-center gap-1">
            Made with <Heart size={10} className="text-red-400 fill-red-400" /> for Healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
