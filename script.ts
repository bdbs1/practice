export async function loadUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()

    const comments = await loadComments()
    return data.map(post => {
        return {
            ...post,
            comments: comments.filter(
                p => post.id === c.postId
            )
        }
    })
}