const homeProduct = (state = {}, action: { type: any; id: any; query: any }) => {
    switch (action.type) {
        case 'HOME_PAGE_PRODUCT':
            return { query: action.query, title: "" };
        default:
            return state
    }
}

export default homeProduct;