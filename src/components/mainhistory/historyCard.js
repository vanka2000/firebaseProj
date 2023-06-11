


export default function HistoryCard ({data}){
    

    return <div className={`rightside_history ${data.visible}`}>
                <div className="cell">
                    <h4>{data.cardTitle}</h4>
                    <h3>{data.cardname}</h3>
                    <div className="table"><div className="green">{data.cardPersent}</div> <div className="subtitle">{data.cardPersentSubtitle}</div></div>
                    <p className="nobr">{data.cardDescription}</p>
                </div>
                    <img className="history_card_img" src={data.cardImg} alt="imageCard"/>
                </div>    
}