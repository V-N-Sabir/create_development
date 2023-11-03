import React from "react"
import ModalWin from "./mwin"


const CallModal = ({active, setActive}) => {
   
    //const [active, setActive] = React.useState(false)
   
    const copyTekst = () => {
        navigator.clipboard.writeText('Hello Alligator!')
        //console.log("copy");
    }


    return (
        <div>
        <ModalWin active={active} setActive={setActive}>
           <div className="mdl_tekst">
            <div><p>test</p></div>
            
            <div>
                {/*<button onClick={copyTekst} className="mdl_btn_copy">copy</button>*/}
            <button onClick={copyTekst} className="mdl_btn_cp ">
            </button>
            </div>

           </div>
            
        </ModalWin>

        </div>
    )
} 

export default CallModal