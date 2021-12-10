import {Portal} from './Portals';
import {Layer} from './Layer';

import '../styles/masonry.scss';

export const Masonry = ({data}) => {
    return (<div className="masonry">
            <div className="items left">
                {data && data.slice(0, 11).map((item, index) => <div
                    key={`'item-${index}`}
                    className="item">
                    <div className="img-wrap">
                        <img src={item.download_url}
                             alt={item.author}/>
                    </div>
                </div>)}
            </div>
            <Portal>
                <Layer img={data && data[0].download_url}/>
            </Portal>
        </div>
    );
};
