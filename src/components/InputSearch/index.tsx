import { SearchInput } from "evergreen-ui"
import { ChangeEvent } from "react"

interface InputSearchProps {
    placeholder: string
    width: number
    height: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function InputSearch(props: InputSearchProps) {
    return (
        <SearchInput 
            placeholder={props.placeholder}
            width={props.width}
            height={props.height}
            onChange={props.onChange}
        />
    )
}