import styles from './hero.module.css'
function Hero(){
  return(
    <div className={styles.container}>
        <img className={styles.image} src="https://images.pexels.com/photos/7256190/pexels-photo-7256190.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
    <div className={styles.content}>
        <h1>Apurva Somani</h1>
        <p className={styles.text}>Simply described, it's a work of art made from resin materials, especially polymer or epoxy resin. In order to make polymer or epoxy resin, you must combine two ingredients: the primary resin ingredient and the liquid catalyst or hardener. Casting is the method of pouring the resin mixture into a mould.</p>
        <button className={styles.button}>Buy Now</button>
    </div>
    </div>
  )
}
export default Hero;