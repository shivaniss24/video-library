const AppReducer = (state, action) => {
    switch (action.type) {

        case "SET_CATEGORIES_DATA":
            const categories = action.payload.categories;

            return {
                ...state,
                categories: categories
            };

        case "SET_VIDEOS_DATA":
            const videos = action.payload.videos;

            return {
                ...state,

                videos: videos
            };



        default:
            return state;
    }
};

export default AppReducer;
