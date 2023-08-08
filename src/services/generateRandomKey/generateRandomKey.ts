import { Chance } from "chance";

export const generate = () => {
    let password = "";
    const specialChar = Chance().string({symbols: true, length: 1, pool: "#$@!*"})
    const char = Chance().string({ length: 12, symbols: false})
    password = specialChar + char;
    return password
}