import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeFollowers, changeFollowing} from "../actions/statsAction.js";

const Stats = () => {
    const stats = useSelector(store => store.stats);
    const dispatch = useDispatch();

    const handleClickFollowersPlus = (e) => {
        e.preventDefault();
        dispatch(changeFollowers(stats.followers + 1));
    };
    const handleClickFollowersMinus = (e) => {
        e.preventDefault();
        dispatch(changeFollowers(stats.followers - 1));
    };
    const handleClickFollowingPlus = (e) => {
        e.preventDefault();
        dispatch(changeFollowing(stats.following + 1));
    };
    const handleClickFollowingMinus = (e) => {
        e.preventDefault();
        dispatch(changeFollowing(stats.following - 1));
    };
    return (
        <div>
            <p onContextMenu={handleClickFollowersMinus}
               onClick={handleClickFollowersPlus}>{`Followers:${stats.followers}`}</p>
            <p onContextMenu={handleClickFollowingMinus}
               onClick={handleClickFollowingPlus}>{`Following:${stats.following}`}</p>
        </div>
    );
};

export default Stats;