import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './interface';

const Results: React.FC = () => {
    const resul = useSelector((state: RootState) => state.results);

    return (
        <div className='custom-width  rounded bg-light text-dark p-3 mb-3'>
            <div>
                <h1>Results</h1>
            </div>
        <div className='fs-3 d-flex justify-content-around'>
            <div>
                <p style={{color: 'teal' }}>All questions: {resul.current}</p>
                <p style={{color: 'purple' }}>Right: {resul.rightAnswers}</p>
                <p style={{color: 'green' }}>Easy: {resul.easy}</p>
                <p style={{color: 'orange' }}>Medium: {resul.medium}</p>
                <p style={{color: 'red' }}>Hard: {resul.hard}</p>
            </div>
            <div className="histogram rounded">
                <div className="bar">
                    <div style={{color: 'black' }}>{resul.current}</div>
                    <div style={{height: `${resul.current *25}px`, backgroundColor: 'teal', borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}></div>
                </div>
                <div className="bar">
                    <div style={{color: 'black' }}>{resul.rightAnswers}</div>
                    <div style={{ height: `${resul.rightAnswers* 25}px`, backgroundColor: 'purple', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}></div>
                </div>
                <div className="bar">
                    <div style={{color: 'black' }}>{resul.easy}</div>
                    <div style={{ height: `${resul.easy *25}px`, backgroundColor: 'green', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}></div>
                </div>
                <div className="bar">
                    <div style={{color: 'black' }}>{resul.medium}</div>
                    <div style={{ height: `${resul.medium *25}px`, backgroundColor: 'orange', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}></div>
                </div>
                <div className="bar">
                    <div style={{color: 'black' }}>{resul.hard}</div>
                    <div style={{ height: `${resul.hard *25}px`, backgroundColor: 'red', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}></div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Results;
