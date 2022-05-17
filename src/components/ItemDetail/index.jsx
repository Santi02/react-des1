import React from "react";

export const ItemDetail = ({data}) => {
    return(
        <div className="container">
            <div className="detail">
                <img className="detail__iage" src={data.image} alt="" />
                <div className="content">
                    <h2>{data.title}</h2>
                </div>
            </div>
        </div>
    );
}
export default ItemDetail;