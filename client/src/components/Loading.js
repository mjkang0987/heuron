export const Loading = ({type}) => {
    return (
        <div className={`loading ${type}`}>
            <span className="icon-loading"/>
            <span className="loading-text">LOADING</span>
        </div>
    );
};
