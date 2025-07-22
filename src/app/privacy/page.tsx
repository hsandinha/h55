// components/pages/PrivacyPolicyPage.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";

const PrivacyPolicyPage = () => {
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
        id="policy-particles"
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
          Política de Privacidade
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
            Este é um modelo de Política de Privacidade e não constitui
            aconselhamento jurídico. Recomendamos que você revise este texto com
            um advogado para garantir que ele atenda a todas as necessidades
            específicas do seu negócio e esteja em total conformidade com a
            legislação vigente.
          </p>
        </motion.div>

        <div className="space-y-10 text-gray-700">
          <motion.div {...sectionAnimation}>
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              1. Introdução
            </h2>
            <p>
              A sua privacidade é fundamental para nós. Esta Política de
              Privacidade descreve como coletamos, usamos, compartilhamos e
              protegemos suas informações pessoais quando você visita nosso
              site, em conformidade com a Lei Geral de Proteção de Dados (LGPD -
              Lei nº 13.709/2018).
            </p>
          </motion.div>

          <motion.div {...sectionAnimation}>
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              2. Coleta de Dados
            </h2>
            <p className="mb-2">Coletamos informações de duas formas:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <b>Informações fornecidas por você:</b> Dados que você nos envia
                voluntariamente ao preencher formulários de contato, como nome,
                e-mail e telefone.
              </li>
              <li>
                <b>Informações coletadas automaticamente:</b> Dados coletados
                por cookies e tecnologias similares, como seu endereço IP, tipo
                de navegador, páginas visitadas e tempo de permanência no site,
                para fins de análise e melhoria da experiência.
              </li>
            </ul>
          </motion.div>

          <motion.div {...sectionAnimation}>
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              3. Uso dos Dados
            </h2>
            <p>Utilizamos seus dados para as seguintes finalidades:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Responder às suas solicitações e contatos.</li>
              <li>
                Melhorar nosso site e serviços através de análises de uso.
              </li>
              <li>Cumprir obrigações legais e regulatórias.</li>
              <li>
                Comunicar sobre nossos serviços, caso você opte por receber
                nossas comunicações.
              </li>
            </ul>
          </motion.div>

          <motion.div {...sectionAnimation}>
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              4. Compartilhamento de Dados
            </h2>
            <p>
              Não vendemos suas informações pessoais. Podemos compartilhar seus
              dados com terceiros apenas em situações específicas, como com
              provedores de serviços de tecnologia (hospedagem, análise de
              dados) ou mediante requisição legal de autoridades competentes.
            </p>
          </motion.div>

          <motion.div {...sectionAnimation}>
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              5. Seus Direitos
            </h2>
            <p>
              De acordo com a LGPD, você tem o direito de solicitar a qualquer
              momento:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>A confirmação da existência de tratamento dos seus dados.</li>
              <li>O acesso aos seus dados.</li>
              <li>
                A correção de dados incompletos, inexatos ou desatualizados.
              </li>
              <li>
                A anonimização, bloqueio ou eliminação de dados desnecessários.
              </li>
              <li>A revogação do seu consentimento.</li>
            </ul>
          </motion.div>

          <motion.div {...sectionAnimation}>
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              6. Segurança
            </h2>
            <p>
              Adotamos medidas técnicas e administrativas razoáveis para
              proteger suas informações pessoais contra acesso não autorizado,
              perda ou destruição. No entanto, nenhum sistema é 100% seguro.
            </p>
          </motion.div>

          <motion.div {...sectionAnimation}>
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              7. Alterações na Política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. A
              data da última atualização estará sempre indicada no topo desta
              página. Recomendamos que você a revise regularmente.
            </p>
          </motion.div>

          <motion.div {...sectionAnimation} className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              Fale Conosco
            </h2>
            <p>
              Se tiver qualquer dúvida sobre esta Política de Privacidade ou
              sobre como tratamos seus dados, por favor,{" "}
              <Link
                href="/contact"
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

export default PrivacyPolicyPage;
