import {CHANGE_IMAGE, CHANGE_NAME} from "../actions/userAction.js";
import {CHANGE_FOLLOWERS, CHANGE_FOLLOWING} from "../actions/statsAction.js";

const defaultState = {
    user: {
        name: "Monster",
        image: "https://gravatar.com/avatar/123?d=monsterid",
    },
    stats: {
        following: 0,
        followers: 0,
    }
};

export const twitterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state, user: {
                    ...state.user,
                    name: action.payload || state.user.name

                }
            };
        case CHANGE_IMAGE:
            console.log(action.payload);
            return {
                ...state, user: {
                    ...state.user,
                    image: action.payload || state.user.image
                }
            };
        case CHANGE_FOLLOWERS:
            return {
                ...state, stats: {
                    ...state.stats, followers: action.payload >= 0 ? action.payload : state.stats.followers
                }
            };
        case CHANGE_FOLLOWING:
            return {
                ...state, stats: {
                    ...state.stats, following: action.payload >= 0 ? action.payload : state.stats.following
                }
            };
        default:
            return state;

    }


};