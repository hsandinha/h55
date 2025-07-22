"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"; // Ícones para detalhes de contato

const ContactPage = () => {
  // Hook de estado para gerenciar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Inicializador de partículas (mantendo a mesma configuração)
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  // Função para lidar com mudanças nos inputs do formulário
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar os dados para sua API ou serviço de e-mail
    console.log("Dados do formulário enviados:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    // Limpar o formulário após o envio
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Partículas sutis para manter a consistência visual */}
      <Particles
        id="contact-particles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            color: { value: ["#3b82f6", "#fbbf24"] }, // h55-blue e gold
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

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-h55-blue mb-6 font-serif text-center"
        >
          Fale Conosco
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto"
        >
          Tem alguma dúvida ou quer iniciar uma conversa? Preencha o formulário
          abaixo ou entre em contato por um de nossos canais. Nossa equipe está
          pronta para atendê-lo.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coluna do Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-h55-blue mb-6">
              Envie uma Mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-h55-blue focus:border-transparent transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-h55-blue focus:border-transparent transition"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Telefone (Opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-h55-blue focus:border-transparent transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Sua Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-h55-blue focus:border-transparent transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-h55-blue text-gray-700 rounded-full font-semibold hover:bg-h55-gold hover:text-h55-blue transition-colors shadow-lg hover:shadow-h55-gold/50 transform hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>

          {/* Coluna de Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-h55-blue mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-4 text-gray-700">
                <a
                  href="mailto:contato@suaempresa.com.br"
                  className="flex items-center space-x-4 group"
                >
                  <FiMail className="text-h55-blue text-2xl group-hover:text-h55-gold transition-colors" />
                  <span className="text-lg">
                    contato@h55negociosimob.com.br
                  </span>
                </a>
                <a
                  href="https://wa.me/5531991697999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group"
                >
                  <FiPhone className="text-h55-blue text-2xl group-hover:text-h55-gold transition-colors" />
                  <span className="text-lg">(31) 99169-7999</span>
                </a>
                <div className="flex items-center space-x-4">
                  <FiMapPin className="text-h55-blue text-2xl" />
                  <span className="text-lg">Belo Horizonte, MG, Brasil</span>
                </div>
              </div>
            </div>
            {/* Opcional: Adicionar um mapa aqui, se desejar */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg h-64">
              {/* Por exemplo, um iframe do Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240109.8309995163!2d-44.10413054157929!3d-19.90273874395493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690cacacf2c33%3A0x4413d705d6b445b2!2sBelo%20Horizonte%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1693938959325!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
