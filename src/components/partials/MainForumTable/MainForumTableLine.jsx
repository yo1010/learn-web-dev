import React from 'react'

const MainForumTableLine = (props) => {
    const { heading, lastPost, creator, date } = props.data;
    return (
        <div class="table-line-container">
            <div className="table-line-heading">
                {heading} 
            </div>
            <div className="table-line-body">
                <div className="table-line-message">
                    {lastPost}
                </div>
                <div className="table-line-footer">
                    <div className="table-line-date">
                        {date}
                    </div>
                    <div className="table-line-creator">
                        {creator}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainForumTableLine;