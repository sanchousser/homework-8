import { Component } from 'react'
import css from './FeedbackOption.module.css'

export const FeedbackOption = ({onGood, onBad, onNeutral}) => {


        return (
            <div className={css.feedback__option}>
                <button onClick={onGood} className={css.feedback__btn}>good</button>
                <button onClick={onBad} className={css.feedback__btn}>neutral</button>
                <button onClick={onNeutral} className={css.feedback__btn}>bad</button>
            </div>)
}