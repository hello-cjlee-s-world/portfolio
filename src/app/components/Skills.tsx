import { motion } from 'motion/react';
import { Code2, Database, Layout, Server, Smartphone, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: <Layout size={24} />,
      title: '프론트엔드',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: <Server size={24} />,
      title: '백엔드',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST API'],
      color: 'from-green-600 to-emerald-600',
    },
    {
      icon: <Database size={24} />,
      title: '데이터베이스',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Supabase'],
      color: 'from-orange-600 to-red-600',
    },
    {
      icon: <Smartphone size={24} />,
      title: '모바일',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      icon: <Wrench size={24} />,
      title: '도구',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'],
      color: 'from-yellow-600 to-orange-600',
    },
    {
      icon: <Code2 size={24} />,
      title: '언어',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go'],
      color: 'from-indigo-600 to-purple-600',
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
          <span className="text-sm text-zinc-400">Tech Stack</span>
        </motion.div>
        <h2 className="text-5xl md:text-7xl mb-6 tracking-tighter bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          스킬
        </h2>
        <p className="text-zinc-400 text-xl max-w-2xl mx-auto">다양한 기술 스택으로 최고의 결과물을 만듭니다</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl"
              style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
            />
            <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
              <div className={`inline-flex p-4 bg-gradient-to-br ${category.color} rounded-2xl mb-6 shadow-lg`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-2xl mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl text-sm text-zinc-300 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}