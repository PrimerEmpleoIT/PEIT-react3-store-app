import Menu from "./Menu"

export default function InfoMenu(props:any){
    const menu = props.menu;
    return(
        <>
        { (menu) ?<Menu className={'active-menu'}/>:<Menu/>}
        </>
    )
}