# 📋 Cadastro de Pessoas com Autocompletar Endereço (ViaCEP)

Este projeto é uma aplicação web responsiva voltada para o **cadastro de pessoas**, com preenchimento automático de endereço a partir do **CEP**, utilizando a API pública [ViaCEP](https://viacep.com.br/).

Desenvolvido como parte do Trabalho de Conclusão de Curso (TCC), o projeto aplica conceitos de **usabilidade, acessibilidade, engenharia de software e consumo de APIs REST**, com foco em melhorar a experiência do usuário em formulários online.

---

## 🚀 Funcionalidades

- ✅ Cadastro completo com dados pessoais e endereço.
- ✅ Preenchimento automático de rua, bairro, cidade e UF a partir do CEP.
- ✅ Validações de formulário (campos obrigatórios e tipos).
- ✅ Mensagens de erro acessíveis para leitores de tela.
- ✅ Layout responsivo com design elegante e cores profissionais.
- ✅ Integração assíncrona com API ViaCEP usando `fetch` e `async/await`.

---

## 🧠 Tecnologias Utilizadas

- **HTML5**
- **CSS3 (custom properties, responsividade)**
- **JavaScript Vanilla (ES6+)**
- **API Pública [ViaCEP](https://viacep.com.br/)**
- **Google Fonts** (Poppins, Josefin Sans)

---

## 📁 Estrutura de Diretórios

```bash
├── index.html                # Página inicial com formulário
├── cadastro-finalizado.html # Página de sucesso
├── styles/
│   ├── reset.css             # Reset de estilos
│   └── styles.css            # Estilo principal customizado
├── script.js                 # Lógica JavaScript da busca e validação
├── img/                      # Logos, ícones e imagens ilustrativas
└── README.md
```


---

## 📊 Resultados

Segundo testes com 15 usuários:

- Redução de 42% no tempo de preenchimento do formulário.
- Aumento da pontuação SUS de 64 para **86 pontos**.
- 100% dos participantes classificaram a funcionalidade de autocompletar como útil.

---

## 📌 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/ElT0N-R/Data-Book
   ```

2. Abra o arquivo `index.html` em seu navegador.

> Não é necessário instalar dependências ou servidores. O projeto é 100% front-end.

---

## 👨‍🎓 Autor

**Elton Messias**  
Graduando em Analise e Desenvolvimento de Sistemas  
Projeto de Conclusão de Curso – 2025

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**.  
Sinta-se livre para usar, estudar e adaptar.
