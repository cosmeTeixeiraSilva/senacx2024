import { useEffect, useState } from 'react';
import "./usuarios.css";
import Header from '@/components/base/header/header';
import Menu from '@/components/meus/Menu/menu';
import { Button } from '@/components/ui/button';
import FormUsuario from './compentesUsuarios/formularioUsuario/formUsuario'; // Corrigir o import
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { toast } from 'react-toastify';
import { Pen, Trash2, UserPlus2 } from 'lucide-react';

export default function Usuarios() {

    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const openModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };
    //novo usuário
    const openModalNewUser = () => {
        //limpaCampos 

        //seta True para exibir o Modal 
        setShowModal(true);
    };

    const closeModal = () => {

        setShowModal(false);
        // Forçar recarregamento da página
        window.location.reload();

    };



    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch('https://cosme4447.c44.integrator.host/api/usuarios/listusers');
                const data = await response.json();
                setData(data);
            } catch (err) {
                console.error('Erro ao buscar dados:', err);
            }
        };
        fetchData();
    }, []);
    //Função Deletar Usuário 
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/usuarios/deleteuser/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Erro ao excluir os dados');
            }

            const data = await response.json();
            console.log('Dados excluídos com sucesso:', data);

            // Exibir Toast de sucesso
            toast.success('Usuário excluído com sucesso!', {

                autoClose: 1000
            });

            // Atualiza a lista de itens
            setData((prevItems) => prevItems.filter(item => item.id !== id)); // Remove o usuário excluído

        } catch (error) {
            console.error('Erro ao excluir o usuário:', error);
            // Exibir Toast de erro
            toast.error('Erro ao excluir o usuário.', {

                autoClose: 1000
            });
        }
    };
    return (
        <div className='usuarios flex flex-col  p-3  h-full'>
            <Header />
            <Menu />
            <div className="submenu flex justify-between">
                <span className='text-left tituloTable'>Meus Usuários</span>
                <Button variant="secondary" className=' btnTable p-5 bg-blue-600 text-white font-bold rounded' onClick={() => openModalNewUser()} > <UserPlus2 className='mr-2' /> Novo Usuário</Button>
            </div>

            <Table className="striped tabela mt-3 ">
                <TableCaption>Usuários Cadastrados.</TableCaption>
                <TableHeader>
                    <TableRow className="bg-blue-500">
                        <TableHead className="w-[200px] text-orange-400 font-bold">Nome</TableHead>
                        <TableHead className="w-[200px] text-orange-400 font-bold">E-mail</TableHead>
                        <TableHead className="w-[100px] text-orange-400 font-bold">Celular</TableHead>
                        <TableHead className="text-center w-[100px] text-orange-400 font-bold">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody >
                    {data.map(user => (
                        <TableRow className="py-4" key={user.id}>
                            <TableCell className="font-medium text-left py-2">{user.nome}</TableCell>
                            <TableCell className="font-medium text-left">{user.email}</TableCell>
                            <TableCell className="font-medium text-left">{user.celular}</TableCell>
                            <TableCell className="acoes text-right" key={user.id}>
                                <Button variant="secondary" className='font-medium btnTable rounded bg-blue-600 text-white' onClick={() => openModal(user)}><Pen className='size-4' /></Button>
                                <Button variant="secondary" className='font-medium btnTable text-white rounded bg-orange-500' onClick={() => handleDelete(user.id)}><Trash2 className='size-4' /></Button>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {showModal && <FormUsuario closeModal={closeModal} user={selectedUser} />}
        </div>
    );
}
