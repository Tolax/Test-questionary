import React from 'react';
import { useSelector } from 'react-redux';

interface RootState {
    counter: number;
    right: number;
    rightEasy: number;
    rightMedium: number;
    rightHard: number;
}

const Results: React.FC = () => {
    const { counter, right, rightEasy, rightMedium, rightHard } = useSelector((state: RootState) => state);

    return (
        <div className='custom-width  rounded bg-light text-dark p-3 mb-3'>
            <div>
                <h1>Results</h1>
            </div>
        <div className='d-flex justify-content-around'>
            <div>
                <p style={{color: 'teal' }}>All questions: {counter}</p>
                <p style={{color: 'purple' }}>Right: {right}</p>
                <p style={{color: 'green' }}>Easy: {rightEasy}</p>
                <p style={{color: 'orange' }}>Medium: {rightMedium}</p>
                <p style={{color: 'red' }}>Hard: {rightHard}</p>
            </div>
            <div className="histogram rounded">
                <div className="bar">
                    <div style={{color: 'black' }}>{counter}</div>
                    <div style={{height: `${counter *25}px`, backgroundColor: 'teal', borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}></div>
                </div>
                <div className="bar">
                    <div style={{color: 'black' }}>{right}</div>
                    <div style={{ height: `${right* 25}px`, backgroundColor: 'purple', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}></div>
                </div>
                <div className="bar">
                    <div style={{color: 'black' }}>{rightEasy}</div>
                    <div style={{ height: `${rightEasy *25}px`, backgroundColor: 'green', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}></div>
                </div>
                <div className="bar">
                    <div style={{color: 'black' }}>{rightMedium}</div>
                    <div style={{ height: `${rightMedium *25}px`, backgroundColor: 'orange', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}></div>
                </div>
                <div className="bar">
                    <div style={{color: 'black' }}>{rightHard}</div>
                    <div style={{ height: `${rightHard *25}px`, backgroundColor: 'red', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}></div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Results;
