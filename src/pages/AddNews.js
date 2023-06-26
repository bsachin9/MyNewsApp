import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Layout from '../components/Layout'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'

function AddNews() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()

  const save = async () => {
    setLoading(true)
    try {
      const payload = {
        title, 
        description,
        content,
        postedBy: 'user._id',
        email: user.email,
      }

      await axios.post('/api/newsitems/addnewsitem',payload)
      setLoading(false)
      toast ('News Added Successfully', 'success')
      navigate('/home')
    } catch (error) {
      console.log(error)
      toast('Something went wrong', 'error')
      setLoading(false)
    }
  }


  return (
    <Layout>
      {loading && <Spinner />}
      <h1 className="text-2xl font-semibold mt-5 ml-5">AddNews</h1>
      <div className="px-5 pt-5">

        <input value={title} 
        onChange={(e)=> setTitle(e.target.value)}
          type="text"
          className="border-2 h-10 w-full border-gray-300 px-5 mb-2"
          placeholder="Title"
        />

        <textarea value={description} 
        onChange={(e)=> setDescription(e.target.value)} 
          className="border-2 w-full border-gray-300 px-5 "
          rows="5"
          placeholder="Description"
        ></textarea>
      
        <textarea value={content} 
        onChange={(e)=> setContent(e.target.value)}
        className="border-2 w-full border-gray-300 px-5 draft-editor"
          rows="4"
          placeholder="Content"
        ></textarea>
        </div>

        <div className='flex justify-end space-x-5 pr-5 mt-1'>

          <button className='px-6 py-2 bg-pink-800 text-sm text-white'>BACK</button>
          
          <button className='px-6 py-2 bg-green-600 text-sm text-white' onClick={save}>SAVE</button>

        </div>
    </Layout>
  )
}

export default AddNews