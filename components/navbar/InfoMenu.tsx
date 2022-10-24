import Menu from "./Menu"

export default function InfoMenu(props:any){
    const menu = props.menu;
    return(
        <>
            <Menu menu={menu}/>
        </>
    )
}