import React from 'react'
import styles from './Profilecard.module.css'

function Card() {
    const CardArray = [{
        image: "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fpritesh.3b7c44ee9f2c717c5301037740bb6eb6.jpeg&w=1080&q=75",
        Name: "Pritesh Kumar",
        Role: "CTO @ FunctionUp",
        Experience:"9 Yrs Exp."
    },
    {
        image: "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanubhav.6a3b4e1b4097967be9b5418ab786f1ce.jpeg&w=1080&q=75",
        Name: "Anubhav Singh",
        Role: "Co-founder @ Dubdub.ai",
        Experience:"7 Yrs Exp."
    },
    {
        image: "https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906339831x204777177063368830%2F1669699961094.jpeg&w=1920&q=75",
        Name: "Uddhav Bamba ",
        Role: "Applied Scientist @ Amazon",
        Experience:"3 Yrs Exp."
    }, 
    {
        image: "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fdivij.e38501ee35233aae10ca4da99b3662f9.jpeg&w=1080&q=75",
        Name: "Divij Bajaj",
        Role: "Data Scientist @ Microsoft",
        Experience:"5 Yrs Exp."
        },
    {
        image: "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fsujit.2852909511d1395b806d66292e7112a3.jpeg&w=1080&q=75",
        Name: "Sujit Kumar",
        Role: "Senior IT Platform Architect, ZF Group, Germany",
        Experience:"11 Yrs Exp."
        },
 
    ]
    return (
         <div className={styles.main}>
          <img src="https://media.licdn.com/dms/image/C4D0BAQHn-mst7Jf8Pw/company-logo_200_200/0/1638195127235?e=2147483647&v=beta&t=PDDQjWKWpGJwb8n_r4PG7kBXblPtJYzC-Dtyy_oA0B8" className={styles.img1}/>
         <h3 className={styles.Div1}>Function Up</h3>
         <h2 className={styles.Div2}>Kickstart your high growth career</h2>
        <div className={styles.parent}>
            {CardArray.map((data) => (

                    <div className={styles.Card}>
                    <img className={styles.image} src={data.image} />
                    <p className={styles.Name}>{data.Name}</p>
                    <p className={styles.role}>{data.Role}</p>
                    <p className={styles.exp}>{data.Experience}</p>
                    

                </div>
            ))}
        </div>
        </div>
    )
}

export default Card
