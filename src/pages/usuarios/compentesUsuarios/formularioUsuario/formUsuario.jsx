import {useState } from 'react';
import './formUsuario.css'; // Importar o CSS se for necessário
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Correto uso do useNavigate
import { Button } from '@/components/ui/button';

const FormUsuario = ({ closeModal, user }) => {
    const [formData, setFormData] = useState({
        id: user?.id || '',
        nome: user?.nome || '',
        email: user?.email || '',
        celular: user?.celular || ''
    });

    const navigate = useNavigate(); // Inicialize o hook useNavigate

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão de submit

        try {
            if (user) {
                const response = await fetch(`https://cosme4447.c44.integrator.host/api/usuarios/updateuser/${user.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (!response.ok) {
                    throw new Error('Erro ao salvar os dados');
                }

                const data = await response.json();
                toast.success('Dados Atualizados.', {
                    autoClose: 2500
                });
                console.log('Dados salvos com sucesso:', data);

            } else {

                const response = await fetch(`https://cosme4447.c44.integrator.host/api/usuarios/adduser`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                    
                });
                if (!response.ok) {
                    throw new Error('Erro ao salvar os dados');
                }

                const data = await response.json();
                toast.success('Usuário Inserido com Sucesso.', {
                    autoClose: 2500
                });
                console.log('Dados salvos com sucesso:', data);
            }


            // Fechar o modal após 2 segundos
            setTimeout(() => {
                closeModal();
                // Redirecionar para a página de usuários após fechar o modal
                navigate('/usuarios');
            }, 3000);

        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            // Exibir Toast de erro
            toast.error('Erro ao salvar o usuário.', {
                autoClose: 2500
            });
        }
    };

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={closeModal} className="close-modal">X</button>
                <h2 className='text-left font-bold'>Editar Usuário</h2>
                <form onSubmit={handleSubmit}>

                    {/* <div className='mt-2 text-left flex flex-col'>
                        <label className='text-left font-bold' htmlFor="id">ID:</label>
                        <input type="text" className="bg-white text-blue-400 p-2 ml-2 border w-32 text-center" readOnly value={formData.id} name="id" />
                    </div> */}
                    <div className='mt-2 text-left'>
                        <label className='text-left font-bold' htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            className="bg-white text-blue-400 p-2 ml-2 border w-full mt-3"
                            value={formData.nome}
                            onChange={handleInputChange}
                            name="nome"
                        />
                    </div>
                    <div className='mt-2 text-left'>
                        <label className='text-left font-bold'>Email:</label>
                        <input
                            type="email"
                            className="bg-white text-blue-400 p-2 ml-2 border w-full mt-3"
                            value={formData.email}
                            onChange={handleInputChange}
                            name="email"
                        />
                    </div>
                    <div className='mt-2 text-left'>
                        <label className='text-left font-bold'>Celular:</label>
                        <input
                            type="text"
                            className="bg-white text-blue-400 p-2 ml-2 border w-full mt-3"
                            value={formData.celular}
                            onChange={handleInputChange}
                            name="celular"
                        />
                    </div>

                    <Button variant="secondary" type="submit" className='btnTable p-3 bg-blue-600 text-white font-bold rounded mt-6 w-full'>
                        Salvar Dados
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default FormUsuario;
