import React from 'react';
import MainForumTableLine from './MainForumTableLine';

import './styles/MainForumTable.scss';


const exampleData = [
    {
        heading: 'How to learn React',

        lastPost: 'Go on youtube and find TraversyMedia',

        creator: 'Yavor Dimitrov',

        date: '10.05.2020'
    },
    {
        heading: 'How to learn Vue',

        lastPost: 'Go on youtube and find TraversyMedia',

        creator: 'Lucho Dimitrov',

        date: '10.06.2020'
    },
    {
        heading: 'How to learn Svelte',

        lastPost: 'Go on youtube and find TraversyMedia',

        creator: 'Alex Dimitrov',

        date: '08.06.2020'
    },
    {
        heading: 'How to learn Django',

        lastPost: 'Go on youtube and find TraversyMedia',

        creator: 'Lucho Dimitrov',

        date: '12.07.2020'
    }
]


const MainForumTable = ({ tableTitle, flexWidth, iconName }) => {
    return (
        <div class="main-forum-table" style={{ flex: `${flexWidth}`}}> 
            <div className="main-forum-title">{tableTitle} <i class={`fas ${iconName}`} /></div>
            <div class="inner-table">
                {exampleData.map(data => {
                    return <MainForumTableLine data={data} />
                })}
            </div>
        </div>
    )
}

export default MainForumTable;