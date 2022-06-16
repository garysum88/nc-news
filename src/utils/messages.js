
export const LoadingMsg = () => {

    return <p>Loading...</p>

}

export const VoteErrorMsg = () => {

    return <p><span id="VoteError">An error is occured when casting a vote</span></p>

}


export const NoLoginMsg = () => {
    return <p>You must log in to have full access to this app.</p>
}

export const LoginMsg = () => {
    return  (
        <>
        <p>You can read articles, leave and manage your comments in this app.</p>

        <img src="https://onstipe.com/wp-content/themes/customtheme/assets/images/sma-onstipe.png" alt="home" width="50%"></img>
        </>

    )
}

export const NoLoginMsgForCommment = () => {
    return  <p><em>Log in your account to leave a comment.</em></p>

}

export const PostCommentSuccessMsg = () => {
    return  <p>You have just posted a comment!</p>

}
export const PostCommentFailMsg = () => {
    return  <p>An error occured when posting a comment!</p>

}

export const ArticleNotExistsMsg = () => {
    return  <p>The article ID you entered does not exist!</p>

}

export const DeletingComment = () => {
    return  <p>Deleting the comment...</p>

}

export const DeleteCommentErrMsg = () => {
    return  <p>An error is occured when deleting the comment.</p>

}
