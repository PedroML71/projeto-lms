Este é um projeto incrível construído com Next.js.
Ele foi construído usando Mysql como banco de dados,
Clerk como solução de autenticação e
UPLOADTHING como host de imagens,
Mux como processador de videos,
Prisma como sulução ORM de banco de dados,
e Stripe como processador de pagamentos.
Para executá-lo em sua máquina local, siga estas etapas:

**Clone o repositório:**
git clone https://github.com/PedroML71/projeto-lms.git

**Instale as dependências:**
npm install

**Crie um arquivo `.env` na raiz do projeto:**

**Adicione as seguintes variáveis de ambiente ao arquivo `.env`:**
DATABASE_URL=seu-url-do-banco-de-dados
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=chave-publica-do-clerk
CLERK_SECRET_KEY=chave-secreta-do-clerk
NEXT_PUBLIC_CLERK_SIGN_IN_URL=link-login-do-app (no caso deste app você deve usar o /sign-in)
NEXT_PUBLIC_CLERK_SIGN_UP_URL=link-cadastro-do-app (no caso deste app você deve usar o /sign-up)
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=link-redirect-após-login (no caso deste app você deve usar o /)
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=link-redirect-após-cadastro (no caso deste app você deve usar o /)
UPLOADTHING_SECRET=senha-secreta-do-uploadthing
UPLOADTHING_APP_ID=id-do-projeto-seu-projeto-uploadthing
MUX_TOKEN_ID=id-do-mux-token
MUX_TOKEN_SECRET=senha-secreta-do-mux-token
NEXT_PUBLIC_APP_URL=url-pública-deste-app
STRIPE_API_KEY=sua-chave-do-stripe
STRIPE_WEBHOOK_SECRET=senha-secreta-do-webhook-do-stripe
NEXT_PUBLIC_TEACHER_ID=id-do-usuario-stripe-custumer (banco de dados, professor que vai receber os pagamentos dos cursos)

**Inicie o prisma:**
npx prisma db push

**Inicie o servidor de desenvolvimento:**
npm run dev
