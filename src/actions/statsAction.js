export const CHANGE_FOLLOWERS = 'CHANGE_FOLLOWERS';
export const CHANGE_FOLLOWING = 'CHANGE_FOLLOWING';

export const changeFollowers = (followers) => {
    return {
        type: CHANGE_FOLLOWERS,
        payload: followers
    };
};

export const changeFollowing = (following) => ({
    type: CHANGE_FOLLOWING,
    payload: following
});