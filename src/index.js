import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className = "ui container comments">
            <ApprovalCard>
                <CommentDetail author = "sam" timeAgo = "Today at 5:00am" iSaid = "kot fare" angu = {faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "alex" timeAgo = "Today at 4:00am" iSaid = "kot" angu = {faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "john" timeAgo = "Today at 3:00am" iSaid = "hajd m" angu = {faker.image.avatar()}/>
            </ApprovalCard>   
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));