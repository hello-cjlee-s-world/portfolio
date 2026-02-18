import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Github, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('');
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: '이메일',
      value: 'cndwn213@naver.com',
      href: 'mailto:cndwn213@naver.com?subject=포트폴리오 문의&body=안녕하세요,%20프로젝트를%20보고%20연락드립니다.',
      gradient: 'from-red-600 to-orange-600',
    },
    {
      icon: <Phone size={20} />,
      label: '전화',
      value: '+82 10-2735-7192',
      href: 'tel:+821012345678',
      gradient: 'from-green-600 to-teal-600',
    },
    {
      icon: <MapPin size={20} />,
      label: '위치',
      value: '서울, 대한민국',
      href: '#',
      gradient: 'from-blue-600 to-purple-600',
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com',
      gradient: 'from-gray-600 to-gray-800',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('모든 항목을 입력해주세요.');
      return;
    }

    const subject = encodeURIComponent(`[포트폴리오 문의] ${formData.name}님의 메시지`);
    const body = encodeURIComponent(
      `이름: ${formData.name}\n이메일: ${formData.email}\n\n메시지:\n${formData.message}`,
    );

    window.location.href = `mailto:cndwn213@naver.com?subject=${subject}&body=${body}`;
    setSubmitStatus('이메일 앱을 열었습니다. 전송을 완료해주세요.');
    setFormData({ name: '', email: '', message: '' });
  };

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
          <span className="text-sm text-zinc-400">Get In Touch</span>
        </motion.div>
        <h2 className="text-5xl md:text-7xl mb-6 tracking-tighter bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          연락하기
        </h2>
        <p className="text-zinc-400 text-xl max-w-2xl mx-auto">새로운 프로젝트나 협업 기회를 환영합니다</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl mb-6">연락처 정보</h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className={`group flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 ${
                    info.href === '#' ? 'pointer-events-none' : ''
                  }`}
                >
                  <div className={`p-3 bg-gradient-to-br ${info.gradient} rounded-xl shadow-lg`}>
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">{info.label}</p>
                    <p className="text-white text-lg">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-xl mb-6">소셜 미디어</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
                    className={`p-4 bg-gradient-to-br ${social.gradient} rounded-2xl shadow-lg backdrop-blur-sm`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl mb-6">메시지 보내기</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-zinc-400 mb-3">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 transition-all text-white placeholder:text-zinc-600"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-zinc-400 mb-3">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 transition-all text-white placeholder:text-zinc-600"
                  placeholder="hello@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-zinc-400 mb-3">
                  메시지
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 transition-all text-white resize-none placeholder:text-zinc-600"
                  placeholder="프로젝트에 대해 이야기해주세요..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transition-all hover:shadow-lg hover:shadow-purple-500/50 font-medium text-lg flex items-center justify-center gap-3"
              >
                <span>전송하기</span>
                <Send size={20} />
              </motion.button>
              {submitStatus && (
                <p className="text-sm text-zinc-300">{submitStatus}</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}