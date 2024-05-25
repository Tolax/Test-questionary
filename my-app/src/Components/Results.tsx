import React from 'react'
import { useSelector } from 'react-redux';


export default function Results() {
    const {counter, right} = useSelector((state: any) => state)
    const {rightEasy, rightMedium, rightHard} = useSelector((state: any) => state);

    return (
    <div>
        <div>Всего вопросов: {counter}</div>
        <div>Легких{rightEasy}</div>
        <div>Средних{rightMedium}</div>
        <div>Тяжелых{rightHard}</div>
        <div>Правильных ответов: {right}</div>
    </div>
  )
}
