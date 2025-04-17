import { CDN } from "../utilis/Const";
const ResCard = (props) => {
    const {resData}=props;
     return (
         <div className="card">
             <img src={`${CDN}${resData.info.cloudinaryImageId}`}alt="" />
             <div className="content">
             <h2>{resData.info.name}</h2> 
             <div className="ratings">
             <span>{`${resData.info.avgRating}*`}</span>
             <span className="span2">{resData.info.sla.slaString}</span>
             </div>
             <h4>
             {resData.info.cuisines.join(", ")}
             </h4>
             <h4>{resData.info.areaName}</h4>
 
             </div>
             
 
         </div>
     );
 };
 export default ResCard;