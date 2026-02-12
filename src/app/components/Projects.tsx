import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'E-커머스 플랫폼',
      description: '사용자 친화적인 인터페이스와 안전한 결제 시스템을 갖춘 완전한 온라인 쇼핑몰',
      image: 'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NzA4OTk3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      title: '모바일 앱 디자인',
      description: '직관적인 UI/UX를 제공하는 크로스 플랫폼 모바일 애플리케이션',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzcwODc3Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'TypeScript', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      title: '데이터 분석 대시보드',
      description: '실시간 데이터 시각화 및 인사이트를 제공하는 분석 플랫폼',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzA4MTA3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'D3.js', 'Python', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-green-600 to-teal-600',
    },
    {
      title: '협업 도구',
      description: '팀 생산성을 높이는 실시간 협업 및 프로젝트 관리 도구',
      image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MDgyODY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Vue.js', 'Socket.io', 'Express', 'Redis'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-orange-600 to-amber-600',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
        >
          <span className="text-sm text-zinc-400">Featured Work</span>
        </motion.div>
        <h2 className="text-5xl md:text-7xl mb-6 tracking-tighter bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          프로젝트
        </h2>
        <p className="text-zinc-400 text-xl max-w-2xl mx-auto">혁신적인 솔루션으로 문제를 해결합니다</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Gradient glow effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
            
            <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Floating action button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 z-20"
                >
                  <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </motion.div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl mb-4">{project.title}</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed text-lg">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl text-sm text-zinc-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl transition-all border border-white/10 hover:border-white/20"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-5 py-3 bg-gradient-to-r ${project.gradient} rounded-xl transition-all hover:shadow-lg hover:scale-105`}
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}