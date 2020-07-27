import React from 'react';
import MainForumTable from '../../partials/MainForumTable/MainForumTable';

import './styles/HomeView.scss';


const HomeView = () => {
    return (
        <React.Fragment>
            <div class="home-view-intro">
                <div className="home-view-inner-intro">
                    <h1 className="home-view-heading">
                        Join our community of aspiring <span className="green">developers</span>
                    </h1>
                    <h5 className="home-view-sub-heading">
                        Engage in inspiring conversation, explore most shared learning resources, browse jobs and internships
                    </h5>
                </div>
            </div>
            <div class="home-view-container">
                <MainForumTable tableTitle={'Latest Updates'} flexWidth='8' iconName='fa-graduation-cap' />
                <MainForumTable tableTitle={'Other Questions'} flexWidth='4' iconName='fa-globe' />
            </div>
        </React.Fragment>
    )
}

export default HomeView;