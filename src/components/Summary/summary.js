import data from '../../data.json';
import Category from '../Category/category';
import './summary.scss';

export default function Summary() {
    return (
        <div className='card-summary'>
            <p className='summary'>Summary</p>
            {data.map((item, index) => {
                return <Category key={index} category={item.category} score={item.score} icon={item.icon} />
            })}
            <button className='continue-btn'>Continue</button>
        </div>
    )
    
}