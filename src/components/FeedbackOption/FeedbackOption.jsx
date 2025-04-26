import css from './FeedbackOption.module.css'

export class FeedbackOption {


    render() {
        { handleBtnFeedback = this.props.name }

        <div className={css.feedback__option}>
            <button className={css.feedback__btn}>good</button>
            <button className={css.feedback__btn}>neutral</button>
            <button className={css.feedback__btn}>bad</button>
        </div>
    }
}