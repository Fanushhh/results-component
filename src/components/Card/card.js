import Result from "../Result/Result";
import Summary from "../Summary/summary";
import './card.scss'


export default function Card(){
    return(
        <div className="card-wrapper">
            <Result />
            <Summary />
        </div>
    )
}