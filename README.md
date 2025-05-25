# CuidaAe

CuidaAe é um aplicativo mobile que simplifica o agendamento e o gerenciamento de atendimentos em clínicas e consultórios. Com foco em experiência do usuário, acessibilidade e agilidade, o CuidaAe foi criado para conectar profissionais da saúde a seus pacientes de forma fácil, moderna e eficiente.

## ✨ Propósito

O CuidaAe tem como missão tornar o atendimento em saúde mais acessível e organizado, tanto para pacientes quanto para profissionais da área. Ele centraliza agendamentos, lembretes, histórico de consultas e comunicação, promovendo bem-estar, cuidado e conveniência.

## 📱 Funcionalidades (MVP)

- Autenticação de usuários (paciente e profissional)
- Cadastro de perfil
- Agendamento de consultas
- Visualização da agenda
- Lembretes automáticos
- Cancelamento e reagendamento
- Interface intuitiva e responsiva

## 🛠️ Tecnologias Utilizadas

- **React Native CLI**
- **TypeScript**
- **Restyle** (design system)
- **Supabase** (backend as a service)
- **React Navigation**
- **AsyncStorage**

## 📁 Estrutura do Projeto

```bash
cuidaae/
├── android/
├── ios/
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── navigation/
│   ├── screens/
│   │   ├── Auth/
│   │   ├── Home/
│   │   └── Schedule/
│   ├── services/
│   ├── store/
│   ├── styles/
│   └── utils/
├── .gitignore
├── app.json
├── tsconfig.json
└── README.md
```

## 🚀 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/cuidaae.git
   cd cuidaae
   ```

2. Instale as dependências:
   ```bash
   yarn install
   ```

3. Configure variáveis de ambiente:
   Crie um arquivo `.env` e insira suas chaves do Supabase e outras credenciais necessárias.

4. Rode o app:
   ```bash
   npx react-native run-android
   # ou
   npx react-native run-ios
   ```

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Desenvolvido com ❤️ por André Resende.