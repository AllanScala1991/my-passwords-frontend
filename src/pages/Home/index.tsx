import { ChangeEvent, useState } from "react";
import { BaseMenu } from "../../components/BaseMenu";
import { InputSearch } from "../../components/InputSearch";
import { SmallLogo } from "../../components/SmallLogo";
import "./index.css";
import { searchByTitle } from "../../services/searchByTitle/searchByTitle.service";

export function Home() {
    const [passwords, setPasswords] = useState([]);

    const getAllPasswordsByTitle = async (title: string) => {
        const allPasswords = await searchByTitle(title);

        setPasswords(allPasswords.data);
    }

    return (
        <div className="homeContainer">
            <div className="baseContainer">
                <SmallLogo />
                <BaseMenu />
            </div>

            <div className="middleContainer">
                <InputSearch 
                    placeholder="Busque o titulo..."
                    width={350}
                    height={35}
                    onChange={async (e:ChangeEvent<HTMLInputElement>) => {
                        if (e.target.value) {
                            getAllPasswordsByTitle(e.target.value)
                        }
                        // caso esteja em branco, ele tem que buscar todos os passwords pelo user id
                    }}
                />
                
            </div>

            <div className="resultsContainer">
                // ajustar o componente que vai mostrar as senhas e criar uma interface do password
                {
                    passwords ?
                        passwords.map((password: {id: string, title: string}) => {
                            return <p key={password.id}>{password.title}</p>
                        })
                    : null
                }
            </div>
        </div>
    )
}