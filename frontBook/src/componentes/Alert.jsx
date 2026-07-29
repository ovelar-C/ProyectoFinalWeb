import styles from "../stylepages/alert.module.css"
export default function Alert({mensaje, tipo}){
    if(!mensaje) return null
    return(
        <>
       <div className={`${styles.alert} ${styles[tipo]}`}>
            {mensaje}
        </div>
        </>
    )
}