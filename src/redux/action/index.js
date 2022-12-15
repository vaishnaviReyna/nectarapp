export const GET_COIN ="GET_COIN";

export const getCoin = (payload) => {
    return {
        type: GET_COIN,
        payload:payload
    };

}