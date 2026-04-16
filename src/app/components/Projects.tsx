import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
// @ts-ignore
import autoMainImage from '../../assets/autoMain.png';
// @ts-ignore
import fetcherCodeImage from '../../assets/fetcherCode.png';
// @ts-ignore
import mcpImage from '../../assets/mcp.png';

export function Projects() {
  const projects = [
    {
      title: '주식 자동 매매 프로세스',
      description: ['시장 시간 감지, 매매 조건 평가, 주문 실행, 결과 기록까지 하나의 파이프라인으로 구성한 자동 매매 백엔드 시스템입니다.',
      '• gocron 기반 스케줄러로 장 시간 제어',
      '• 전략 조건 충족 시 자동 매수/매도 실행',
      '• 거래 이력 및 자산 스냅샷 저장',
      '• REST API 제공 (UI 및 외부 시스템 연동)',
      '• PostgreSQL 기반 데이터 영속성 관리 '],
      image: fetcherCodeImage,
      tags: ['Go', 'PostgreSQL', 'REST API'],
      github: 'https://github.com/hello-cjlee-s-world/autoJoosik-market-data-fetcher',
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      title: '주식 자동 매매 관제 UI',
      description: ['자동 매매 백엔드 시스템을 모니터링하고 제어할 수 있는 관제 플랫폼입니다.',
      '• 실시간 매매 상태 조회',
      '• 계좌 자산 및 수익률 통계 시각화',
      '• 매수/매도 이력 조회',
      '• 스케줄러 실행/중지 제어'],
      image: autoMainImage,
      tags: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/hello-cjlee-s-world/autoJoosik',
      demo: 'https://cjlee.kr/auto/',
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      title: '주식 자동 매매 MCP Server',
      description: ['자동 매매 백엔드 시스템 REST API 를 AI Agent 가 접근하여 호출 할 수 있는 서비스 입니다.',
        '• 주식정보 조회 및 매매 가능',
        ],
      image: mcpImage,
      tags: ['Go', 'Http', 'REST API', 'MCP', 'AI'],
      github: 'https://github.com/hello-cjlee-s-world/autoJoosik-mcp-server',
      gradient: 'from-zinc-600 to-grey-200',
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

            <div className="relative flex flex-col h-full bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all">

              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"/>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Floating action button */}
                {/*<motion.div*/}
                {/*  initial={{opacity: 0, scale: 0.8}}*/}
                {/*  whileInView={{opacity: 1, scale: 1}}*/}
                {/*  className="absolute top-4 right-4 z-20"*/}
                {/*>*/}
                {/*  <div*/}
                {/*    className={`p-3 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity`}>*/}
                {/*    <ArrowUpRight size={20} className="text-white"/>*/}
                {/*  </div>*/}
                {/*</motion.div>*/}
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between">
                <h3 className="text-3xl mb-4">{project.title}</h3>
                {project.description.map((desc, index) => (
                  <p
                    key={index}
                    className={`text-zinc-400 leading-relaxed text-lg ${
                      index === project.description.length - 1
                        ? "mb-6"
                        : "mb-2"
                    }`}
                  >
                    {desc}
                  </p>
                ))}

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
                    <Github size={18}/>
                    <span>Code</span>
                  </a>
                  {project.demo &&
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-5 py-3 bg-gradient-to-r ${project.gradient} rounded-xl transition-all hover:shadow-lg hover:scale-105`}
                    >
                      <ExternalLink size={18}/>
                      <span>Demo</span>
                    </a>
                  }
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}