# Deploy to Vercel

Este projeto está configurado para ser facilmente deployado na Vercel.

## 🚀 Como fazer o deploy

### Método 1: Conectar repositório GitHub (Recomendado)

1. Faça push do código para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Importe seu repositório do GitHub
5. A Vercel detectará automaticamente que é um projeto Vite
6. Clique em "Deploy"

### Método 2: Deploy via CLI

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. No diretório do projeto, execute:
```bash
vercel
```

3. Siga as instruções na tela

## ⚙️ Configurações

O projeto já inclui:

- ✅ `vercel.json` - Configuração de rotas para SPA
- ✅ `.vercelignore` - Arquivos excluídos do deploy
- ✅ Build script otimizado no `package.json`
- ✅ Configuração Vite otimizada para produção
- ✅ Code splitting automático

## 🔧 Scripts disponíveis

```bash
npm run dev      # Desenvolvimento local
npm run build    # Build para produção
npm run preview  # Preview local do build
npm test         # Rodar testes
```

## 📝 Variáveis de ambiente

Se você usar variáveis de ambiente, adicione elas no painel da Vercel:
1. Vá para o projeto na Vercel
2. Settings → Environment Variables
3. Adicione suas variáveis com prefixo `VITE_`

## 🌐 Domínio personalizado

Após o deploy, você pode:
1. Ir em Settings → Domains
2. Adicionar seu domínio personalizado
3. Configurar DNS conforme instruções

O projeto está pronto para produção! 🎉
