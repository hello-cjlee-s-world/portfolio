import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
          >
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm text-zinc-300">Available for hire</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tighter leading-none"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.3}}
          >
            <span
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Creative Developer
            </span>
            <span
              className="block pt-5 text-white bg-clip-text text-transparent">
              이충주
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            혁신적인 디지털 경험을 창조하는 것에 열정을 가진 개발자.
            <br className="hidden md:block" />
            코드로 아름다움을 만듭니다.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-6 mb-16"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.7}}
          >
            <a
              href="https://github.com/hello-cjlee-s-world"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all"
            >
              <Github size={24}/>
              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub
              </span>
            </a>
            <a
              href="mailto:cndwn213@naver.com?subject=포트폴리오 문의&body=안녕하세요,%20프로젝트를%20보고%20연락드립니다."
              className="group relative p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all"
            >
              <Mail size={24}/>
              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                Email
              </span>
            </a>

          </motion.div>

          <motion.button
            onClick={scrollToNext}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.9}}
          >
            <span className="font-medium">Explore My Work</span>
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
}