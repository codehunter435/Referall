
export default function AlertCustom({klickme}){
    return(
        <div id="AlertCustom">
            <div id="AlertContent">
            <h1>Welcome</h1>
            <p>Selamat Berbelanja di Toko Online Shop ini</p>
            </div>
            <div className="button" onClick={()=>{
                klickme(false)
            }}>Paham</div>
        </div>
    )
}