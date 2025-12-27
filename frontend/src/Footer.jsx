"use client";

import React from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Globe,
  Code2,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-[#050505] text-slate-900 dark:text-slate-100 font-inter overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Globe className="text-white" size={22} />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                SnapBuy
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Crafting digital experiences that merge aesthetic precision with functional excellence. 
              We build for the next generation of the web.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Github size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="p-2.5 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Company</h4>
              <ul className="space-y-4 text-sm font-medium">
                {['About', 'Services', 'Portfolio', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors flex items-center group">
                      <span className="bg-blue-600 h-[1px] w-0 group-hover:w-3 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Support</h4>
              <ul className="space-y-4 text-sm font-medium">
                {['FAQs', 'Privacy', 'Terms', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors flex items-center group">
                      <span className="bg-blue-600 h-[1px] w-0 group-hover:w-3 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-[2rem] space-y-4">
              <h4 className="text-sm font-bold">Stay in the loop</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Get the latest updates on new UI components.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="w-full bg-white dark:bg-black border border-slate-200 dark:border-slate-800 rounded-2xl py-3 px-4 text-xs focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
                <button className="absolute right-1.5 top-1.5 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 group">
                <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-lg text-blue-600">
                  <Mail size={16} />
                </div>
                <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors cursor-pointer italic">mirzasubhan1010@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <p className="text-[12px] text-slate-400 font-medium text-center md:text-left">
            © {currentYear} SnapBuy. All rights reserved. 
            <span className="mx-2 text-slate-200 dark:text-slate-800">|</span> 
            Crafted for Excellence.
          </p>
          
          <div className="flex items-center gap-8 text-[12px] font-bold text-slate-400">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-widest">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-widest">Terms</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-widest">Cookies</a>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05] p-4 transition-all duration-500 hover:border-blue-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
              <Code2 size={16} className="text-blue-500" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Developed with</span>
              <Heart size={14} className="text-red-500 animate-pulse fill-red-500" />
            </div>
            <div className="hidden sm:block h-4 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2" />
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 italic">
              by <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent font-black not-italic text-base ml-1">Mirza Subhan</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;