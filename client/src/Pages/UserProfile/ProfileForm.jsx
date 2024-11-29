import React, {useState} from 'react'
import './Profile.css';
import { useDispatch } from 'react-redux'
import { updateprofile } from '../../action/users'
const ProfileForm = ({ currentuser, setswitch }) => {
    const [name, setname] = useState(currentuser?.result?.name)
    const [about, setabout] = useState(currentuser?.result?.about)
    const [tags, settags] = useState([])
    const dispatch = useDispatch();
    const handlesubmit = (e) => {
        e.preventDefault()
        if (tags[0] === '' || tags.length === 0) {
          alert("update tags field")
        }else{
          dispatch(updateprofile(currentuser?.result?._id,{name,about,tags}))
        }
        setswitch(false)
      }
  return (
    <div>
      <h2 className="edit-profile-title">Edit Your Profile</h2>
      <h3 className='edit-profile-title-2'>Public Information</h3>
      <form className="edit-profile-form" onSubmit={handlesubmit}>
        <label htmlFor="name">
          <h4>Display name</h4>
          <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
        </label>
        <label htmlFor="about">
          <h4>About me</h4>
          <textarea name="" id="about" cols="30" rows="10" value={about} onChange={(e) => setabout(e.target.value)}></textarea>
        </label>
        <label htmlFor="tags">
          <h4>Watched tags</h4>
          <p>Add tags separated by 1 space</p>
          <input
            type="text"
            id="tags"
            onChange={(e) => settags(e.target.value.split(" "))}
          />
        </label>
        <br />
        <input type="submit" value="Save" className='user-submit-btn' />
        <button type='button' className='user-cancel-btn' onClick={() => setswitch(false)}>Cancel</button>
      </form>
    </div>
  )
}

export default ProfileForm
