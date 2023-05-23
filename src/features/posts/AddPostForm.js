import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postsSlice'
import { selectAllUsers } from '../User/UserSlice'

const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId ] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    const onAuthorChange = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )

            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option Key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
  return (
    <section>
        <h2>Add a New Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChange}
            />
            <label htmlFor="postAuthor">Author:</label>
            <select id="postAuthor" value={userId} onChange={onAuthorChange}>
                <option value=""></option>
                {usersOptions}
            </select>
            <label htmlFor="postContent">Post Content:</label>
            <input
            type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChange}
            />
            <button 
            type="button" 
            onClick={onSavePostClicked}
            disabled={!canSave}
            >Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm