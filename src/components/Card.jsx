<Card className="bg-blue-300 w-full">
        <CardHeader>
          <CardTitle>Formulário de Login</CardTitle>
          <CardDescription>Insira suas credenciais de acesso</CardDescription>
        </CardHeader>
        <CardContent>
          <form className='space-y-4'>
            <div className='flex flex-col items-start'>
              <Label className='mb-3'>E-mail</Label>
              <Input type="email" className="bg-zinc-100 focus" />
            </div>
            <div className='flex flex-col items-start'>
              <Label className='mb-3'>Senha</Label>
              <Input type="password" className="bg-zinc-100" />
            </div>
            <div>
              <Button className="w-full">
                <LogIn className='size-4 mr-1' />
                Entrar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>