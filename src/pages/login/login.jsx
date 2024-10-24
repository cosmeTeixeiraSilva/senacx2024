// Bibliotecas
// import { SubmitHandler, useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
// Componentes
import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Rocket } from "lucide-react";
// Imagens
import logo from "/logo.png";
// Axios
// import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import './login.css'

export function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
    };
    try {
      const response = await fetch('https://cosme4447.c44.integrator.host/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        //console.log(responseData);
        const dadosComp = JSON.parse(JSON.stringify(responseData));
        //Criando um Array de Objeto 
        const ObjDados = dadosComp[0];
        //console.log(ObjDados.email);
        // Salve as credenciais no local storage
        localStorage.setItem('juradoId', ObjDados.id); // Ajuste conforme sua API
        localStorage.setItem('juradoEmail', ObjDados.email); // Ajuste conforme sua API
        localStorage.setItem('juradoNivel', ObjDados.nivel); // Ajuste conforme sua API
        localStorage.setItem('juradoNome', ObjDados.nome);
        //console.log('Usuário Conseguiu Logar....');
        if (ObjDados.nivel === 1) {

          navigate('/senacxadm');

        } else if (ObjDados.nivel === 2) {

          navigate('/senacx');

        } else {

          navigate('/login');

        }

      } else {

        //console.log('Erro ao fazer login', response.status);
        alert("Usuário não Localizado...");
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="h-screen w-full flex">
      <div className="h-screen md:w-2/4 bg-pattern bg-blue-900"></div>
      <div className="h-screen w-full md:w-2/4 flex flex-col justify-center items-center gap-1 bg-white border">


        <img className="mx-auto w-36" src={logo} alt="logo senac" />
        <div className="max-w-md  p-2">
          <form onSubmit={onSubmit} className="space-y-5 ">
            <div className="flex text-start flex-col w-[300px]">
              <Label htmlFor="email" className="md:text-lg lg:text-xl text-orange-500 ">Login:</Label>
              <Input
                type="email"
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="nome@senacx.edu.br"
                className="outline-none mt-4 w-[300px] p-2"
              // className={errors?.email?.type === 'required' ? "border-red-500" : "focus:border-azulSenac outline-none text-lg text-zinc-500 placeholder:text-zinc-300"}
              // {...register('email')}
              />
              {/* <span className="text-red-500">Erro</span> */}
            </div>
            <div className="flex text-start flex-col ">
              <Label htmlFor="password" className="md:text-lg lg:text-xl lblLogin text-orange-500 ">Senha:</Label>
              <Input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sua senha"
                className="outline-none mt-4 p-2 "
              // // {...register('password')}
              />
              {/* <span className="text-red-500">Erro</span> */}
            </div>
            <div className="flex items-center justify-between">
              {/* <div className="flex gap-1">
                  <Checkbox />
                  <Label className="text-zinc-500 font-normal text-sm">Manter conectado</Label>
                </div> */}

            </div>
            <Button
              type="submit"
              variant={'secondary'}
              className="w-full bg-blue-900 h-11 text-lg text-white font-bold"
            >
              <Rocket className="size-5 mr-3" /> ENTRAR
            </Button>

          </form>
        </div>
        <div className="localidade flex flex-col">
          <span className="text-orange-500 font-bold mt-3"> Edição 2024 </span>
          <span className="text-orange-500 font-bold"> Lavras/MG </span>
        </div>


      </div>

    </div>
  )
}
