export const categories = [
  { slug: 'inteligencia-artificial', title: 'Inteligência Artificial', short: 'IA', icon: '◉', description: 'Ferramentas, modelos, automação e aplicações práticas.', topics: 'Modelos de linguagem · Ferramentas · Automação' },
  { slug: 'hardware', title: 'Hardware e Computadores', short: 'Hardware', icon: '▦', description: 'Componentes, montagem, manutenção e computadores acessíveis.', topics: 'Processadores · Mini PCs · Montagem' },
  { slug: 'maker-diy', title: 'Maker e DIY', short: 'Maker & DIY', icon: '⌘', description: 'Eletrônica, Arduino, ESP32, Raspberry Pi e projetos feitos por você.', topics: 'Arduino · ESP32 · Impressão 3D' },
  { slug: 'reaproveitamento', title: 'Reaproveitamento Tecnológico', short: 'Reaproveitamento', icon: '↻', description: 'Novas possibilidades para equipamentos que ainda podem ser úteis.', topics: 'Notebooks antigos · TV boxes · Reuso' },
  { slug: 'casa-inteligente', title: 'Casa Inteligente', short: 'Casa inteligente', icon: '⌂', description: 'Sensores, IoT, Home Assistant e automação residencial.', topics: 'Home Assistant · IoT · Sensores' },
  { slug: 'linux-sistemas', title: 'Linux e Sistemas', short: 'Linux', icon: '⌁', description: 'Distribuições, servidores domésticos, Docker e virtualização.', topics: 'Linux · Homelab · Docker' },
  { slug: 'redes-seguranca', title: 'Redes e Segurança', short: 'Redes & segurança', icon: '⬡', description: 'Conectividade, privacidade e segurança digital explicadas com clareza.', topics: 'Wi-Fi · VPN · Privacidade' },
  { slug: 'celulares-gadgets', title: 'Celulares e Gadgets', short: 'Gadgets', icon: '▣', description: 'Smartphones, acessórios e dispositivos inteligentes.', topics: 'Smartphones · Wearables · Acessórios' },
  { slug: 'ciencia-inovacao', title: 'Ciência e Inovação', short: 'Ciência', icon: '✳', description: 'Descobertas, robótica e tecnologias emergentes.', topics: 'Robótica · Computação · Inovação' },
  { slug: 'tutoriais-guias', title: 'Tutoriais e Guias', short: 'Tutoriais', icon: '↗', description: 'Passo a passo, configurações e projetos práticos.', topics: 'Guias · Solução de problemas · Projetos' },
] as const;

export const editorialPitches = [
  { title: 'Servidor doméstico com um notebook antigo: o que avaliar antes de começar', category: 'linux-sistemas', label: 'HOMELAB', summary: 'Consumo, limitações, segurança e escolhas iniciais para reaproveitar um equipamento.' },
  { title: 'TV Box como projeto maker: compatibilidade antes da ideia', category: 'reaproveitamento', label: 'REAPROVEITAMENTO', summary: 'Uma pauta para explicar por que modelo, firmware e suporte fazem diferença.' },
  { title: 'Cyberdeck: planeje um computador portátil com peças reaproveitadas', category: 'maker-diy', label: 'PROJETO MAKER', summary: 'Componentes, ergonomia e decisões de projeto antes de montar.' },
  { title: 'IA local: requisitos, limites e privacidade em computadores pessoais', category: 'inteligencia-artificial', label: 'INTELIGÊNCIA ARTIFICIAL', summary: 'Um guia introdutório sobre o que verificar sem prometer desempenho específico.' },
] as const;
