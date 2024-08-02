import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Results from "./Results";
import loadIcon from "../icons/round_12906744.png";
import { StyledButton } from "./Styled-components/Button";
import { fetchQuestions } from "../store/questionSlice";
import { AppDispatch } from "../store/store";
import {
  incrementCounter,
  rightAnswersCounter,
  easyCounter,
  mediumCounter,
  hardCounter,
} from "../store/resultSlice";
import { RootState } from "./interface";

const Questions: React.FC = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedOption(value);
  };

  const handleNextButtonClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setSelectedOption("");
  };

  const fetchedQuestions = useSelector(
    (state: RootState) => state.questions.items
  );

  const status = useSelector((state: RootState) => state.questions.status);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const checkTheAnswer = () => {
    if (selectedOption === fetchedQuestions[currentIndex].correct_answer) {
      if (fetchedQuestions[currentIndex].difficulty === "easy") {
        dispatch(easyCounter());
      }
      if (fetchedQuestions[currentIndex].difficulty === "medium") {
        dispatch(mediumCounter());
      }
      if (fetchedQuestions[currentIndex].difficulty === "hard") {
        dispatch(hardCounter());
      }
      dispatch(rightAnswersCounter());
    }
    dispatch(incrementCounter());
  };

  const resul = useSelector((state: RootState) => state.results);

  return (
    <div id="Questions" className="text-center w-100">
      {status !== "succeeded" ? (
        <div>
          Загрузка
          <p className="rotating">
            <img style={{ height: "50px" }} src={loadIcon} alt="Loading icon" />
          </p>
        </div>
      ) : (
        ""
      )}
      {currentIndex === fetchedQuestions.length && status === "succeeded" ? (
        <Results />
      ) : (
        <div>
          {fetchedQuestions.length > 0 &&
            currentIndex < fetchedQuestions.length && (
              <div>
                <div className="fs-2">Вопрос №{resul.current + 1}</div>
                <div className="rounded  text-dark p-3 mb-3">
                  <p className="fs-3">{fetchedQuestions[currentIndex].question}</p>
                  <div className="d-flex flex-column align-items-center">
                    {fetchedQuestions[currentIndex].allAnswers.map(
                      (item, index) => (
                        <label
                          className={`w-75 fs-4 rounded-pill border border-3 mt-4 mt-4 ${
                            selectedOption === item
                              ? "border-info"
                              : "border-dark"
                          }`}
                          key={index}
                        >
                          <input
                            type="radio"
                            name="answer"
                            value={item}
                            checked={selectedOption === item}
                            onChange={handleAnswerChange}
                          />
                          {item}
                        </label>
                      )
                    )}
                  </div>
                </div>
                <StyledButton
                  id="styledButton"
                  onClick={() => {
                    checkTheAnswer();
                    handleNextButtonClick();
                  }}
                  disabled={selectedOption === ""}
                >
                  Ответить
                </StyledButton>
              </div>
            )}
        </div>
      )}
    </div>
  );
});

export default Questions;
