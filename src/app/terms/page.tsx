// components/pages/TermsOfUsePage.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";

const TermsOfUsePage = () => {
  // Inicializador de partículas
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <Particles
        id="terms-particles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            color: { value: ["#3b82f6", "#fbbf24"] },
            move: { enable: true, speed: 0.5, direction: "none", random: true },
            number: { density: { enable: true, area: 800 }, value: 30 },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-h55-blue mb-4 font-serif text-center"
        >
          Termos de Uso
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-sm text-gray-500 mb-12 text-center"
        >
          Última atualização: 22 de julho de 2025
        </motion.p>

        {/* Bloco de Aviso Legal */}
        <motion.div
          {...sectionAnimation}
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-r-lg mb-12"
          role="alert"
        >
          <p className="font-bold">Aviso Importante</p>
          <p>
            Este documento é um modelo de Termos de Uso e não constitui
            aconselhamento jurídico. É fundamental que você o revise com um
            advogado para garantir sua adequação completa às atividades da sua
            empresa e à legislação.
          </p>
        </motion.div>

        <div className="space-y-10 text-gray-700">
          <motion.div {...sectionAnimation}>
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e utilizar este site, você concorda em cumprir e estar
              vinculado a estes Termos de Uso e à nossa Política de Privacidade.
              Se você não concordar com qualquer parte destes termos, não deverá
              utilizar nosso site.
            </p>
          </motion.div>

          <motion.div {...sectionAnimation}>
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              2. Objeto do Site
            </h2>
            <p>
              Este site tem como finalidade apresentar nossos serviços de
              consultoria imobiliária, especificamente como Concierge
              Imobiliário, e disponibilizar informações institucionais. As
              informações aqui contidas não constituem uma oferta de venda ou
              solicitação de compra de qualquer imóvel.
            </p>
          </motion.div>

          <motion.div {...sectionAnimation}>
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              3. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo presente neste site, incluindo textos, gráficos,
              logos, ícones, imagens e a compilação de tais conteúdos, é de
              nossa propriedade exclusiva ou de nossos parceiros e é protegido
              pelas leis de direitos autorais do Brasil e internacionais. É
              proibida a reprodução, modificação ou distribuição de qualquer
              conteúdo sem nossa autorização prévia e por escrito.
            </p>
          </motion.div>

          <motion.div {...sectionAnimation}>
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              4. Isenção de Responsabilidade
            </h2>
            <p>
              As informações contidas neste site são fornecidas &quot;no estado
              em que se encontram&quot; e têm caráter meramente informativo.
              Embora nos esforcemos para manter as informações precisas e
              atualizadas, não oferecemos garantias de qualquer tipo sobre sua
              exatidão, integridade ou adequação a um propósito específico. Não
              nos responsabilizamos por quaisquer perdas ou danos decorrentes do
              uso ou da confiança nas informações aqui apresentadas.
            </p>
          </motion.div>

          <motion.div {...sectionAnimation}>
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              5. Links para Terceiros
            </h2>
            <p>
              Nosso site pode conter links para sites de terceiros. Esses links
              são fornecidos apenas para sua conveniência. Não temos controle
              sobre o conteúdo desses sites e não nos responsabilizamos por suas
              práticas de privacidade ou por qualquer conteúdo, produto ou
              serviço ali disponível.
            </p>
          </motion.div>

          <motion.div {...sectionAnimation}>
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              6. Modificações nos Termos
            </h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a
              qualquer momento, a nosso exclusivo critério. Todas as alterações
              entrarão em vigor imediatamente após sua publicação no site. O uso
              contínuo do site após tais modificações constituirá sua aceitação
              dos novos termos.
            </p>
          </motion.div>

          <motion.div {...sectionAnimation}>
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              7. Lei Aplicável e Foro
            </h2>
            <p>
              Estes Termos de Uso serão regidos e interpretados de acordo com as
              leis da República Federativa do Brasil. Fica eleito o foro da
              Comarca de <strong>Belo Horizonte, Estado de Minas Gerais</strong>
              , para dirimir quaisquer controvérsias oriundas destes Termos, com
              renúncia expressa a qualquer outro, por mais privilegiado que
              seja.
            </p>
          </motion.div>

          <motion.div {...sectionAnimation} className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              Dúvidas
            </h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos de Uso, por favor,{" "}
              <Link
                href="/contato"
                className="text-h55-gold font-semibold hover:underline"
              >
                entre em contato conosco
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUsePage;
