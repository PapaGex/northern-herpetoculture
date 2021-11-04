import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'Chahuoa',
                imageUrl: 'https://www.reptilis.com/774-large_default/mniarogekko-rhachodactylus-chahuoa-mainland-jpg',
                id: 1,
                linkUrl: 'chahuoa'
            },
                {
                    title: 'Eurodactylodes',
                    imageUrl: 'public/images/euroV.jpg',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'Leachianus',
                    imageUrl: '',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'Other Geckos',
                    imageUrl: './public/images/pady.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'Supplies',
                    imageUrl: '',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }]
        }
    }

    // eslint-disable-next-line react/require-render-return
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;