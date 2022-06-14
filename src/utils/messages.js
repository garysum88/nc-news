
export const loadingMsg = () => {

    return <p>Loading...</p>

}

export const voteErrorMsg = () => {

    return <p><span id="VoteError">An error is occured when casting a vote</span></p>

}


export const noLoginMsg = () => {
    return <p>You must log in to have full access to this app.</p>
}

export const loginMsg = () => {
    return  (
        <>
        <p>You can read articles, leave and manage your comments in this app.</p>

        <img src="https://onstipe.com/wp-content/themes/customtheme/assets/images/sma-onstipe.png" alt="home" width="50%" height="50%"></img>
        </>

    )
}

export const noLoginMsgForCommment = () => {
    return  <p><em>Log in your account to leave a comment.</em></p>

}

export const postCommentSuccessMsg = () => {
    return  <p>You have just posted a comment!</p>

}
export const postCommentFailMsg = () => {
    return  <p>An error occured when posting a comment!</p>

}