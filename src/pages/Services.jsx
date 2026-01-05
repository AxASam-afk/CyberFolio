import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import BubblesBackground from '../components/BubblesBackground'

const Services = () => {
  const { theme } = useTheme()

  const services = [
    {
      icon: '🎨',
      title: 'Design Web & UI/UX',
      description:
        'Création de designs modernes et intuitifs pour vos sites web et applications. Interface utilisateur optimisée pour une expérience fluide.',
      features: ['Design responsive', 'Prototypage Figma/Adobe XD', 'Design system complet'],
    },
    {
      icon: '💻',
      title: 'Développement Frontend',
      description:
        'Développement de sites web modernes avec React, Vue.js ou technologies natives. Code propre, performant et maintenable.',
      features: ['React / Vue.js / Next.js', 'Responsive design', 'Optimisation performance'],
    },
    {
      icon: '📱',
      title: 'Design Mobile & Applications',
      description:
        'Conception d\'interfaces mobiles élégantes et fonctionnelles pour iOS et Android. Expérience utilisateur optimale sur tous les écrans.',
      features: ['Design mobile-first', 'Prototypage interactif', 'Guidelines iOS/Android'],
    },
    {
      icon: '🚀',
      title: 'Refonte & Optimisation',
      description:
        'Modernisation de sites existants pour améliorer l\'expérience utilisateur, les performances et le design. Analyse et recommandations.',
      features: ['Audit UX/UI', 'Refonte complète', 'Optimisation conversion'],
    },
  ]

  return (
    <section className="relative min-h-screen py-24 md:py-32 overflow-hidden">
      <BubblesBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Mes <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Des services professionnels de web design et développement pour créer des expériences digitales exceptionnelles.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700'
                    : 'bg-white border-slate-200'
                } hover:border-cyan-400 transition-all hover:shadow-lg`}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
                  {service.title}
                </h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-2 ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      <span className="text-cyan-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-cyan-400 text-slate-900 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
            >
              Demander un devis
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

