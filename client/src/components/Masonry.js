import {Link} from 'react-router-dom';

import {Portal} from './Portals';
import {Layer} from './Layer';

import '../styles/masonry.scss';

export const Masonry = ({data}) => {
    return (<div className="masonry">
            <div className="items left">
                {data.map((item, index) => <div
                    key={`'item-${index}`}
                    className="item">
                    <div className="img-wrap">
                        <Link to="#">
                            <img src={item.download_url}
                                 alt={item.author}/>
                        </Link>
                    </div>
                </div>)}
            </div>
            <Portal>
                <Layer img={data && data[0].download_url}/>
            </Portal>
        </div>
    );
};
