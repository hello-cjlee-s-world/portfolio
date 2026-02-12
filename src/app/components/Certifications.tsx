import { motion } from 'motion/react';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2025년 6월',
      description: '클라우드 아키텍처 설계 및 구현에 대한 전문성 인증',
      credentialUrl: 'https://aws.amazon.com/certification/',
      color: 'from-orange-600 to-red-600',
    },
    {
      title: 'Google Professional Cloud Developer',
      issuer: 'Google Cloud',
      date: '2025년 3월',
      description: '구글 클라우드 플랫폼을 활용한 애플리케이션 개발 인증',
      credentialUrl: 'https://cloud.google.com/certification',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'React Advanced Certification',
      issuer: 'Meta',
      date: '2024년 12월',
      description: 'React 고급 개념 및 베스트 프랙티스 마스터',
      credentialUrl: 'https://www.facebook.com/business/learn',
      color: 'from-cyan-600 to-blue-600',
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2024년 9월',
      description: 'NoSQL 데이터베이스 설계 및 최적화 전문가',
      credentialUrl: 'https://university.mongodb.com/',
      color: 'from-green-600 to-emerald-600',
    },
    {
      title: '정보처리기사',
      issuer: '한국산업인력공단',
      date: '2024년 6월',
      description: '정보시스템 개발 및 운영에 대한 국가기술자격',
      credentialUrl: '#',
      color: 'from-purple-600 to-pink-600',
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
          <span className="text-sm text-zinc-400">Credentials</span>
        </motion.div>
        <h2 className="text-5xl md:text-7xl mb-6 tracking-tighter bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          자격증
        </h2>
        <p className="text-zinc-400 text-xl max-w-2xl mx-auto">검증된 전문성과 지속적인 학습</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
            
            <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-4 bg-gradient-to-br ${cert.color} rounded-2xl shadow-lg`}>
                  <Award size={28} className="text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-2xl leading-tight">{cert.title}</h3>
                    {cert.credentialUrl !== '#' && (
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="shrink-0"
                      >
                        <CheckCircle size={24} className="text-green-500" />
                      </motion.div>
                    )}
                  </div>
                  <p className="text-zinc-400 text-lg">{cert.issuer}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4 pb-4 border-b border-white/5">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>
              
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {cert.description}
              </p>
              
              {cert.credentialUrl !== '#' && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r ${cert.color} rounded-xl transition-all hover:shadow-lg hover:scale-105`}
                >
                  <span>자격증 보기</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}