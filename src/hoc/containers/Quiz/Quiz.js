import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                id: 1,
                question: 'What color is the sky?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Blue', id: 1},
                    {text: 'Red', id: 2},
                    {text: 'Green', id: 3},
                    {text: 'Yellow', id: 4}
                ]
            },
            {
                id: 2,
                question: 'How to speak "Hello" in russian?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Пока', id: 1},
                    {text: 'Привет', id: 2},
                    {text: 'Извините', id: 3},
                    {text: 'Хило', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log(answerId)
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Please answer all questions</h1>
                    <ActiveQuiz 
                    question={this.state.quiz[this.state.activeQuestion].question} 
                    answers={this.state.quiz[this.state.activeQuestion].answers} 
                    onAnswerClick={this.onAnswerClickHandler}
                    quizLength={this.state.quiz.length}
                    activeQuestion={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz