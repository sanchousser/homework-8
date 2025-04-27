import { Component } from 'react'
import css from './FeedbackOption.module.css'

export class FeedbackOption extends Component {

    constructor(props) {

        super(props);
    }

    render() {


        const handleBtnFeedback = this.props.handleBtnFeedback


        return (
            <div className={css.feedback__option}>
                <button onClick={() => handleBtnFeedback('good')} className={css.feedback__btn}>good</button>
                <button onClick={() => handleBtnFeedback('neutral')} className={css.feedback__btn}>neutral</button>
                <button onClick={() => handleBtnFeedback('bad')} className={css.feedback__btn}>bad</button>
            </div>)
    }
}