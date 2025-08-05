import React from 'react'
import ButtonRound from '@/components/ui/button'
import style from "./style.module.css"
const RecrutingBox = () => {
    return (
        <>
            <div className={`${style.container} ${style.sectionContent}`}>
                <h3>Recruting?</h3>
                <p>
                    Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.
                </p>
                <ButtonRound name="Start Recruiting Now" type="button" className="bgFilled" />
            </div>
        </>
    )
}

export default RecrutingBox
