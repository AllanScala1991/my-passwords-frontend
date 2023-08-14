import { ChangeEvent, useEffect, useState } from "react";
import { BaseMenu } from "../../components/BaseMenu";
import { InputSearch } from "../../components/InputSearch";
import { SmallLogo } from "../../components/SmallLogo";
import "./index.css";
import { searchByTitle } from "../../services/searchByTitle/searchByTitle.service";
import { searchAllPasswordsByUserId } from "../../services/searchAllPasswordsByUserId/searchAllPasswordsByUserId.service";
import { PasswordList } from "../../components/PasswordsList";
import { AddIcon, Button as CreateButton } from "evergreen-ui";
import { InputImage } from "../../components/InputImage";
import { generate } from "../../services/generateRandomKey/generateRandomKey";
import { ModalCreatePassword } from "../../components/ModalCreatePassword";
import { createPassword } from "../../services/createPassword/createPassword.service";
import { ModalMessage } from "../../components/ModalMessage";
import { Loading } from "../../components/Loading";

export function Home() {
    const [passwords, setPasswords] = useState([]);
    const [randomKey, setRandomKey] = useState("");
    const [createPasswordShow, setCreatePasswordShow] = useState(false);
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [messageModal, setMessageModal] = useState({
        title: "",
        message: ""
    })
    const [loadingShow, setLoadingShow] = useState(false);

    useEffect(() => {
        setLoadingShow(true)

        const getAllPasswords = async () => {
            const getPasswords = await searchAllPasswordsByUserId(`${window.localStorage.getItem('id')}`);

            if(getPasswords.status != 200) setPasswords([])

            setPasswords(getPasswords.data)
        }

        getAllPasswords()
        setLoadingShow(false)
    }, [setPasswords])

    const getAllPasswordsByTitle = async (title: string) => {
        setLoadingShow(true);
        const allPasswords = await searchByTitle(title);

        setPasswords(allPasswords.data);
        setLoadingShow(false);
    }

    const generateRandomPassword = () => {
        setLoadingShow(true);
        const randomPassword = generate();

        setRandomKey(randomPassword)
        setLoadingShow(false);
    }

    const updatePasswordTable = async () => {
        setLoadingShow(true);
        const getPasswords = await searchAllPasswordsByUserId(`${window.localStorage.getItem('id')}`);

        if(getPasswords.status != 200){
            setPasswords([])
            setLoadingShow(false);
        }

        setPasswords(getPasswords.data)
        setLoadingShow(false);
    }

    const savePassword = async (title: string, username: string, password: string) => {
        setLoadingShow(true);
        const response = await createPassword({title, username, password});
    
        if(response.status != 201) {
            setLoadingShow(false)
            setShowMessageModal(true)
            setMessageModal({title: "Ops...", message:response.message});
            return
        }

        setShowMessageModal(true)
        setMessageModal({title: "Sucesso!", message:"Registro criado com sucesso."})
        updatePasswordTable();
        setCreatePasswordShow(false);
        setLoadingShow(false);
    }

    return (
        <div className="homeContainer">
            {
                loadingShow ?
                    <Loading />
                :
                    null
            }
            <ModalCreatePassword 
                isShown={createPasswordShow}
                isClose={() => {setCreatePasswordShow(false)}}
                onClick={(title: string, username: string, password: string) => savePassword(title, username, password)}
            />
            <ModalMessage 
                isShow={showMessageModal}
                onClose={() => {setShowMessageModal(false)}}
                title={messageModal.title}
                message={messageModal.message}
            />
            <div className="baseContainer">
                <SmallLogo />
                <BaseMenu />
            </div>

            <div className="middleContainer">
                <InputSearch 
                    placeholder="Faça uma busca pelo titulo..."
                    width={450}
                    height={35}
                    onChange={async (e:ChangeEvent<HTMLInputElement>) => {
                        if (e.target.value) {
                            getAllPasswordsByTitle(e.target.value)
                        }

                        const getPasswords = await searchAllPasswordsByUserId(`${window.localStorage.getItem('id')}`);

                        if(getPasswords.status != 200) setPasswords([])

                        setPasswords(getPasswords.data);
                    }}
                />

                <CreateButton 
                    iconBefore={AddIcon}
                    marginLeft={30}
                    onClick={() => {setCreatePasswordShow(true)}}
                >NOVO REGISTRO</CreateButton>

                <InputImage 
                    value={randomKey}
                    onClick={() => {generateRandomPassword()}}
                />
                
            </div>

            <div className="resultsContainer">
                {
                    passwords ?
                        <PasswordList 
                            passwords={passwords}
                            onUpdatePasswordTable={() => updatePasswordTable()}
                        />
                        
                    : 
                        <PasswordList 
                            passwords={[]}
                            onUpdatePasswordTable={() => updatePasswordTable()}
                        />
                }
            </div>
        </div>
    )
}