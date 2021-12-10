export const Layer = ({img}) => {
    return (
        <div className="layer">
            <div className="layer-wrap">
                <button
                    type="button"
                    className="btn-close">
                    <span>CLOSE</span>
                </button>
                <img src={img} alt=""/>
            </div>
        </div>
    );
};
