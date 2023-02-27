import './category.scss';

export default function Category({category, score, icon}){
    return(
        <div className={category.toLowerCase()}>
            <div>
                <img src={icon}></img>
                <span>{category}</span>
            </div>
            <div>
                <p className='score'>{score} <span className="percentage">/ 100</span></p>
            </div>
        </div>
        

    )
}