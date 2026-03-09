import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, TrendingUp } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: '컴퓨터공학 학사',
      school: '서울사이버대학교',
      period: '2022(편입) - 2024',
      location: '서울, 대한민국',
      description: '컴퓨터 과학의 기초부터 고급 주제까지 폭넓게 학습. 데이터 구조, 알고리즘, 소프트웨어 공학 전공',
      achievements: [
        'GPA: 3.53/4.5',
      ],
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      degree: '머신러닝 기반 빅데이터 플랫폼 개발 전문가 양성과정',
      school: '중앙정보기술인재개발원',
      period: '2020 - 2021',
      location: '온라인',
      description: '다양한 형식의 대용량 데이터 수집, 저장, 처리, 분석, 활용을 위한 인프라, 인터페이스 및 솔루션과 플랫폼을 개발하고 적용하는 업무에 종사할 수 있는 빅데이터 관련분야 취업 전문인력 양성',
      achievements: [
        '900시간의 실습 프로젝트 완료',
        '카드 결제 프로세스 적용한 쇼핑몰 프로젝트 구축 경험',
      ],
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      degree: '데이터 분석&웹 개발자 취업캠프(Python)',
      school: '멀티캠퍼스 선릉',
      period: '2022 - 2022',
      location: '서울, 대한민국',
      description: '파이썬을 활용한 ML/DL 모델 학습 및 서비스 개발',
      achievements: [
        '실전 데이터 분석 프로젝트 3개 완성',
        '캐글 기침 데이터 활용한 코로나 진단 AI 모델 개발',
        '인스타그램 사진 데이터 활용한 주제 검색 정확도 향상 모델 개발',
      ],
      gradient: 'from-green-600 to-teal-600',
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
          <span className="text-sm text-zinc-400">Background</span>
        </motion.div>
        <h2 className="text-5xl md:text-7xl mb-6 tracking-tighter bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          교육
        </h2>
        <p className="text-zinc-400 text-xl max-w-2xl mx-auto">끊임없는 배움으로 성장합니다</p>
      </motion.div>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="group relative"
          >
            <div className={`absolute -inset-1 bg-gradient-to-r ${edu.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
            
            <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition-all">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-br ${edu.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <GraduationCap size={40} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl mb-3 leading-tight">{edu.degree}</h3>
                      <p className="text-2xl text-zinc-300 mb-4">{edu.school}</p>
                    </div>
                    
                    <div className="flex flex-col gap-3 text-zinc-400 lg:text-right">
                      <div className="inline-flex items-center gap-2 lg:justify-end">
                        <Calendar size={18} />
                        <span className="text-lg">{edu.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 lg:justify-end">
                        <MapPin size={18} />
                        <span className="text-lg">{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp size={20} className="text-green-500" />
                      <p className="text-lg font-medium">주요 성과</p>
                    </div>
                    <ul className="space-y-3">
                      {edu.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-zinc-300 text-lg"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${edu.gradient} mt-2.5`} />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}