import Header  from "./Header"

export const CommonPage=({children})=>{
    return(
        <>
            <Header/>
            {children}
        </>
    )
}