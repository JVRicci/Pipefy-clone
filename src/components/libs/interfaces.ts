
interface dataCards{
    id: number,
    content: string,
    labels: string[],
    user?: string

}[]

interface dataTask{
    title: string, 
    creatable: boolean,
    done?: boolean,
    cards?: dataCards[]
}[]


