import { Table } from "evergreen-ui"

interface PasswordListProps {
    passwords: {
        id: string
        title: string
        username: string
        updatedAt: Date
    }[]
    showPassword: () => void
}

export function PasswordList(props: PasswordListProps) {
    return (
        <Table>
            <Table.Head>
                <Table.TextHeaderCell>Titulo</Table.TextHeaderCell>
                <Table.TextHeaderCell>Usuário</Table.TextHeaderCell>
                <Table.TextHeaderCell>Senha</Table.TextHeaderCell>
                <Table.TextHeaderCell>Ultima Atualização</Table.TextHeaderCell>
            </Table.Head>
            <Table.Body height={450}>
                {props.passwords.map((password) => (
                    <Table.Row key={password.id} isSelectable onSelect={() => alert(password.username)}>
                        <Table.TextCell>{password.title}</Table.TextCell>
                        <Table.TextCell>{password.username}</Table.TextCell>
                        <Table.TextCell>{"**********"}</Table.TextCell>
                        <Table.TextCell>{`${password.updatedAt}`}</Table.TextCell>
                    </Table.Row>
                ))

                }
            </Table.Body>
        </Table>
    )
}